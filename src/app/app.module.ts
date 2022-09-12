import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';

import { MaterialModule } from './shared/material.module';
import { MainComponent } from './main/main.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { EditComponent } from './main/edit/edit.component';
import { InfoComponent } from './main/info/info.component';
import { AddComponent } from './main/add/add.component';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ToolbarComponent,
    EditComponent,
    InfoComponent,
    AddComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
