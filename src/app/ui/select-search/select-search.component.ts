import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface State {
    id: number;
    flag: string;
    name: string;
    population: string;
}

@Component({
    selector: 'app-select-search',
    templateUrl: './select-search.component.html',
    styleUrls: ['./select-search.component.css']
})
export class SelectSearchComponent {
    stateCtrl = new FormControl();
    filteredStates: Observable<State[]>;
    @Input() selectedData;
    @Input() readonly = false;
    @Output() selected: EventEmitter<any> = new EventEmitter();
    @Input() selectId ;
    @Input() ignore = false ;
    @Input() states: State[] = [
        {
            id: 1,
            name: 'Arkansas',
            population: '2.978M',
            // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
            flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
        },
        {
            id: 2,
            name: 'California',
            population: '39.14M',
            // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
            flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
        },
        {
            id: 3,
            name: 'Florida',
            population: '20.27M',
            // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
            flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
        },
        {
            id: 4,
            name: 'Texas',
            population: '27.47M',
            // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
            flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
        }
    ];

    constructor() {
        this.filteredStates = this.stateCtrl.valueChanges
            .pipe(
                startWith(''),
                map(state => state ? this._filterStates(state) : this.states.slice())
            );
    }

    private _filterStates(value: string): State[] {
        const filterValue = value.toLowerCase();

        return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
    }

    sendMessage($event, i, selected) {
        if ($event.source.selected === true) {
            this.selected.emit(selected);
        }
    }
}
