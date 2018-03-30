import { ToastModule } from './typescripts/pro/alerts/toast/toast.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from './typescripts/free';
import { MDBBootstrapModulePro } from './typescripts/pro/index';
import { AgmCoreModule } from '@agm/core';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { MDBSpinningPreloader } from './typescripts/pro/index';
import { NavbarComponent } from './navbar/navbar.component';
import { CharacterSheetComponent } from './characters/character-sheet/character-sheet.component';
import { PageNotFoundComponent } from './technical_pages/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    { path: 'characterSheet',
        component: CharacterSheetComponent
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CharacterSheetComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ToastModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulePro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    })
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
