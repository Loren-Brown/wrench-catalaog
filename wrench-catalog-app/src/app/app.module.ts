import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 

import { WrenchCatalogService } from './services/wrench-catalog/wrench-catalog.service';

import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    WrenchCatalogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
