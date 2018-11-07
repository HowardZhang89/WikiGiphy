import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  searchHistory: any[];

  constructor() { 
    this.searchHistory = [];
  }

  addSearchToHistory(query: String){
    this.searchHistory.push(query);
    console.log(query);  // just basic stuff for now
  }
}
