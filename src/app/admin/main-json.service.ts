import {Injectable, Input} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};
// const httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'text/xml' })
// };
@Injectable({
    providedIn: 'root'
})
export class MainJsonService {
    url;
    // baseUrl = 'http://192.168.101.225:8080/Ufarm-backend/public/api/v1/dashboard/admin/';

    // baseUrl = 'http://192.168.100.7:8080/Ufarm-backend/public/api/v1/dashboard/admin/';
    // baseUrl = 'https://ufarm.ir/Ufarm-backend/public/api/v1/dashboard/admin/';


    // @Input() urlBase = 'http://192.168.100.7:8080/Ufarm-backend/public/v1/dashboard/admin/';

    // @Input() urlBase = 'https://api.ufarm.ir/v1/dashboard/admin/';
    // @Input() urlBase = 'https://192.168.100.242/v1/dashboard/admin/';

    // @Input() URL = localStorage.setItem('URL', this.urlBase);
    @Input() baseUrl = localStorage.getItem('ADMINURL');
    @Input() token = localStorage.getItem('currentUserToken');


    constructor(private http: HttpClient) {
        // console.log(this.token);
    }

    // create(userId, title, body) {
    //     const postedData = { userid: 1, title: title, body: body };
    //     return this.http.post('https://jsonplaceholder.typicode.com/posts', postedData, httpOptions).subscribe(result => {
    //         console.log(result);
    //     }, error => console.log('There was an error: '));
    // }

    index(pageUrl: string) {
        const tokenOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.token,
            })
        };
        this.url = this.baseUrl + pageUrl;
        return this.http.get(this.url, tokenOptions);
    }

    store(pageUrl: string, postedData) {
        const Options = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.token,
                'Content-Type': 'application/json'
            })
        };
        this.url = this.baseUrl + pageUrl;
        return this.http.post(this.url, postedData, Options);
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
        this.url = this.baseUrl + pageUrl;
        return this.http.delete(this.url + '/' + id);
    }
}
