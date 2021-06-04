import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient) { }

    private getAllHeroesURL = 'http://localhost:8000/api/heroes';
    private createNewHeroURL = 'http://localhost:8000/api/heroes/create/';
    private deleteHeroURL = 'http://localhost:8000/api/heroes/delete/';

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    getHeroes(): Observable<Hero[]> {
      return this.http.get<Hero[]>(this.getAllHeroesURL);
    }

    addHero(hero: Hero): Observable<Hero> {
      return this.http.post<Hero>(this.createNewHeroURL + hero.name, this.httpOptions);
    }

    deleteHero(hero: Hero): Observable<Hero> {
      return this.http.delete<Hero>(this.deleteHeroURL + hero.id, this.httpOptions);
    }
}
