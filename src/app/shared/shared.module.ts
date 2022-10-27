import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MasterPageComponent } from './pages/master-page/master-page.component';
import { FormComponent } from './components/form/form/form.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundPageComponent,
    MasterPageComponent,
    FormComponent,
    InputComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],exports: [NavbarComponent, FormComponent, InputComponent]
})
export class SharedModule { }
