import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {ReplaySubject, Subject} from 'rxjs';
import {FormControl} from '@angular/forms';
import {MatSelect, VERSION} from '@angular/material';
import {take, takeUntil} from 'rxjs/operators';

interface Bank {
    id: string;
    name: string;
}

@Component({
    selector: 'app-mat-multiple-selection',
    templateUrl: './mat-multiple-selection.component.html',
    styleUrls: ['./mat-multiple-selection.component.css']
})
export class MatMultipleSelectionComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {

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
        // {name: 'Bank A (Switzerland)', id: 'A'}
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
        function isShowProduct(item) {
            return item.id === +(event);
        }

        const ok = this.banks.find(isShowProduct);
        const indexx = this.banks.indexOf(ok);
        const itemd = this.banks[indexx];
        this.setValue.push(itemd);
        this.bankMultiCtrl.setValue(this.setValue);
    }

    indexData() {
        // set initial selection
        if (this.selectedIDs) {
            for (let i = 0; i < this.selectedIDs.length; i++) {
                this.showfilterValues(this.selectedIDs[i].id);
            }
        }

        // load the initial bank list
        this.filteredBanksMulti.next(this.banks.slice());

        // listen for search field value changes
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
    protected setInitialValue() {
        this.filteredBanksMulti
            .pipe(take(1), takeUntil(this._onDestroy))
            .subscribe(() => {
                // setting the compareWith property to a comparison function
                // triggers initializing the selection according to the initial value of
                // the form control (i.e. _initializeSelection())
                // this needs to be done after the filteredBanks are loaded initially
                // and after the mat-option elements are available
                // this.singleSelect.compareWith = (a: Bank, b: Bank) => a.id === b.id;
                this.multiSelect.compareWith = (a: Bank, b: Bank) => a && b && a.id === b.id;
            });
    }

    protected filterBanksMulti() {
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

    destroy(e) {
        // console.log(e);
        if (!e.source.selected) {
            this.deselected.emit(e.source.value);
        }
    }

    sendMessage($event) {
        // console.log($event);
        if ($event.source.selected[0].selected) {
            this.selected.emit($event.value);
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
