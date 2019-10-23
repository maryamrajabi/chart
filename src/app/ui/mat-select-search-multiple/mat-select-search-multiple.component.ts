import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, NgModel} from '@angular/forms';
import {ReplaySubject} from 'rxjs';
import {MatSelect, VERSION} from '@angular/material';
import {Subject} from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';


interface Bank {
    id: string;
    name: string;
}

@Component({
    selector: 'app-mat-select-search-multiple',
    templateUrl: './mat-select-search-multiple.component.html',
    styleUrls: ['./mat-select-search-multiple.component.css']
})
export class MatSelectSearchMultipleComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
    version = VERSION;
    @Input() placeholder;
    @Input() selectedIDs = [];
    setValue = [];
    @Output() selected: EventEmitter<any> = new EventEmitter();
    @Output() deselected: EventEmitter<any> = new EventEmitter();

    /** control for the selected bank */
    // public bankCtrl: FormControl = new FormControl();

    /** control for the MatSelect filter keyword */
    // public bankFilterCtrl: FormControl = new FormControl();

    /** control for the selected bank for multi-selection */
    public bankMultiCtrl: FormControl = new FormControl();

    /** control for the MatSelect filter keyword multi-selection */
    public bankMultiFilterCtrl: FormControl = new FormControl();

    /** list of banks */
    @Input() banks: Bank[] = [
        // {name: 'Bank A (Switzerland)', id: 'A'},
        // {name: 'Bank B (Switzerland)', id: 'B'},
        // {name: 'Bank C (France)', id: 'C'},
        // {name: 'Bank D (France)', id: 'D'},
        // {name: 'Bank E (France)', id: 'E'},
        // {name: 'Bank F (Italy)', id: 'F'},
        // {name: 'Bank G (Italy)', id: 'G'},
        // {name: 'Bank H (Italy)', id: 'H'},
        // {name: 'Bank I (Italy)', id: 'I'},
        // {name: 'Bank J (Italy)', id: 'J'},
        // {name: 'Bank Kolombia (United States of America)', id: 'K'},
        // {name: 'Bank L (Germany)', id: 'L'},
        // {name: 'Bank M (Germany)', id: 'M'},
        // {name: 'Bank N (Germany)', id: 'N'},
        // {name: 'Bank O (Germany)', id: 'O'},
        // {name: 'Bank P (Germany)', id: 'P'},
        // {name: 'Bank Q (Germany)', id: 'Q'},
        // {name: 'Bank R (Germany)', id: 'R'}
    ];

    /** list of banks filtered by search keyword */
    public filteredBanks: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);

    /** list of banks filtered by search keyword for multi-selection */
    public filteredBanksMulti: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);

    // @ViewChild('singleSelect') singleSelect: MatSelect;
    @ViewChild('multiSelect') multiSelect: MatSelect;

    /** Subject that emits when the component has been destroyed. */
    private _onDestroy = new Subject<void>();

    ngOnInit() {
        this.indexData();
    }

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
        this.setValue.push(itemd);
        this.bankMultiCtrl.setValue(this.setValue);
    }

    indexData() {
        // this.bankCtrl.setValue(this.banks[10]);
        // console.log('banks', this.banks);
        // console.log(this.banks[1]);


        // console.log('selected IDs', this.selectedIDs);


        // set initial selection
        if (this.selectedIDs) {
            for (let i = 0; i < this.selectedIDs.length; i++) {
                this.showfilterValues(this.selectedIDs[i].id);
            }
        }

        // this.bankMultiCtrl.setValue([this.banks[10], this.banks[11], this.banks[12]]);

        // load the initial bank list
        // this.filteredBanks.next(this.banks.slice());
        this.filteredBanksMulti.next(this.banks.slice());

        // listen for search field value changes
        // this.bankFilterCtrl.valueChanges
        //     .pipe(takeUntil(this._onDestroy))
        //     .subscribe(() => {
        //         this.filterBanks();
        //     });
        this.bankMultiFilterCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterBanksMulti();
            });
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
                // if (this.multiSelect.id) {
                //     this.multiSelect.compareWith = (a: Bank, b: Bank) => a.id === b.id;
                // }
            });
    }

    // private filterBanks() {
    //     if (!this.banks) {
    //         return;
    //     }
    //     // get the search keyword
    //     let search = this.bankFilterCtrl.value;
    //     if (!search) {
    //         this.filteredBanks.next(this.banks.slice());
    //         return;
    //     } else {
    //         search = search.toLowerCase();
    //     }
    //     // filter the banks
    //     this.filteredBanks.next(
    //         this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
    //     );
    // }

    private filterBanksMulti() {
        if (!this.banks) {
            return;
        }
        // get the search keyword
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

    sendMessage($event, i, selected) {
        if ($event.source.selected === true) {
            this.selected.emit(selected);
            // console.log(this.banks);
        }
        if ($event.source.selected === false) {
            this.deselected.emit(selected);
            // console.log(this.banks);
        }
    }

    ngOnChanges(): void {
        // alert();
    }

    // selectAll(checkAll, select: NgModel, values) {
    //     // this.toCheck = !this.toCheck;
    //     if (checkAll) {
    //         console.log(values);
    //         console.log(select);
    //         select.update.emit(values);
    //     } else {
    //         console.log(values);
    //         console.log(select);
    //         select.update.emit([]);
    //     }
    // }

}
