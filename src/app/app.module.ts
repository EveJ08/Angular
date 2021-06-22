import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
