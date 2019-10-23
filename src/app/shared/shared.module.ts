import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {MaterialModule} from './material.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
    ],
    declarations: [],
    exports: [
        // common and shared components/directives/pipes between more than one module and components will be listed here.
        CommonModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        // Forcing the whole app to use the returned providers from the AppModule only.
        return {
            ngModule: SharedModule,
            providers: [/* All of your services here. It will hold the services needed by `itself`. */]
        };
    }
}
