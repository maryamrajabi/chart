export class AppSettings {
    public static LOCAL = false;
    public static URL_SITE = 'http://ufarm.ir';
    // public static API_BASEURL = 'http://backend2.ufarm/statistics/v1/dashboard/admin/';
    public static API_BASEURL = 'https://api.ufarm.ir/v1/dashboard/admin/';
    public static API_BASEURL_LOCAL = 'http://192.168.100.7:8080/Ufarm-backend/public/v1/dashboard/admin/';
    public static API_BASEURL_LOCAL_MARYAM = 'http://192.168.100.6:8000/v1/dashboard/admin/';
    public static API_BASEURL_TEST_STATE = 'https://test.ufarm.ir/v1/dashboard/admin/';
    public static API_BASEURL_BACKEND_UFARM = 'http://backend2.ufarm/trash/v1/dashboard/admin/';
    public static CHARTS = 'charts';
    public static MARKETING = 'marketing';
    public static USERS = 'users';

    /* notification route */
    public static NOTIFICATION_ROUTE = [
        {id: 'user_store', tag: 'UserCount'},
        {id: 'support_store', tag: 'SupportCount'},
        {id: 'request_credit', tag: 'RequestCreditCount'},
        {id: 'transfer_credit', tag: 'TransferCreditCount'},
        {id: 'request_credit_status', tag: 'RequestCreditCount'},
        {id: 'invoice_store', tag: 'invoiceCount'},
        {id: 'order_request', tag: 'OrderRequestCount'},
        {id: 'order_status', tag: 'OrderRequestCount'},
        {id: 'product_sale_store', tag: 'ProductSalesCount'},
        {id: 'product_sale_status', tag: 'ProductSalesCount'},
        {id: 'product_sale_update', tag: 'ProductSalesCount'}
    ];
    public static NOTIFICATION_USER_STORE = 'user_store';
    public static NOTIFICATION_SUPPORT_STORE = 'support_store';
    public static NOTIFICATION_INVOICE_STORE = 'invoice_store';
    public static NOTIFICATION_ORDER_REQUEST = 'order_request';
    public static NOTIFICATION_ORDER_STATUS = 'order_status';
    public static NOTIFICATION_REQUEST_CREDIT = 'request_credit';
    public static NOTIFICATION_REQUEST_CREDIT_STATUS = 'request_credit_status';
    public static NOTIFICATION_PRODUCT_SALE_STORE = 'product_sale_store';
    public static NOTIFICATION_PRODUCT_SALE_STATUS = 'product_sale_status';
    public static NOTIFICATION_PRODUCT_SALE_UPDATE = 'product_sale_update';
    public static NOTIFICATION_TRANSFER_CREDIT = 'transfer_credit';

}

export class Constants {
    public static TRASH = false;
}
