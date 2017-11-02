import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MdRadioModule, MdAutocompleteModule } from '@angular/material';

const routes: Routes = [
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [
    RouterModule,
    MdRadioModule,
    MdAutocompleteModule
  ],
  entryComponents: [
    
  ]
})
export class AppRoutingModule { }
export const routedComponents: any[] = [
  
];
