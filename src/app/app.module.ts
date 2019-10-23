import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter'; // importing the module
import {Ng2OrderModule} from 'ng2-order-pipe'; // importing the module
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import {TagInputModule} from 'ngx-chips';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import 'hammerjs/hammer';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {CKEditorModule} from 'ng2-ckeditor';
import {AuthenticationService} from './_services';

import {Chart} from 'chart.js';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgxQRCodeModule} from 'ngx-qrcode2';
import {DragScrollModule} from 'ngx-drag-scroll';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {SharedModule} from './shared/shared.module';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

import {HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './_guards';
import {CURRENCY_MASK_CONFIG, CurrencyMaskConfig} from 'ng2-currency-mask/src/currency-mask.config';

import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import {AdminHeaderComponent} from './admin/admin-element/admin-header/admin-header.component';
import {AdminMainComponent} from './admin/admin-element/admin-main/admin-main.component';
import {AppRoutingModule} from './app-routing.module';
import {MainService} from './admin/main.service';
import {
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTooltipModule,
    MatTreeModule
} from '@angular/material';
import {LoadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {AdminMainHeaderComponent} from './admin/admin-element/admin-main-header/admin-main-header.component';
import {MainJsonService} from './admin/main-json.service';
import {LoginComponent} from './login';
import {MatSelectSearchComponent} from './ui/mat-select-search/mat-select-search.component';
import {
    SelectSearchComponent,
    SelectMultipleComponent,
    SelectMultipleGroupComponent,
    RadioButtonComponent,
    SelectSearchMultipleComponent,
    ErrorMessageComponent,
    MatMultipleSelectionComponent,
    MatSelectComponent,
    MatSelectSearchMultipleComponent
} from './ui';
import {AdminMainButtonComponent} from './admin/admin-element/admin-main-button/admin-main-button.component';
import { ChartComponent } from './admin/chart/chart.component';
import { BoxComponent } from './admin/box/box.component';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
    align: 'right',
    allowNegative: false,
    decimal: '',
    precision: 0,
    prefix: '',
    suffix: '',
    thousands: ','
};

@NgModule({
    declarations: [
        AppComponent,
        AdminComponent,
        AdminHeaderComponent,
        AdminMainComponent,
        LoadingSpinnerComponent,
        AdminMainHeaderComponent,
        SelectSearchComponent,
        SelectMultipleComponent,
        SelectMultipleGroupComponent,
        RadioButtonComponent,
        SelectSearchMultipleComponent,
        ErrorMessageComponent,
        LoginComponent,
        MatSelectSearchMultipleComponent,
        MatSelectComponent,
        MatSelectSearchComponent,
        AdminMainButtonComponent,
        MatMultipleSelectionComponent,
        ChartComponent,
        BoxComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AngularFontAwesomeModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        Ng2SearchPipeModule, // including into imports
        Ng2OrderModule, // importing the sorting package here
        NgxPaginationModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        TagInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatMenuModule,
        MatCardModule,
        MatSidenavModule,
        MatTabsModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatTabsModule,
        MatTooltipModule,
        MatTreeModule,
        NgMultiSelectDropDownModule.forRoot(),
        NgxQRCodeModule,
        DragScrollModule,
        CurrencyMaskModule,
        SharedModule.forRoot(),
        NgxMaterialTimepickerModule.forRoot(),
        ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
        NgxMatSelectSearchModule,
        CKEditorModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatCardModule,
        MatSidenavModule,
        MatTabsModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatTooltipModule,
        MatTreeModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        AuthGuard,
        MainService,
        MainJsonService,
        AuthenticationService,
        {provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
