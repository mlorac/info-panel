import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'veiculos'
	},
	{
		path: 'veiculos',
		children: [
			{
				path: "",
				pathMatch: "full",
				loadChildren: () => import("./pages/vehicles/vehicles-list/vehicles-list.module").then((m) => m.VehiclesListModule),
			},
			{
				path: "novo",
				loadChildren: () => import("./pages/vehicles/vehicles-form/vehicles-form.module").then((m) => m.VehiclesFormModule),
			},
			{
				path: "detalhes/:id",
				loadChildren: () => import("./pages/vehicles/vehicles-form/vehicles-form.module").then((m) => m.VehiclesFormModule),
			}
		]
	},
	{
		path: '**',
		redirectTo: 'veiculos'
	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
