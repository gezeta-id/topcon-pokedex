import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon, PokemonDetails } from 'src/app/pokemon';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() pokemonName:string = '';

  pokemon:Pokemon|null = null;

  constructor(private pokeService: PokemonService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.pokeService.getPokemon(this.pokemonName).subscribe(
        data => this.pokemon = data
    );
  }

}
