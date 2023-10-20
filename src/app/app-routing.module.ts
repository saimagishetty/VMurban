import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ServicesComponent } from './Components/services/services.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { InterionServicesComponent } from './Components/interion-services/interion-services.component';
import { InterionSolutionsComponent } from './Components/interion-solutions/interion-solutions.component';

const routes: Routes = [
  
  {path:'', component:HomeComponent},
  {path:'aboutus', component:AboutUsComponent},
  {path:'product', component:ProductsComponent},
  {path:'products', component:ProductsComponent},
  {path:'contact', component:ContactComponent},
  {path:'services', component:ServicesComponent},
  {path:'InterionServices', component:InterionServicesComponent},
  {path:'InterionSolutions', component:InterionSolutionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
