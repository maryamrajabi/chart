import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';

import {AdminMainComponent} from './admin/admin-element/admin-main/admin-main.component';
import {ChartComponent} from './admin/chart/chart.component';
import {AuthGuard} from './_guards';
import {LoginComponent} from './login';

const routes: Routes = [
    {
        path: '', component: AdminComponent, children: [
            {path: '', redirectTo: '/main', pathMatch: 'full'},
            {path: 'main', component: AdminMainComponent},
            {path: 'chart', component: ChartComponent},
        ],
    },
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
