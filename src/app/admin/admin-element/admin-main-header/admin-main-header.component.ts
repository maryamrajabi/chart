import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-admin-main-header',
    templateUrl: './admin-main-header.component.html'
})
export class AdminMainHeaderComponent implements OnInit {
    @Input() title: string;

    constructor() {
    }

    ngOnInit() {
    }

}
