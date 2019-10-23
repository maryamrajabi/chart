import {Injectable, Input} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MainService {
    url;
    // baseUrl = 'https://ayriaclub.com/Ufarm-backend/public/api/';    // pageUrl = 'admins';
    // baseUrl = 'http://192.168.102.39/Ufarm-backend/public/api/v1/admin/';
    // baseUrl = 'https://ayriaclub.com/app/v1/Ufarm-backend/public/api/v1/admin/';
    // baseUrl = 'http://192.168.101.201/Ufarm-backend/public/api/v1/admin/';
    // baseUrl = 'http://192.168.101.225:8080/Ufarm-backend/public/api/v1/dashboard/admin/';
    // baseUrl = 'http://192.168.0.103/Ufarm-backend/public/api/v1/dashboard/admin/';
    // baseUrl = 'http://79.175.113.232:8585/Ufarm-backend/public/api/v1/dashboard/admin/';
    // baseUrl = 'http://192.168.101.225:8080/Ufarm-backend/public/api/v1/admin/';
    // baseUrl = 'http://192.168.101.201/Ufarm-backend/public/api/v1/dashboard/admin/';

    // baseUrl = 'http://79.175.133.232:8585/api/v1/dashboard/admin/';
    // baseUrl = 'http://192.168.0.103:8080/Ufarm-backend/public/api/v1/dashboard/admin/';
    // baseUrl = 'http://192.168.0.111:8080/Ufarm-backend/public/api/v1/dashboard/admin/';

    // baseUrl = 'http://192.168.100.7:8080/Ufarm-backend/public/api/v1/dashboard/admin/';
    // baseUrl = 'https://ufarm.ir/Ufarm-backend/public/api/v1/dashboard/admin/';
    // @Input() urlBase = '';


    // @Input() urlBase = 'http://192.168.100.7:8080/Ufarm-backend/public/v1/dashboard/admin/';

    // @Input() urlBase = 'https://api.ufarm.ir/v1/dashboard/admin/';
    // @Input() urlBase = 'https://192.168.100.242/v1/dashboard/admin/';

    // @Input() URL = localStorage.setItem('URL', this.urlBase);
    @Input() baseUrl = localStorage.getItem('ADMINURL');
    @Input() token = localStorage.getItem('currentUserToken');

    constructor(private http: HttpClient) {
        // console.log(this.token);
    }

    index(pageUrl: string) {
        const tokenOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.token,
            })
        };
        this.url = this.baseUrl + pageUrl;
        // console.log(this.url);
        return this.http.get(this.url, tokenOptions);
    }

    indexCustom(pageUrl: string) {
        const tokenOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.token,
            })
        };
        this.url = pageUrl;
        return this.http.get(this.url, tokenOptions);
    }

    store(pageUrl: string, admin: FormData) {
        const tokenOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.token,
            })
        };
        this.url = this.baseUrl + pageUrl;
        return this.http.post(this.url, admin, tokenOptions);
    }

    show(pageUrl: string, id: number) {
        const tokenOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.token,
            })
        };
        this.url = this.baseUrl + pageUrl;
        return this.http.get(this.url + '/' + id, tokenOptions);
    }

    showCustom(pageUrl: string, id: number, urlCustom) {
        const tokenOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.token,
            })
        };
        this.url = this.baseUrl + pageUrl;
        return this.http.get(this.url + '/' + id + '/' + urlCustom, tokenOptions);
    }

    update(pageUrl: string, admin, id: number) {
        const tokenOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.token,
            })
        };
        this.url = this.baseUrl + pageUrl;

        return this.http.post(this.url + '/' + id, admin, tokenOptions);
    }

    destroy(pageUrl: string, id: number) {
        const tokenOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.token,
            })
        };
        this.url = this.baseUrl + pageUrl;
        return this.http.delete(this.url + '/' + id, tokenOptions);
    }

    updateCustom(pageUrl: string, admin, id: number, urlCustom) {
        const tokenOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.token,
            })
        };
        this.url = this.baseUrl + pageUrl;
        return this.http.post(this.url + '/' + id + '/' + urlCustom, admin, tokenOptions);
    }
}
