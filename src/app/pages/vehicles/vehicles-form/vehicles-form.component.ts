import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { VehicleBrand } from 'src/app/models/vehicle-brand.model';
import { VehicleModel } from 'src/app/models/vehicle-model.model';
import { Vehicle } from 'src/app/models/vehicle.model';
import { BrandsService } from 'src/app/services/brands.service';
import { ModelsService } from 'src/app/services/models.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'inf-vehicles-form',
  templateUrl: './vehicles-form.component.html',
  styleUrls: ['./vehicles-form.component.scss']
})
export class VehiclesFormComponent implements OnInit {

	@ViewChild('f') form!: NgForm;
	brands: VehicleBrand[] = [];
	models: VehicleModel[] = [];
	formVehicle: Vehicle = new Vehicle();
	id!: any;

	constructor(private _brandsService: BrandsService,
				private _modelsService: ModelsService,
				private _vehiclesService: VehiclesService,
				private messageService: MessageService,
				private router: Router,
				private route: ActivatedRoute) {

		this.id = this.route.snapshot.paramMap.get('id');
		if (this.id) {
			this.getDetailsByVehicle();
		}
	}

	ngOnInit(): void {
		this.getBrands();
	}

	getDetailsByVehicle() {
		this._vehiclesService.getById(+this.id).then(
			data => {
				if (data) {

					this.formVehicle.id = data.id;
					this.formVehicle.brandId = data.brandId;
					this.getModels(this.formVehicle.brandId);
					this.formVehicle.chassi = data.chassi;
					this.formVehicle.renavam = data.renavam;
					this.formVehicle.plate = data.plate;
					this.formVehicle.year = data.year;
					this.formVehicle.modelId = data.modelId;
				} else {
					this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Registro não encontrado', life: 5000 })
					this.router.navigateByUrl('/veiculos');
				}
			}
		);
	}

	changeBrand() {
		this.getModels(this.form.form.controls['brand'].value);
	}

	save() {
		if (!this.validateForm()) {
			return;
		}
		if (this.id) {
			this._vehiclesService.updateVehicle(this.formVehicle).then(
				() => {
					this.messageService.add({ severity: 'success', summary: 'Veículo', detail: `Dados salvos com sucesso.`, life: 5000 })
					this.router.navigateByUrl('/');
				},
				(err) => this.messageService.add({ severity: 'error', summary: 'Erro', detail: err, life: 5000 })
			);
		} else {
			console.log('POST');
			this._vehiclesService.postVehicle(this.formVehicle).then(
				() => {
					this.messageService.add({ severity: 'success', summary: 'Veículo', detail: `Dados salvos com sucesso.`, life: 5000 })
					this.router.navigateByUrl('/');
				},
				(err) => this.messageService.add({ severity: 'error', summary: 'Erro', detail: err, life: 5000 })
			);
		}
	}


	private validateForm(): boolean {
        let isFormValid: boolean = this.form.valid ?? false;

		Object.keys(this.form.form.controls).forEach((i) => {
			this.form.controls[i].markAsTouched();
		});

        if (!isFormValid) {
            this.messageService.add({ severity: 'warn', summary: 'Formulário Inválido', detail: `Verifique os campos do formulário para prosseguir.`, life: 5000 });
        }

        return isFormValid;
    }


	private getBrands() {
		this._brandsService.getBrands().then(
			data => this.brands = data
		);
	}


	private getModels(brandId: number) {
		this._modelsService.getModelsByBrand(brandId).then(
			data => this.models = data
		);
		this.form.form.controls['model'].setValue(0);
	}
}
