import { Injectable } from '@angular/core';
import { VehicleModel } from '../models/vehicle-model.model';
import { db } from '../repository/db';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  	constructor() {	}

	async getModels(): Promise<VehicleModel[]> {
		return db.models.toArray();
	}

	async getModelsByBrand(id: number): Promise<VehicleModel[]> {
		return db.models.where('brandId').equals(id).toArray();
	}
}
