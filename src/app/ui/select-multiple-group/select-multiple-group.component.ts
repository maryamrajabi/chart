import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-select-multiple-group',
  templateUrl: './select-multiple-group.component.html',
  styleUrls: ['./select-multiple-group.component.css']
})
export class SelectMultipleGroupComponent implements OnInit {

    message = 'holooo';
    @Output() selected: EventEmitter <any> = new EventEmitter<any>();
    @Output() messageEvent: EventEmitter <string> = new EventEmitter<string>();

    toppings = new FormControl();
    @Input() toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni',
        'Sausage', 'Tomato', 'Extra cheese', 'Mushroom', 'Onion', 'Pepperoni',
        'Sausage', 'Tomato'];
    constructor() { }

    ngOnInit() {
    }
    sendMessage($event) {
        this.messageEvent.emit($event);
    }
}
