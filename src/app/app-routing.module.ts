import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxDetailedComponent } from './box-detailed/box-detailed.component';
import { BoxesListComponent } from './boxes-list/boxes-list.component';

const routes: Routes = [
  { path: 'boxes', component: BoxesListComponent},
  { path: 'box/:id', component: BoxDetailedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
