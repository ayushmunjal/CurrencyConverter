import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {NglModule} from 'ng-lightning/ng-lightning';
import { FormsModule }      from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { CurrencyService } from './service/currency.service';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverterComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule, NglModule.forRoot({
      svgPath: '../../node_modules/@salesforce-ux/design-system/assets/icons'
    }), AppRoutingModule
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
