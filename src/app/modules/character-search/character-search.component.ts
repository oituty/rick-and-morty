import { Component } from '@angular/core';
import { CharacterListComponent } from '../../shared/components/character-list/character-list.component';

@Component({
  selector: 'app-character-search',
  standalone: true,
  templateUrl: './character-search.component.html',
  imports: [CharacterListComponent]
})
export class CharacterSearchComponent {}
