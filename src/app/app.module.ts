import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxesListComponent } from './boxes-list/boxes-list.component';
import { BoxesListItemComponent } from './boxes-list-item/boxes-list-item.component';
import { HeaderComponent } from './header/header.component';
import { BoxDetailedComponent } from './box-detailed/box-detailed.component';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    BoxesListComponent,
    BoxesListItemComponent,
    HeaderComponent,
    BoxDetailedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GraphQLModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
