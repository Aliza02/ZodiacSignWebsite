import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import { AriesComponent } from './aries/aries.component';
import { TaurusComponent } from './taurus/taurus.component';
import { GeminiComponent } from './gemini/gemini.component';
import { CancerComponent } from './cancer/cancer.component';






@NgModule({
  declarations: [
    AppComponent,
    DialogExampleComponent,
    HeaderComponent,
    HomeComponent,
    AriesComponent,
    TaurusComponent,
    GeminiComponent,
    CancerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule
    ,MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }