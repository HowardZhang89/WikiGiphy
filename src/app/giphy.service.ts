import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  giphyAPIKey: String; 

  constructor(private http : HttpClient) { 
    this.giphyAPIKey = 'H0dmfJnFx8YjcbUokdiPLkBuuTzaU46s';
  }

  searchGiphy(userInput: String){
    const fullGiphyURL = `https://api.giphy.com/v1/gifs/search?api_key=${this.giphyAPIKey}&q=${userInput}&limit=5&offset=0&rating=G&lang=en;`;
    
    // return an Observable of Giphy URLs. 
    // Structure of Giphy object is data --> images --> original --> url
    return this.http.get(fullGiphyURL).pipe(map( response => response['data']
                                      .map( result => result['images']['original']['url'])));
                  
  };
}
