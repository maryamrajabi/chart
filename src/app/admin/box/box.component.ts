import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-box',
    templateUrl: './box.component.html',
    styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
    @Input() id;
    @Input() color;
    @Input() color1;
    @Input() color2;
    @Input() count;
    @Input() totals;
    @Input() totalCount;
    @Input() title1;
    @Input() title2;
    @Input() boxTitle;
    @Input() unit;

    constructor() {
    }

    ngOnInit() {
        console.log(this.count);
    }

    getColor() {
        return 'linear-gradient(to left, rgba(' + this.color2 + ', 0.3) 0%, rgba(255, 255, 255, 0) 95%)';
    }
}
