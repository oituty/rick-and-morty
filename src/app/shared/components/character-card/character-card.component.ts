import { Component, Input } from '@angular/core';
import { Character } from '../../../models/character.model';
import { FavoriteService } from '../../../services/favorite/favorite.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-card.component.html',
})
export class CharacterCardComponent {
  @Input() character: Character = {} as Character;
  @Input() isLoading: boolean = false;

  constructor(private favoriteService: FavoriteService) {}

  get isFavorite(): boolean {
    return this.favoriteService.isFavorite(this.character);
  }

  toggleFavorite() {
    this.favoriteService.toggleFavorite(this.character);
  }
}
