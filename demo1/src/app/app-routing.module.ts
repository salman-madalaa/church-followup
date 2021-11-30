import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllDetailsComponent } from './followup/all-details/all-details.component';
import { AllpersonsComponent } from './followUpPersons/allpersons/allpersons.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'followup',component:AllDetailsComponent},
  {path:'followupPersons',component:AllpersonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
