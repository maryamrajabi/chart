import {Injectable} from '@angular/core';
import chabokpush from 'chabokpush';
import {NotificationService} from './notification.service';
import {AppSettings} from '../interfaces/app-settings';

@Injectable({
    providedIn: 'root'
})
export class ChabokService {

    chabok;
    count = 0;
    message: any = [];
    constructor(private notificationService: NotificationService) {
        let auth;
        let options;
        if (AppSettings.LOCAL) {
            auth = {
                appId: 'utapovo',
                webKey: 'dfffc0f5b438a223e70a51dabfb0bd4d963f374b',
                devMode: true
            };
            options = {
                webpush: {
                    enabled: true,
                    publicKey: 'BGl-v6iuLaOvEP3PbUl9sZKfqtMX4Uyv7mvTDvrlaYZrsuoJ9J7Fi61vIYiQx7njf5DxM4tzPl1lp8PMWJOEbu0'
                },
                silent: false,
            };
        } else {
            auth = {
                appId: 'ufarm-admin',
                webKey: 'a0af5e09170504a57f7ceba4e5043e08d866bcaf',
                devMode: false
            };
            options = {
                webpush: {
                    enabled: true,
                    publicKey: 'BIWSc6s4Ua6cGqQWUaexsAKsNJrDRt1pXuTJFHn-V6eMhXW3nO18sT6hjDv9Xel-m3GXDxFXyKHGZNh8fqlnP58'
                },
                silent: false,
            };
        }

        this.chabok = new chabokpush.Chabok(auth, options);
        if (this.chabok.isRegistered() && this.chabok.getUserId()) {
            this.chabok
                .register(this.chabok.getUserId())
                .then(() => {
                    this.chabok.getTags()
                        .then(tags => {
                            this.chabok.addTag('registered');
                            for (const tag of tags) {
                                this.chabok.addTag(tag);
                            }
                        });
                });
        } else {
            /*create random user id for guest*/
            const userIdGuest = Math.floor(Math.random() * 10000000000);
            localStorage.setItem('userID', userIdGuest.toString());
            const userId = localStorage.getItem('userID');
            this.chabok
                .register(userId)
                .then(() => {
                    this.chabok.addTag('guest');
                });
        }


        this.chabok.on('registered', () => {
        });

        this.chabok.on('connected', () => {
            this.chabok.subscribe('important'); // subscribe to important channel
            this.chabok.subscribeEvent('geo'); // subscribe to geo events
        });

        this.chabok.on('message', msg => {
            this.count = this.count + 1;
            if (msg.notification) {
                let route;
                if (msg.data.route) {
                    route = msg.data.route;
                }

                const getTagRoute = AppSettings.NOTIFICATION_ROUTE;
                for (const tagRoute of getTagRoute) {
                    if (route !== undefined) {
                        if (route === tagRoute.id) {
                            let userCount = +(localStorage.getItem(tagRoute.tag));
                            userCount++;
                            localStorage.setItem(tagRoute.tag, userCount.toString());

                            /*get count of any notification*/
                            if (route === AppSettings.NOTIFICATION_USER_STORE) {
                                this.notificationService.updateUserCount(userCount);
                            } else if (route === AppSettings.NOTIFICATION_SUPPORT_STORE) {
                                this.notificationService.updateSupportCount(userCount);
                            } else if (route === AppSettings.NOTIFICATION_REQUEST_CREDIT) {
                                this.notificationService.updateRequestCreditCount(userCount);
                            } else if (route === AppSettings.NOTIFICATION_REQUEST_CREDIT_STATUS) {
                                this.notificationService.updateRequestCreditCount(userCount);
                            } else if (route === AppSettings.NOTIFICATION_INVOICE_STORE) {
                                this.notificationService.updateInvoiceSaveCount(userCount);
                            } else if (route === AppSettings.NOTIFICATION_ORDER_REQUEST) {
                                this.notificationService.updateOrderRequestCount(userCount);
                            } else if (route === AppSettings.NOTIFICATION_ORDER_STATUS) {
                                this.notificationService.updateOrderRequestCount(userCount);
                            } else if (route === AppSettings.NOTIFICATION_PRODUCT_SALE_STORE) {
                                this.notificationService.updateProductSaleCount(userCount);
                            } else if (route === AppSettings.NOTIFICATION_PRODUCT_SALE_STATUS) {
                                this.notificationService.updateProductSaleCount(userCount);
                            } else if (route === AppSettings.NOTIFICATION_PRODUCT_SALE_UPDATE) {
                                this.notificationService.updateProductSaleCount(userCount);
                            } else if (route === AppSettings.NOTIFICATION_TRANSFER_CREDIT) {
                                this.notificationService.updateTransferCredit(userCount);
                            }

                            const messageBody = msg.notification.body;

                            /*get message to show in header noification*/
                            if (messageBody) {
                                const messageBodyArray = {route: route, body: messageBody};
                                this.message.push(messageBodyArray);
                                localStorage.setItem('Message', JSON.stringify(this.message));
                                this.notificationService.updateNotifyMessage();
                            }
                        }
                    }
                }
            }
            localStorage.setItem('NotifyCount', '');
            this.notificationService.updateNotifyCount(this.count);
        });
        this.chabok.on('geo', geoEvent => console.log('Geo Event ', geoEvent));
        this.chabok.on('connecting', () => console.log('Reconnecting'));
        this.chabok.on('disconnected', () => console.log('offline'));
        this.chabok.on('closed', () => console.log('disconnected'));

    }

    login(userId, tags): void {
        this.chabok.unregister();
        this.chabok
            .register(userId)
            .then(() => {
                this.chabok.addTag('registered');
                for (const tag of tags) {
                    this.chabok.addTag(tag);
                }
            });
    }

    logout(): void {
        this.chabok.unregister();
        if (localStorage.getItem('userID')) {
            const userId = localStorage.getItem('userID');
            this.chabok
                .register(userId)
                .then(() => {
                    this.chabok.addTag('guest');
                    this.chabok.removeTag('registered');
                });

        } else {
            localStorage.setItem('userID', Math.floor(Math.random() * 10000000000).toString());
            const userId = localStorage.getItem('userID');
            this.chabok
                .register(userId)
                .then(() => {
                    this.chabok.removeTag('registered');
                    this.chabok.addTag('guest');
                });
        }
    }
}
