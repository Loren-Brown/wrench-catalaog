import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'ngx-webstorage-service';

import { WrenchCatalogService } from './services/wrench-catalog/wrench-catalog.service';
import { ShoppingCartService } from './services/shopping-cart/shopping-cart.service';

import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NgbdSortableHeaderDirective } from './directives/ngbd-sortable-header/ngbd-sortable-header.directive';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    FooterComponent,
    HeaderComponent,
    ShoppingCartComponent,
    NgbdSortableHeaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    StorageServiceModule
  ],
  providers: [
    WrenchCatalogService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
