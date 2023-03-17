import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './property/Add-property/Add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';

const routes: Routes = [
  {path:'',component:PropertyListComponent},
{path:'add-property',component:AddPropertyComponent},
{path:'rent-property',component:PropertyListComponent},
{path:'buy-property',component:AddPropertyComponent},
{path:'property-detail/:id',component:PropertyDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
