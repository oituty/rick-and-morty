import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Character } from '../../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favorites: Character[] = [];
  private favoritesSubject = new BehaviorSubject<Character[]>([]);

  favorites$: Observable<Character[]> = this.favoritesSubject.asObservable();

  toggleFavorite(character: Character) {
    if (this.favorites.find(c => c.id === character.id)) {
      this.removeFromFavorites(character);
      return;
    }
    this.addToFavorites(character)
  }

  addToFavorites(character: Character) {
    this.favorites.push(character);
    this.favoritesSubject.next([...this.favorites]);
  }

  removeFromFavorites(character: Character) {
    this.favorites = this.favorites.filter((c) => c.id !== character.id);
    this.favoritesSubject.next([...this.favorites]);
  }

  getFavorites(): Character[] {
    return [...this.favorites];
  }

  isFavorite(item: Character): boolean {
    return this.favorites.some((favorite) => favorite.id === item.id);
  }
}
