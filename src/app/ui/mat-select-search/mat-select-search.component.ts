import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, ReplaySubject} from 'rxjs';
import {MatSelect, VERSION} from '@angular/material';
import {Subject} from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';


export interface Bank {
    id: number;
    name: string;
}

export interface State {
    id: number;
    flag: string;
    name: string;
    population: string;
}

@Component({
    selector: 'app-mat-select-search',
    templateUrl: './mat-select-search.component.html',
    styleUrls: ['./mat-select-search.component.css']
})
export class MatSelectSearchComponent implements OnInit, OnDestroy, AfterViewInit {

    @Input() placeholder;
    @Input() selectedId;
    @Output() selected: EventEmitter<any> = new EventEmitter();
    @Output() CtrlEmit: EventEmitter<any> = new EventEmitter();
    setValue;

    stateCtrl = new FormControl();
    filteredStates: Observable<State[]>;
    version = VERSION;
    /** Label of the search placeholder */
    @Input() placeholderLabel = 'Suche';

    /** Label to be shown when no entries are found. Set to null if no message should be shown. */
    @Input() noEntriesFoundLabel = 'OK Optionen gefunden';

    /**
     * Whether or not the search field should be cleared after the dropdown menu is closed.
     * Useful for server-side filtering. See [#3](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/3)
     */
    @Input() clearSearchInput = false;

    /** Disables initial focusing of the input field */
    @Input() disableInitialFocus = false;

    /** control for the selected bank */
    public bankCtrl: FormControl = new FormControl();

    /** control for the MatSelect filter keyword */
    public bankFilterCtrl: FormControl = new FormControl();

    /** control for the selected bank for multi-selection */
    public bankMultiCtrl: FormControl = new FormControl();

    /** control for the MatSelect filter keyword multi-selection */
    public bankMultiFilterCtrl: FormControl = new FormControl();

    /** list of banks */
    @Input() banks: Bank[] = [
        {id: 1, name: 'جوجه یک روزه'},
        {id: 3, name: 'دان آماده'}
    ];
    @Input() banks1;

    /** list of banks filtered by search keyword */
    public filteredBanks: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);

    /** list of banks filtered by search keyword for multi-selection */
    public filteredBanksMulti: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);

    @ViewChild('singleSelect') singleSelect: MatSelect;

    /** Subject that emits when the component has been destroyed. */
    private _onDestroy = new Subject<void>();


    /**
     * search id in array
     * @param event = id to search it in array
     * @return object of array that finded it
     */
    showfilterValues(event) {
        // console.log(event);
        function isShowProduct(item) {
            return item.id === +(event);
        }

        const ok = this.banks.find(isShowProduct);
        const indexx = this.banks.indexOf(ok);
        // console.log(ok);
        // console.log(indexx);
        const itemd = this.banks[indexx];
        this.setValue = itemd;
        this.bankCtrl.setValue(this.setValue);
    }

    ngOnInit() {
        // console.log(this.banks);
        // console.log(this.banks1.length);

        // console.log(this.selectedId);

        // set initial selection
        if (this.selectedId) {
            this.showfilterValues(this.selectedId);
            // console.log(this.selectedId);
            // this.bankCtrl.setValue(this.banks[this.selectedId]);
        }
        // this.bankCtrl.setValue(this.banks[10]);
        // this.bankMultiCtrl.setValue([this.banks[10], this.banks[11], this.banks[12]]);

        // load the initial bank list
        this.filteredBanks.next(this.banks.slice());
        this.filteredBanksMulti.next(this.banks.slice());

        // listen for search field value changes
        this.bankFilterCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterBanks();
            });
        this.bankMultiFilterCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterBanksMulti();
            });
        this.setInitialValue();

    }

    ngAfterViewInit() {
        this.setInitialValue();
    }

    ngOnDestroy() {
        this._onDestroy.next();
        this._onDestroy.complete();
    }

    /**
     * Sets the initial value after the filteredBanks are loaded initially
     */
    private setInitialValue() {
        this.filteredBanks
            .pipe(take(1), takeUntil(this._onDestroy))
            .subscribe(() => {
                // setting the compareWith property to a comparison function
                // triggers initializing the selection according to the initial value of
                // the form control (i.e. _initializeSelection())
                // this needs to be done after the filteredBanks are loaded initially
                // and after the mat-option elements are available
                // this.singleSelect.compareWith = (a: Bank, b: Bank) => a.id === b.id;
                // this.multiSelect.compareWith = (a: Bank, b: Bank) => a.id === b.id;
            });
    }

    private filterBanks() {
        if (!this.banks) {
            return;
        }
        // get the search keyword
        let search = this.bankFilterCtrl.value;
        if (!search) {
            this.filteredBanks.next(this.banks.slice());
            return;
        } else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.filteredBanks.next(
            this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
        );
    }

    private filterBanksMulti() {
        if (!this.banks) {
            return;
        }
        // get the search keywordEv
        let search = this.bankMultiFilterCtrl.value;
        if (!search) {
            this.filteredBanksMulti.next(this.banks.slice());
            return;
        } else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.filteredBanksMulti.next(
            this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
        );
    }

    sendMessage($event, bankCtrl) {
        // console.log(bankMultiCtrl);
        this.CtrlEmit.emit(bankCtrl);
    }

}
