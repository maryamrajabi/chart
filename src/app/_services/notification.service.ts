import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AppSettings} from '../interfaces/app-settings';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    item = 0;

    getTagRoute = AppSettings.NOTIFICATION_ROUTE;

    constructor() {
        if (!localStorage.getItem('NotifyCount')) {
            localStorage.setItem('NotifyCount', '');
        }
        if (!localStorage.getItem('Message')) {
            localStorage.setItem('Message', '');
        }
        for (const tagRoute of this.getTagRoute) {
            if (!localStorage.getItem(tagRoute.tag)) {
                localStorage.setItem(tagRoute.tag, '');
            }
        }
    }

    private notifyCount: BehaviorSubject<number> = new BehaviorSubject<number>(+(localStorage.getItem('NotifyCount')));
    private userCount: BehaviorSubject<number> = new BehaviorSubject<number>(+(localStorage.getItem('UserCount')));
    private supportCount: BehaviorSubject<number> = new BehaviorSubject<number>(+(localStorage.getItem('SupportCount')));
    private requestCreditCount: BehaviorSubject<number> = new BehaviorSubject<number>(+(localStorage.getItem('RequestCreditCount')));
    private invoiceCount: BehaviorSubject<number> = new BehaviorSubject<number>(+(localStorage.getItem('InvoiceCount')));
    private orderRequestCount: BehaviorSubject<number> = new BehaviorSubject<number>(+(localStorage.getItem('OrderRequestCount')));
    private transferCreditCount: BehaviorSubject<number> = new BehaviorSubject<number>(+(localStorage.getItem('TransferCreditCount')));
    private productSaleCount: BehaviorSubject<number> = new BehaviorSubject<number>(+(localStorage.getItem('ProductSaleCount')));
    private message: BehaviorSubject<string> = new BehaviorSubject<string>(localStorage.getItem('Message'));

    getNotifyMessage() {
        // console.log('MESSAGE: ', this.message);
        // console.log('Observable MESSAGE : ', this.message.asObservable());
        return this.message.asObservable();
    }

    updateNotifyMessage() {
        this.message.next(localStorage.Message);
    }

    getNotifyCount() {
        return this.notifyCount.asObservable();
    }

    updateNotifyCount(items: number) {
        this.notifyCount.next(items);
    }

    getuserCount() {
        return this.userCount.asObservable();
    }

    updateUserCount(items: number) {
        this.userCount.next(items);
    }


    getproductSaleCount() {
        return this.productSaleCount.asObservable();
    }

    updateProductSaleCount(items: number) {
        this.productSaleCount.next(items);
    }

    getsupportCount() {
        return this.supportCount.asObservable();
    }

    updateSupportCount(items: number) {
        this.supportCount.next(items);
    }

    getrequestCreditCount() {
        return this.requestCreditCount.asObservable();
    }

    updateRequestCreditCount(items: number) {
        this.requestCreditCount.next(items);
    }

    getinvoiceSaveCount() {
        return this.invoiceCount.asObservable();
    }

    updateInvoiceSaveCount(items: number) {
        this.invoiceCount.next(items);
    }

    getorderRequestCount() {
        return this.orderRequestCount.asObservable();
    }

    updateOrderRequestCount(items: number) {
        this.orderRequestCount.next(items);
    }

    getTransferCreditCount() {
        return this.transferCreditCount.asObservable();
    }

    updateTransferCredit(items: number) {
        this.transferCreditCount.next(items);
    }

}
