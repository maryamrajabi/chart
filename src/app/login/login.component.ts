import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../_services';
import {MainJsonService} from '../admin/main-json.service';
import {MainService} from '../admin/main.service';
import {AppSettings} from '../interfaces/app-settings';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    service1;
    service2;
    tags = [];
    link_id;
    URL;
    url;
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    response;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private mainJsonService: MainJsonService,
        private mainService: MainService,
        private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        if (localStorage.getItem('currentUserToken')) {
            this.service1 = this.mainService.index('units').subscribe(
                success => {
                    this.router.navigate(['/main']);
                }, error => {
                    localStorage.setItem('currentUserName', '');
                    localStorage.setItem('currentUserImg', '');
                    localStorage.setItem('currentUserToken', '');
                    this.mainJsonService.token = '';
                    this.mainService.token = '';
                    this.router.navigate(['/login']);
                }
            );
        }
        this.URL = AppSettings.API_BASEURL;
        this.url = AppSettings.API_BASEURL;
        localStorage.setItem('ADMINURL', '');
        localStorage.setItem('ADMINURL', AppSettings.API_BASEURL);
        this.mainService.baseUrl = AppSettings.API_BASEURL;
        this.mainJsonService.baseUrl = AppSettings.API_BASEURL;
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.service2 = this.authenticationService.login('auths/login', this.f.username.value, this.f.password.value)
            .subscribe(
                data => {
                    localStorage.setItem('currentUser', data);
                    this.mainJsonService.token = data.extra.token;
                    this.mainService.token = data.extra.token;
                    localStorage.setItem('currentUserToken', data.extra.token);
                    localStorage.setItem('currentUserId', data.data.id);
                    this.link_id = data.data.link_id;
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.loading = false;
                });
    }

}
