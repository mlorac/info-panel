import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { VehiclesFormComponent } from './vehicles-form.component';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: VehiclesFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VehiclesFormRoutingModule { }
