import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, Validators ,FormGroup} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sections/header/header.component';
import { PersonalComponent } from './sections/personal/personal.component';
import { FamilyComponent } from './sections/family/family.component';
import { BackgroundComponent } from './sections/background/background.component';
import { ProgramComponent } from './sections/program/program.component';
import { ImmigrationComponent } from './sections/immigration/immigration.component';
import { PaymentComponent } from './sections/payment/payment.component';
import { NoteComponent } from './sections/note/note.component';
import { ShadowComponent } from './shadow-effects/shadow.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { SelectComponent } from './select/select.component';
// import { FeatherIconComponent } from './feather-icons/feather-icons.component';


@NgModule({
  declarations: [
    AppComponent,
  HeaderComponent,
  PersonalComponent,
  FamilyComponent,
  BackgroundComponent,
  ProgramComponent,
  ImmigrationComponent,
  PaymentComponent,
  NoteComponent,
  ShadowComponent,
  SvgIconComponent,
  InputFieldComponent,
  SelectComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
