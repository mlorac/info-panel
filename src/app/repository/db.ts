import Dexie, { Table } from "dexie";
import { VehicleBrand } from "../models/vehicle-brand.model";
import { VehicleModel } from "../models/vehicle-model.model";
import { Vehicle } from "../models/vehicle.model";


export class AppDB extends Dexie {
	brands!: Table<VehicleBrand, number>;
	models!: Table<VehicleModel, number>;
	vehicles!: Table<Vehicle, number>;

	constructor() {
	  super('ngdexieliveQuery');
	  this.version(3).stores({
		brands: '++id',
		models: '++id, brandId',
		vehicles: '++id',
	  });
	  this.on('populate', () => this.populate());
	}

	async populate() {
	  let brandId = await db.brands.add({ description: 'GM/Chev' });
	  await db.models.bulkAdd([
		{ brandId, description: 'Prisma' },
		{ brandId, description: 'Classic' },
		{ brandId, description: 'Onix' },
		{ brandId, description: 'Montana' }
	  ]);

	  brandId = await db.brands.add({ description: 'VW/Volks' });
	  await db.models.bulkAdd([
		{ brandId, description: 'Gol' },
		{ brandId, description: 'Polo' },
		{ brandId, description: 'Voyage' },
		{ brandId, description: 'T-Cross' }
	  ]);
	}
  }

  export const db = new AppDB();
