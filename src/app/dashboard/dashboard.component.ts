import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  searchInput: String;
  wikiResults: any[];
  giphyResults: any[];


  constructor(private historyService: HistoryService) { 
    this.searchInput ='bob';
    this.wikiResults = [];
    this.giphyResults = [];
  }

  search(){
    this.historyService.addSearchToHistory(this.searchInput);
  }

  ngOnInit() {
  }

}
