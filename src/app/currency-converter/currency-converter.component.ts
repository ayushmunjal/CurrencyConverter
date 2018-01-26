import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../service/currency.service';
import { Currency } from '../model/currency';
import { error } from 'util';
import { Jsonp } from '@angular/http/src/http';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  showAlert: any;
  tip: any;
  loading;
  title="Converter Widget";
  currencyCodes = ['CAD','USD','EUR'];
  currencyRates;
  amountConverted;
  amount1;
  CurFromConv;
  CurToConv;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.CurFromConv='CAD';
    this.CurToConv='USD';
    this.amountConverted=0.00;
    this.amount1=0.00;
    this.getCurrency();
  }

  getCurrency(){
    this.loading="loading..";
    this.currencyService.getCurrency(this.CurFromConv).subscribe(
      data => {
        this.loading=this.title;
        this.currencyRates=data.rates;
        this.tip=[this.currencyRates['USD'],this.currencyRates['EUR']];
      },
      error => {console.log(error); this.showAlert=true;}
    );
  }

  getRates(base){
    this.loading="loading..";
    this.currencyService.getCurrency(base).subscribe(
      data => {
        this.loading=this.title;
        this.currencyRates=data.rates;
        if (this.amount1!=0) {
          if (this.CurFromConv==this.CurToConv) {
            this.amountConverted=this.amount1;
            return;
          }
          this.amountConverted=(this.amount1*this.currencyRates[this.CurToConv]).toFixed(2);
        }
      },
      error => {console.log(error); this.showAlert=true;}
    );
  }

  onAmountChange(event){
    this.amount1=event;
    if (this.CurFromConv==this.CurToConv) {
      this.amountConverted=this.amount1;
      return;
    }
    this.amountConverted=(event*this.currencyRates[this.CurToConv]).toFixed(2);
  }

  onFromCurChange(event){
    this.CurFromConv=event;
    this.getRates(event);
  }

  onToCurChange(event){
    this.CurToConv=event;
    if (this.CurFromConv==this.CurToConv) {
      this.amountConverted=this.amount1;
      return;
    }
    this.amountConverted=(this.amount1*this.currencyRates[this.CurToConv]).toFixed(2);
  }

  onClose(reason: string) {
    console.log(`Alert closed by ${reason}`);
    this.showAlert = false;
  }

}