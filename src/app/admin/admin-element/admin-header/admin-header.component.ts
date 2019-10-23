import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {NotificationService} from '../../../_services/notification.service';
import {MainService} from '../../main.service';
import {interval} from 'rxjs';
import {Router} from '@angular/router';
import {MainJsonService} from '../../main-json.service';
import {ChabokService} from '../../../_services/chabok.service';
import {AppSettings} from '../../../interfaces/app-settings';

@Component({
    selector: 'app-admin-header',
    templateUrl: './admin-header.component.html'
})
export class AdminHeaderComponent implements OnInit {
    URL;
    notification = 0;

    response;
    setUrlIsTrue = false;
    countUrl = 0;
    server = AppSettings.API_BASEURL;
    serverCheck = false;
    local = AppSettings.API_BASEURL_LOCAL;
    localCheck = false;
    localMaryam = AppSettings.API_BASEURL_LOCAL_MARYAM;
    localMaryamCheck = false;
    currentUserNamed;
    currentUserImgd;
    currentUserTokend;
    productSaleCount = 0;
    providerCount = 0;

    notificationNotifyMessage;
    notificationNotifyRoute = [];
    notificationUser = 0;
    notificationProductSale = 0;
    notificationTransaction = 0;
    /* invoice */
    notificationOrderRequest = 0;
    notificationSupport = 0;
    notificationRequestCredit = 0;    notificationNotify = 0;
    count;
    backLocal1 = AppSettings.API_BASEURL_BACKEND_UFARM;
    backLocal1Check = false;
    local1 = AppSettings.API_BASEURL_TEST_STATE;
    local1Check = false;
    local2 = 'http://192.168.100.243:8001/api/v1/dashboard/admin/';
    local2Check = false;
    local3 = 'http://192.168.100.243:8002/api/v1/dashboard/admin/';
    local3Check = false;
    local4 = 'http://192.168.100.243:8003/api/v1/dashboard/admin/';
    local4Check = false;
    local5 = 'http://192.168.100.243:8004/api/v1/dashboard/admin/';
    local5Check = false;
    local6 = 'http://192.168.100.243:8005/api/v1/dashboard/admin/';
    local6Check = false;
    local7 = 'http://192.168.100.243:8006/api/v1/dashboard/admin/';
    local7Check = false;
    local8 = 'http://192.168.100.243:8008/api/v1/dashboard/admin/';
    local8Check = false;

    constructor(private notificationService: NotificationService,
                private mainService: MainService,
                private mainJsonService: MainJsonService,
                private router: Router,
                private chabokService: ChabokService) {
    }

    ngOnInit() {

        this.indexData();

        this.notificationService.getNotifyMessage()
            .subscribe((value) => {
                if (value) {
                    // console.log(value);
                    // const valueMessage = JSON.parse(value);
                    // console.log(valueMessage);
                    // console.log(JSON.parse(value));
                    this.notificationNotifyMessage = JSON.parse(value);
                }
            });

        this.notificationService.getNotifyCount()
            .subscribe(value => {
                this.notificationNotify = value;
                this.notification = this.notificationNotify;

            });

        this.notificationService.getuserCount()
            .subscribe(value => {
                this.notificationUser = value;
            });
        this.notificationService.getproductSaleCount()
            .subscribe(value => {
                this.notificationProductSale = value;
            });
        this.notificationService.getsupportCount()
            .subscribe(value => {
                this.notificationSupport = value;
            });
        this.notificationService.getrequestCreditCount()
            .subscribe(value => {
                this.notificationRequestCredit = value;
            });
        this.notificationService.getinvoiceSaveCount()
            .subscribe(value => {
                this.notificationTransaction = value;
            });
        this.notificationService.getorderRequestCount()
            .subscribe(value => {
                this.notificationOrderRequest = value;
            });

        this.currentUserNamed = localStorage.getItem('currentUserName');
        this.currentUserImgd = localStorage.getItem('currentUserImg');
        this.currentUserTokend = localStorage.getItem('currentUserToken');
        this.count = document.querySelectorAll('ulrs').length;
        this.URL = localStorage.getItem('ADMINURL');
        // console.log(this.URL, this.server);

        this.serverCheck = false;
        this.localCheck = false;
        this.local1Check = false;
        this.backLocal1Check = false;
        this.local2Check = false;
        this.local3Check = false;
        this.local4Check = false;
        this.local5Check = false;
        this.local6Check = false;
        this.local7Check = false;
        this.local8Check = false;
        if (this.URL === this.server) {
            this.serverCheck = true;
        } else if (this.URL === this.backLocal1) {
            this.backLocal1Check = true;
        } else if (this.URL === this.local) {
            this.localCheck = true;
        } else if (this.URL === this.local1) {
            this.local1Check = true;
        } else if (this.URL === this.local2) {
            this.local2Check = true;
        } else if (this.URL === this.local3) {
            this.local3Check = true;
        } else if (this.URL === this.local4) {
            this.local4Check = true;
        } else if (this.URL === this.local5) {
            this.local5Check = true;

        } else if (this.URL === this.local6) {
            this.local6Check = true;

        } else if (this.URL === this.local7) {
            this.local7Check = true;
        } else {
            this.local8Check = true;

        }
    }

    clearNotifyCount() {
        // localStorage.setItem('NotifyCount', '');
        // this.notificationService.updateNotifyCount(+localStorage.getItem('NotifyCount'));
    }

    indexData() {
        // this.mainService.index('units').subscribe(
        //     success => {
        //         // console.log(success);
        //     }, error => {
        //         // console.log(error);
        //         localStorage.setItem('currentUserName', '');
        //         localStorage.setItem('currentUserImg', '');
        //         localStorage.setItem('currentUserToken', '');
        //         this.mainJsonService.token = '';
        //         this.mainService.token = '';
        //         this.router.navigate(['/login']);
        //     }
        // );
    }

    sidbarToggle(e) {
        e.preventDefault();
        $('.main-sidebar').toggleClass('toggled');
        $('.logo').toggleClass('toggled');
    }

    setUrl(url) {
        // console.log(url);
        localStorage.setItem('ADMINURL', url);
        this.URL = localStorage.getItem('ADMINURL');
        location.reload();
    }

    showUrl() {
        setTimeout(() => {
            this.countUrl = 0;
        }, 1000);
        this.countUrl++;
        if (this.countUrl === 5) {
            this.setUrlIsTrue = true;
        }
    }

    logout() {
        this.chabokService.logout();
        this.router.navigate(['/login']);
    }
}
