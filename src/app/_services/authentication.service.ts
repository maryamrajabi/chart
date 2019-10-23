import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
    url;
    // baseUrl = 'http://192.168.100.7:8080/Ufarm-backend/public/api/v1/dashboard/admin/';
    // baseUrl = 'https://ufarm.ir/Ufarm-backend/public/api/v1/dashboard/admin/';
    // @Input() urlBase = '';
    // @Input() URL = localStorage.setItem('URL', this.urlBase);

    @Input() baseUrl = localStorage.getItem('ADMINURL');

    constructor(private http: HttpClient) {
    }

    login(pageUrl: string, username: string, password: string) {
        this.url = this.baseUrl + pageUrl;
        return this.http.post<any>(this.url, {email: username, password: password})
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.extra.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    const myArrStr = JSON.stringify(user);
                    const myArr = JSON.parse(myArrStr);
                    localStorage.setItem('currentUserName', myArr.data.name);
                    localStorage.setItem('currentUserImg', myArr.data.photo_square);
                    localStorage.setItem('currentUserToken', myArr.extra.token);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('currentUserToken');
    }
}
