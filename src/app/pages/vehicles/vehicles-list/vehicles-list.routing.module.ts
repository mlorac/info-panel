import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { VehiclesListComponent } from './vehicles-list.component';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: VehiclesListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VehiclesListRoutingModule { }
