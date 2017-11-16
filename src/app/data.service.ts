import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

     items : Array<any>;

     constructor(private http: Http) {
      this.items = new Array<any>();
     }

    getNumbers(qtdItems? : number) : Array<any>{
        for(let index = 0; index <=  (qtdItems || 250) ; index++){
            this.items.push("Item " + index);
          }
        return this.items;
    }

    getItems() : Observable<any>{
      return this.http.get('http://127.0.0.1:4200/db.json')
        .map((response: Response) => {
            return response.json() as any;
        });


    }
}