import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterSheetComponent} from './characters/character-sheet/character-sheet.component';

const appRoutes: Routes = [

    { path: 'characterSheet',
        component: CharacterSheetComponent
    }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(appRoutes) ],
  declarations: []
})
export class AppRoutingModule { }
