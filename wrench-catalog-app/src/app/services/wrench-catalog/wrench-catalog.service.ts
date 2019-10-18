import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { WrenchCatalog } from './models/wrench-catalog.model';

@Injectable({
  providedIn: 'root'
})
export class WrenchCatalogService {

  constructor(private http: HttpClient) {
  }

  GetCatalog(): Observable<HttpResponse<WrenchCatalog[]>> {
    const apiKey: string = environment.wrenchCatalogServiceApiKey;
    const endpoint: string = environment.wrenchCatalogServiceEndpoint;

    const customHeaders: HttpHeaders = new HttpHeaders();
    customHeaders.set('x-api-key', apiKey);

    return this.http.get<WrenchCatalog[]>(endpoint, { observe: 'response', headers : customHeaders });
  }
}