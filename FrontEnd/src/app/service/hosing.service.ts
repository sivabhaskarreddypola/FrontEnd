import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HosingService {

constructor(private _http:HttpClient) { }
getAllProperties(){
  return this._http.get("data/properties.json");

}

}

