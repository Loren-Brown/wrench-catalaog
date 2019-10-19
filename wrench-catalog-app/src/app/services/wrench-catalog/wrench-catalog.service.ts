import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { WrenchCatalog } from './models/wrench-catalog.model';

@Injectable({
  providedIn: 'root'
})
export class WrenchCatalogService {

  constructor(private http: HttpClient) {
  }

  GetCatalog() {
    const apiKey: string = environment.wrenchCatalogServiceApiKey;
    const endpoint: string = environment.wrenchCatalogServiceEndpoint;

    let customHeaders: HttpHeaders = new HttpHeaders();
    customHeaders = customHeaders.set('x-api-key', apiKey);

    const promise = this.http.get<WrenchCatalog>(endpoint, { observe: 'response', headers : customHeaders }).toPromise();
    
    return promise;
  }
}