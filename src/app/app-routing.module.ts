import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EqiupmentAddFormComponent } from './eqiupment-add-form/eqiupment-add-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'equipment-add', component: EqiupmentAddFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
