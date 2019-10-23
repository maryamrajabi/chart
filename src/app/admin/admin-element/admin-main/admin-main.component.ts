import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js';
import {MainService} from '../../main.service';
import {AppSettings} from '../../../interfaces/app-settings';

@Component({
    selector: 'app-admin-main',
    templateUrl: './admin-main.component.html',
})
export class AdminMainComponent implements OnInit {
    listArray = [
        {name: 'تعداد مرغداران', color: '#007aff'},
        {name: 'تعداد تامین کنندگان', color: '#5ac8fa'},
        {name: 'تعداد مشتریان', color: '#5856d6'},
        {name: 'تراکنش مسقیم', color: '#ff3b30'},
        {name: 'تراکنش غیرمستقیم', color: '#f79c1e'},
        {name: 'تراکنش مجموع', color: '#ffcc00'},
    ];
    values = [];
    response;
    responseTelegram;
    responseInstagram;
    url = AppSettings.CHARTS;
    urlMarketing = AppSettings.MARKETING;
    urlSocial = this.urlMarketing + '?search_by=type&search=';
    invoice_transactions_sum;
    other_transactions_sum;
    transactions_sum;
    transactions_sum_total = 23300000000;
    consumers_count;
    consumers_count_total = 167;
    providers_count;
    providers_count_total = 10;
    users_has_chicken_activity_count;
    users_has_chicken_activity_count_total = 92;

    consumers_count_percent;
    transactions_sum_percent;
    invoice_transactions_sum_percent;
    other_transactions_sum_percent;
    providers_count_percent;
    users_has_chicken_activity_count_percent;
    /*telegram */
    number_follower_telegram;
    number_post_telegram;

    /*instagram*/

    number_view_instagram;
    number_follower_instagram;
    number_like = null;
    number_post = null;

    constructor(private mainService: MainService) {
    }

    ngOnInit() {
        this.values = [20, 30, 40, 10, 50, 30];
        this.users_has_chicken_activity_count = 20;
        this.other_transactions_sum = 12000000000;
        this.invoice_transactions_sum = 21000000000;
        this.transactions_sum = 15000000000;
        this.consumers_count = 20;
        this.providers_count = 5;
        this.number_follower_telegram = 100;
        this.number_post_telegram = 90;
        this.number_follower_instagram = 200;
        this.number_view_instagram = 1;
        this.number_like = 10;
        this.number_post = 50;
        // this.utilities();
        // this.marketing();
    }

    utilities() {
        this.mainService.index(this.url).subscribe(
            success => {
                this.response = success;
                console.log(this.response);

                if (this.response.data.internal_transactions_sum === null) {
                    this.invoice_transactions_sum = this.response.data.internal_transactions_sum;
                } else {
                    this.invoice_transactions_sum = this.response.data.invoice_transactions_sum;
                }
                if (this.response.data.external_transactions_sum === null) {
                    this.other_transactions_sum = this.response.data.external_transactions_sum;
                } else {
                    this.other_transactions_sum = this.response.data.other_transactions_sum;
                }
                if (this.response.data.users_has_chicken_category_count === null) {
                    this.users_has_chicken_activity_count = this.response.data.users_has_chicken_category_count;
                } else {
                    this.users_has_chicken_activity_count = this.response.data.users_has_chicken_activity_count;
                }

                this.transactions_sum = this.response.data.transactions_sum;
                this.consumers_count = this.response.data.consumers_count;
                this.providers_count = this.response.data.providers_count;

                this.consumers_count_percent = ((this.consumers_count / this.consumers_count_total) * 100).toFixed(0);
                this.transactions_sum_percent = ((this.transactions_sum / this.transactions_sum_total) * 100).toFixed(0);
                this.invoice_transactions_sum_percent = ((this.invoice_transactions_sum / this.transactions_sum_total) * 100).toFixed(0);
                this.other_transactions_sum_percent = ((this.other_transactions_sum / this.transactions_sum_total) * 100).toFixed(0);
                this.providers_count_percent = ((this.providers_count / this.providers_count_total) * 100).toFixed(0);
                this.users_has_chicken_activity_count_percent = ((this.users_has_chicken_activity_count / this.users_has_chicken_activity_count_total) * 100).toFixed(0);
                // console.log(this.consumers_count_percent);
                // console.log(this.transactions_sum_percent);
                // this.values = [this.consumers_count_percent, this.transactions_sum_percent, this.other_transactions_sum_percent, this.invoice_transactions_sum_percent, this.providers_count_percent, this.users_has_chicken_activity_count_percent];
            }, error => {
                // console.log(error);
            }
        );
    }

    marketing() {
        this.mainService.index(this.urlSocial + 'telegram').subscribe(
            success => {
                this.responseTelegram = success;
                console.log(this.responseTelegram);
                this.number_follower_telegram = this.responseTelegram.data[0].number_follower;
                this.number_post_telegram = this.responseTelegram.data[0].number_post;
            }, error => {
                // console.log(error);
            }
        );
        this.mainService.index(this.urlSocial + 'instagram').subscribe(
            success => {
                this.responseInstagram = success;
                console.log(this.responseInstagram);
                this.number_follower_instagram = this.responseInstagram.data[0].number_follower;
                this.number_view_instagram = this.responseInstagram.data[0].number_view;
                this.number_like = this.responseInstagram.data[0].number_like;
                this.number_post = this.responseInstagram.data[0].number_post;
            }, error => {
                // console.log(error);
            }
        );
    }
}
