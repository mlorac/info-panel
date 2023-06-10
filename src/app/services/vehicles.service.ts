import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { Vehicle } from '../models/vehicle.model';
import { db } from '../repository/db';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService extends Dexie {

	constructor() {
		super('ngdexieliveQuery');
	}

	getAll() {
		return db.vehicles.toArray();
	}

	getById(vehicleId: number) {
		return db.vehicles.get(vehicleId);
	}

	postVehicle(vehicle: Vehicle): Promise<number> {
		return db.vehicles.add(vehicle);
	}

	updateVehicle(vehicle: Vehicle): Promise<number> {
		return db.vehicles.bulkPut([vehicle]);
	}

	deleteVehicle(vehicleId: number): Promise<void> {
		return db.vehicles.delete(vehicleId);
	}
}
