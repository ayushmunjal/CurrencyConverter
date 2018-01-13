import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { CurrencyConverterComponent }   from './currency-converter/currency-converter.component';

const appRoutes: Routes = [
  { path: 'CurrencyConverter', component: CurrencyConverterComponent },
  { path: '',   redirectTo: '/CurrencyConverter', pathMatch: 'full' },
  { path: '**', redirectTo: '/CurrencyConverter' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}