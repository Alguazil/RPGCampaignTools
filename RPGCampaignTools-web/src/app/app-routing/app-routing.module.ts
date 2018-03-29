import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterSheetComponent} from "../character-sheet/character-sheet.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {HomeComponent} from "../home/home.component";

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

/*
{ path: 'CharacterSheet',
    component: CharacterSheetComponent,
    data: { title: 'Heroes List' }
  }

  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
* */

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(appRoutes) ],
  declarations: []
})

/*
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
 */
export class AppRoutingModule { }
