import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchHistoryComponent } from './search-history/search-history.component';

import {HistoryService } from './history.service';

const appRoutes: Routes = [
  { path: 'search-history', component: SearchHistoryComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SearchHistoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
