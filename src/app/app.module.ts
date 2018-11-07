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

//https://stackoverflow.com/questions/37605119/angular2-router-angular-router-how-to-set-default-route
const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'search-history', component: SearchHistoryComponent},
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    SearchHistoryComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [HistoryService, WikiService, GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
