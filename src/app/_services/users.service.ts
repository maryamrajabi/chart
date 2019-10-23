import {Injectable} from '@angular/core';
import {MainService} from '../admin/main.service';
import {AppSettings} from '../interfaces/app-settings';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    response;
    url = AppSettings.USERS;
    constructor(private mainService: MainService) {
    }

    show(userId) {
        this.mainService.show(this.url, userId).subscribe(
            success => {
                console.log(this.response);
                this.response = success;
            },
            error => {
                this.response = error;
                console.log(this.response);
            }
        );
    }

    index() {
        // this.mainService.index('provinces').subscribe(
        //     success => {
        //         this.responseFilter = success;
        //         if (this.responseFilter) {
        //             // console.log(this.response4);
        //             for (let i = 0; i < this.responseFilter.data.length; i++) {
        //                 const l = this.responseFilter.data[i];
        //                 const subcatId = l.id;
        //                 const attrName = l.name;
        //                 const newArr = [];
        //                 newArr['id'] = subcatId;
        //                 newArr['name'] = attrName;
        //                 this.filteredStates.push(newArr);
        //             }
        //         }
        //     }
        // );
    }
}
