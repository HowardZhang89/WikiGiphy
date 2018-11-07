import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchHistoryComponent } from './search-history/search-history.component';

import { HistoryService } from './history.service';
import { WikiService } from './wiki-service.service';
import { GiphyService } from './giphy.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchHistoryComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HistoryService, WikiService, GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
