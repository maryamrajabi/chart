import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-radio-button',
    templateUrl: './radio-button.component.html',
    styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {
    @Input() items;
    @Input() label;
    @Output() favoriteSeason: EventEmitter<number> = new EventEmitter<number>();
    options: FormGroup;

    constructor(fb: FormBuilder) {
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
    }

    ngOnInit() {
    }

    sendValue($event) {
        this.favoriteSeason.emit();
    }
}
