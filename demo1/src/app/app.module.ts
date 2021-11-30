import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SliderModule } from 'angular-image-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AllDetailsComponent } from './followup/all-details/all-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SuccessDialogComponent } from './shared/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './shared/error-dialog/error-dialog.component';
import { EditComponent } from './followup/edit/edit.component';
import { AllpersonsComponent } from './followUpPersons/allpersons/allpersons.component';
import { EditFollowupPersonComponent } from './followUpPersons/edit-followup-person/edit-followup-person.component';
import { NewFollowupPersonComponent } from './followUpPersons/new-followup-person/new-followup-person.component';
import { NewpersonComponent } from './followup/newperson/newperson.component';

@NgModule({
  declarations: [
    AppComponent,
    AllDetailsComponent,
    HomeComponent,
    NewpersonComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
    EditComponent,
    AllpersonsComponent,
    EditFollowupPersonComponent,
    NewFollowupPersonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatDatepickerModule,SliderModule,
    MaterialModule,FormsModule,ReactiveFormsModule,HttpClientModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule
  ],
  providers: [MatDatepickerModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent],
  entryComponents:[NewpersonComponent,
                   SuccessDialogComponent,ErrorDialogComponent,
                   EditComponent,EditFollowupPersonComponent,
                   NewFollowupPersonComponent
                  ]
})
export class AppModule { }
