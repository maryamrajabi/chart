import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MainService} from '../../admin/main.service';

@Component({
    selector: 'app-select-search-multiple',
    templateUrl: './select-search-multiple.component.html',
    styleUrls: ['./select-search-multiple.component.css']
})
export class SelectSearchMultipleComponent implements OnInit {

    response;
    @Input() labelText = 'تعیین واحد';
    @Output() selectedDatasEmit: EventEmitter<string[]> = new EventEmitter<string[]>();
    @Output() selectedDataEmit: EventEmitter<string[]> = new EventEmitter<string[]>();
    @Output() deSelectedDataEmit: EventEmitter<string[]> = new EventEmitter<string[]>();
    @Input() url = 'units';
    names = [];
    keyname;
    options: FormGroup;
    myForm: FormGroup;
    ShowFilter = false;
    limitSelection = false;
    @Input() Datas = [];
    keynames = [];
    @Input() selectedDatas;
    @Input() selectedData;
    @Input() itemsShowLimits = '5';
    dropdownSettings: any = {};
    @Input() placeholder = 'تعیین واحد';

    constructor(private mainService: MainService,
                private fb: FormBuilder) {
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
    }

    ngOnInit() {
        this.mainService.index(this.url).subscribe(
            success => {
                this.response = success;
                // success => console.log(success);
                if (this.response) {
                    for (let i = 0; i < this.response.data.length; i++) {
                        const l = this.response.data;
                        this.Datas = this.response.data;
                    }
                }
            }
        );

        // this.selectedDatas = [];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'name',
            selectAllText: 'انتخاب همه',
            unSelectAllText: 'لغو انتخاب همه',
            itemsShowLimit: this.itemsShowLimits,
            allowSearchFilter: true
        };
        this.myForm = this.fb.group({
            Data: [this.selectedDatas]
        });
    }

    /* multi select*/
    onDataSelect(item: any) {
        // console.log('onItemSelect', item);
        // console.log(this.selectedDatas);
        this.selectedDatasEmit.emit(this.selectedDatas);
        this.selectedDataEmit.emit(item);
    }

    onDataDeSelect(item: any) {
        // console.log('onDeSelect', item);
        this.selectedDatas.slice(item.id, 0);
        this.selectedDatasEmit.emit(this.selectedDatas);
        this.deSelectedDataEmit.emit(item);
        // console.log(this.selectedDatas);
    }

    onSelectAll(items: any) {
        // console.log('onSelectAll', items);
        // this.selectedDatasEmit.emit(this.selectedDatas);
        this.selectedDatasEmit.emit(items);
    }

    onDeSelectAll(items: any) {
        // console.log('onDeSelectAll', items);
        this.selectedDatasEmit.emit(null);
    }

    toogleShowFilter() {
        this.ShowFilter = !this.ShowFilter;
        this.dropdownSettings = Object.assign({}, this.dropdownSettings, {allowSearchFilter: this.ShowFilter});
    }

    handleLimitSelection() {
        if (this.limitSelection) {
            this.dropdownSettings = Object.assign({}, this.dropdownSettings, {limitSelection: 2});
        } else {
            this.dropdownSettings = Object.assign({}, this.dropdownSettings, {limitSelection: null});
        }
    }
}
