import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { Ng6O2ChartModule } from 'ng6-o2-chart';

@NgModule({
  declarations: [
    AppComponent,
    MydashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    Ng6O2ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
