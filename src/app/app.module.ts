import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchHistoryComponent } from './search-history/search-history.component';

import { HistoryService } from './history.service';
import { WikiService } from './wiki-service.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'search-history', component: SearchHistoryComponent},
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
  providers: [HistoryService, WikiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
