import { Component } from '@angular/core';

type ViewMode = 'list' | 'detail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mode: ViewMode = 'list';
  selectedPokemon: string = '';

  setMode(mode:ViewMode) {
    this.mode = mode;
    if(mode === 'list') this.selectedPokemon = '';
  }

  viewPokemon(name: string) {
    this.setMode('detail');
    this.selectedPokemon = name;
  }
}
