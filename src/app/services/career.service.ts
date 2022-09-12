import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  constructor(private httpClient: HttpClient) { }
  // showCareer() : Observable<boolean>{
  //   this.httpClient.post<boolean>(this.baseURL);
  // }
}
