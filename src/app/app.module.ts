import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CoursecompComponent } from './coursecomp/coursecomp.component';
import { StyleclassComponent } from './styleclass/styleclass.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CoursecompComponent, StyleclassComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
