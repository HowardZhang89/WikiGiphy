import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HistoryService } from '../history.service';
import { WikiService } from '../wiki-service.service';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  searchInput: String;  // input comes from FormsModule
  wikiResults: any[];
  giphyResults: any[];


  constructor(private historyService: HistoryService, 
              private wikiService: WikiService,
              private giphyService: GiphyService,)
  { 
    this.searchInput ='';
    this.wikiResults = [];
    this.giphyResults = [];
  }

  search(){
    this.historyService.addSearchToHistory(this.searchInput);
    this.wikiService.searchWiki(this.searchInput).subscribe(results => this.wikiResults = results);
    this.giphyService.searchGiphy(this.searchInput).subscribe(results => this.giphyResults = results);
  }

  ngOnInit() {
  }

}
