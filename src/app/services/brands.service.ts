import { Injectable } from '@angular/core';
import { liveQuery } from 'dexie';
import { db } from '../repository/db';
import { VehicleBrand } from '../models/vehicle-brand.model';


@Injectable({
  providedIn: 'root'
})
export class BrandsService {

	constructor() { }

	async getBrands(): Promise<VehicleBrand[]> {
		return db.brands.toArray();
	}

}
