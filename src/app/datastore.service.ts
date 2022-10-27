import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {

  constructor(private http: HttpClient) { }
  getPatientData() {

    return this.http.get('https://r2.smarthealthit.org/Patient');


  }
}
