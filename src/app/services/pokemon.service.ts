import { HttpClient }              from '@angular/common/http';
import { Injectable }              from '@angular/core';
import { Observable }              from 'rxjs';
import { map }                     from 'rxjs/operators';
import { environment }             from 'src/environments/environment';
import { Pokemon, PokemonDetails } from 'src/app/pokemon';

interface ListResponse {
    results: Pokemon[];
}
interface DetailResponse {
    name: string;
    id: string;
    sprites: { front_default:string /*, other: { 'official-artwork': {front_default: string } }*/ };
    weight: number;
    height: number;
    types: Array<{ 'type': {name:string} }>;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = environment.apiUrl + 'pokemon/';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<ListResponse>(this.url + '?limit=15')
            .pipe(
                map((data) => data.results)
            );
  }

  getPokemon(name:string): Observable<Pokemon> {
    return this.http.get<DetailResponse>(this.url + name)
            .pipe(
                map((pokedata) => ({
                    name: pokedata.name,
                    url: this.url + pokedata.id,
                    details: {
                        imageUrl: pokedata.sprites.front_default,
                        // imageUrl: pokedata.sprites.other['official-artwork'].front_default,
                        weight: pokedata.weight,
                        height: pokedata.height,
                        types: pokedata.types.map((type)=> type.type.name)
                    }
                }))
            );
  }

}
