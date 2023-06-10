import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesFormRoutingModule } from './vehicles-list.routing.module';
import { ButtonBackModule } from 'src/app/components/button-back/button-back.module';
import { ButtonModule } from 'primeng/button';
import { VehiclesFormComponent } from './vehicles-form.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';


@NgModule({
  declarations: [
	VehiclesFormComponent
  ],
  imports: [
	ButtonModule,
	ButtonBackModule,
    CommonModule,
	DropdownModule,
	InputMaskModule,
	FormsModule,
	ReactiveFormsModule,
	VehiclesFormRoutingModule
  ]
})
export class VehiclesFormModule { }
