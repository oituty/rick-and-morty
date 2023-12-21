import { Routes } from '@angular/router';
import { CharacterSearchComponent } from './modules/character-search/character-search.component';
import { FavoritesComponent } from './modules/favorites/favorites.component';

export const routes: Routes = [
  { path: '', component: CharacterSearchComponent, data: { title: 'Início' } },
  { path: 'favorites', component: FavoritesComponent, data: { title: 'Favoritos' } },
];
