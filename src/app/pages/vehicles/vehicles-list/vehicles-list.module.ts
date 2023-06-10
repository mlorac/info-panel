import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { VehiclesListComponent } from './vehicles-list.component';
import { VehiclesListRoutingModule } from './vehicles-list.routing.module';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    VehiclesListComponent
  ],
  imports: [
	VehiclesListRoutingModule,
	ButtonModule,
    CommonModule,
	TableModule
  ]
})
export class VehiclesListModule { }
