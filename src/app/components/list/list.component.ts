import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon, PokemonDetails } from 'src/app/pokemon';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  pokemons: Pokemon[] = [];

  @Output() selection = new EventEmitter<string>();

  constructor(private pokeService: PokemonService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.pokeService.getPokemons().subscribe(
        data => this.pokemons = data
    );
  }

  detail(selected:Pokemon) {
    this.selection.emit(selected.name);
  }

}
