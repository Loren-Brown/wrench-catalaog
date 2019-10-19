import { Component, OnInit } from '@angular/core';

import { WrenchCatalog } from '../../services/wrench-catalog/models/wrench-catalog.model';
import { WrenchCatalogService } from '../../services/wrench-catalog/wrench-catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private wrenchCatalogService: WrenchCatalogService) { }

  catalog: WrenchCatalog;

  catagories: string[];

  activeCategory: string;


  ngOnInit() {
    this.updateCatalog();
  }

  updateCatalog() {
    const promise = this.wrenchCatalogService.GetCatalog();

    promise.then((data)=>{
      console.log("Promise resolved with: " + JSON.stringify(data));
      const body = data.body;
      this.catalog = body;
    }).catch((error)=>{
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  }

}
