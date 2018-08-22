import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private heroesUrl = 'api/heroes';  // URL to web api
  configUrl: string
  constructor(private http: HttpClient) {
    this.configUrl = 'assets/config.json';

  }
  getConfig() {
    return this.http.get(this.configUrl);
  }
//   getHeroes(): Observable<Hero[]> {
//     return of(HEROES);
//   }
//   /** GET heroes from the server */
//   getHeroes(): Observable<Hero[]> {
//     return this.http.get<Hero[]>(this.heroesUrl)
//   }
}
