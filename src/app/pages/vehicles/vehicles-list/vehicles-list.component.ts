import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { VehicleBrand } from 'src/app/models/vehicle-brand.model';
import { VehicleModel } from 'src/app/models/vehicle-model.model';
import { Vehicle } from 'src/app/models/vehicle.model';
import { BrandsService } from 'src/app/services/brands.service';
import { ModelsService } from 'src/app/services/models.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'inf-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {

	vehicles: Vehicle[] = [];
	brands: VehicleBrand[] = [];
	models: VehicleModel[] = [];

	constructor(private _vehiclesService: VehiclesService,
				private _modelsService: ModelsService,
				private _brandsService: BrandsService,
				private messageService: MessageService,
				private confirmationService: ConfirmationService,
				private route: Router) {
		this.getBrands();
		this.getModels();
	}


	ngOnInit(): void {
		this._vehiclesService.getAll().then(
			data => this.vehicles = data
		);
	}


	private getBrands() {
		this._brandsService.getBrands().then(
			data => this.brands = data
		);
	}


	private getModels() {
		this._modelsService.getModels().then(
			data => this.models = data
		);
	}

	getDescriptionByBrand(brandId: number) {
		return this.brands.find(b => b.id == brandId)?.description;
	}

	getDescriptionByModel(modelId: number) {
		return this.models.find(b => b.id == modelId)?.description;
	}

	deleteVehicle(id: number) {
		this.confirmationService.confirm({
            message: 'Tem certeza que deseja continuar?',
            header: 'Excluir veículo',
            icon: 'pi pi-exclamation-triangle',
			acceptLabel: 'Sim, excluir',
			rejectLabel: 'Cancelar',
            accept: () => {
                this._vehiclesService.deleteVehicle(id).then(
					() => {
						this.messageService.add({ severity: 'success', summary: 'Exclusão', detail: 'Veículo excluído com sucesso' });
						this.ngOnInit();
					}
				)
            },
            reject: () => {
				this.messageService.add({ severity: 'info', summary: 'Cancelado', detail: 'Operação cancelada' });
            }
        });
	}

	editVehicle(id: number) {
		this.route.navigate([`/veiculos/detalhes/${id}`]);
	}
}
