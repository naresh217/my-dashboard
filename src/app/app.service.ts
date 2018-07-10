/**
 * Created by Naresh Chakilam on 7/10/18.
 */


'use strict';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class AppService {
  private customerUrl = 'assets/mydata.json';
   constructor(private http: HttpClient) {
   }
   getCustomerData(): Observable<any> {
     return this.http.get<any>(this.customerUrl)
       .pipe(
         catchError(this.handleError('Error', []))
       );
   }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
