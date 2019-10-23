import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-select-multiple',
  templateUrl: './select-multiple.component.html',
  styleUrls: ['./select-multiple.component.css']
})
export class SelectMultipleComponent implements OnInit {
    myControl = new FormControl();
    @Input() options: string[] = ['One', 'Two', 'Three'];
    filteredOptions: Observable<string[]>;
  constructor() { }

    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value))
        );
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
}
