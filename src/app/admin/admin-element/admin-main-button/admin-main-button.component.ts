import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../../interfaces/Item';
import {Constants} from '../../../interfaces/app-settings';

@Component({
    selector: 'app-admin-main-button',
    templateUrl: './admin-main-button.component.html',
})
export class AdminMainButtonComponent implements OnInit {
    @Input() item: Item;
    @Input() showTrash: boolean;

    constructor() {
    }

    ngOnInit() {
        this.showTrash = Constants.TRASH;
    }

}
