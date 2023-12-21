import { Component } from '@angular/core';
import { CharacterListComponent } from '../../shared/components/character-list/character-list.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  standalone: true,
  imports: [CharacterListComponent, ButtonComponent, RouterModule, CommonModule]

})
export class FavoritesComponent {}
