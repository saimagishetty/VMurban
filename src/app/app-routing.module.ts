import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ProductsComponent } from './Components/products/products.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ServicesComponent } from './Components/services/services.component';

const routes: Routes = [
  
  {path:'', component:HomeComponent},
  {path:'aboutus', component:AboutComponent},
  {path:'product', component:ProductsComponent},
  {path:'products', component:ProductsComponent},
  {path:'contact', component:ContactComponent},
  {path:'services', component:ServicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
