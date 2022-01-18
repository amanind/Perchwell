import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './core/routes/app-routes';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
		path: AppRoutes.DEFAULT,
		component: HomeComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
