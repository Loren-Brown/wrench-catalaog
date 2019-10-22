import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { WrenchService } from './models/wrench-service.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WrenchCatalogService {

  constructor(private http: HttpClient) {
  }

  GetCatalog(): Observable<any> {
    const apiKey: string = environment.wrenchCatalogServiceApiKey;
    const endpoint: string = environment.wrenchCatalogServiceEndpoint;

    let customHeaders: HttpHeaders = new HttpHeaders();
    customHeaders = customHeaders.set('x-api-key', apiKey);

    const response = this.http.get<any>(endpoint, { headers : customHeaders });
    
    return response;
  }
}