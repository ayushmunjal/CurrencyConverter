import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/timeout'
import { Currency } from '../model/currency';
import { rendererTypeName } from '@angular/compiler';

@Injectable()
export class CurrencyService {

  url = 'https://api.fixer.io/latest';

  constructor(private http:Http) { }

  getCurrency(base?):Observable<Currency>{
    if (base) 
      return this.http.get(this.url+'?base='+base)
        .timeout(3000)
        .map((response:Response) => response.json())
        .catch(this.handleError);

    return this.http.get(this.url)
      .map((response:Response) => response.json())
      .timeout(3000)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('CurrencyService:', error);
    return Observable.throw(error);
  }

}
