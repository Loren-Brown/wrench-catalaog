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

  public GetCatalog(): Observable<any> {
    const apiKey: string = environment.wrenchCatalogServiceApiKey;
    const endpoint: string = environment.wrenchCatalogServiceEndpoint;

    let customHeaders: HttpHeaders = new HttpHeaders();
    customHeaders = customHeaders.set('x-api-key', apiKey);

    const response = this.http.get<any>(endpoint, { headers : customHeaders });
    
    return response;
  }

  public comparePrice(v1, v2) {
    let n1 = parseFloat(v1);
    let n2 = parseFloat(v2);

    if (isNaN(n1)) {
      n1 = 0;
    }

    if (isNaN(n2)) {
      n2 = 0;
    }

    return (n1 < n2 ? -1 : n1 > n2 ? 1 : 0);
  }

  public correctMissingData(services: WrenchService[]): WrenchService[] {
    // Remove entires
    services.filter(entry => (entry.category && entry.description && entry.name));

    // Correct entires
    services.forEach(function(service) {
      if (!service.price) {
        service.price = 'Call for quote';
        return service;
      }
    });

    return services;
  }
}