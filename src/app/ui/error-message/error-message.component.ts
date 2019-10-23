import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-error-message',
    templateUrl: './error-message.component.html'
})
export class ErrorMessageComponent implements OnInit {
    @Input() response;
    @Input() messageTitle;
    @Input() messageAction;

    constructor() {
    }

    ngOnInit() {
    }

}
