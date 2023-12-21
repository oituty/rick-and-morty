import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterListHeaderComponent } from '../character-list-header/character-list-header.component';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { ButtonComponent } from '../button/button.component';

import {
  Character,
  SearchCharactersResponse,
} from '../../../models/character.model';
import { CharacterSearchService } from '../../../services/character-search/character-search.service';
import { HttpClientModule } from '@angular/common/http';
import { FavoriteService } from '../../../services/favorite/favorite.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-list',
  standalone: true,
  templateUrl: './character-list.component.html',
  imports: [
    CommonModule,
    FormsModule,
    CharacterListHeaderComponent,
    HttpClientModule,
    CharacterCardComponent,
    ButtonComponent,
  ],
})
export class CharacterListComponent implements OnInit {
  @Input() useFavorites: boolean = false;
  @Input() enableSearch: boolean = true;
  @Input() enablePagination: boolean = true;

  characters: Character[] = [];
  keyword: string = '';
  nextUrl: string | null = null;
  prevUrl: string | null = null;
  isLoading: boolean = false;
  skeletonItems = new Array(9).fill({});

  constructor(
    private characterSearchService: CharacterSearchService,
    private favoriteService: FavoriteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (this.useFavorites) {
      this.loadFavorites();
      return
    }

    this.route.queryParams.subscribe(params => {
      this.keyword = params['search'] || '';
      this.loadCharactersByUrl(this.characterSearchService.apiUrl);
    });
  }


  loadCharactersByUrl(url: string) {
    this.isLoading = true;

    let newUrl = url;
    if (this.keyword) {
      const separator = url.includes('?') ? '&' : '?';
      newUrl += `${separator}name=${encodeURIComponent(this.keyword)}`;
    }

    this.characterSearchService.getCharactersByUrl(newUrl).subscribe(
      (data: SearchCharactersResponse) => {
        if (data && data.results) {
          this.characters = data.results;
          this.nextUrl = data.info && data.info.next ? data.info.next : null;
          this.prevUrl = data.info && data.info.prev ? data.info.prev : null;
        }
        this.isLoading = false;
      },
      (error) => {
        console.error('Erro ao carregar personagens:', error);
        this.characters = [];
        this.nextUrl = null;
        this.prevUrl = null;
        this.isLoading = false;
      }
    );
  }


  loadNextPage() {
    if (this.nextUrl) {
      this.loadCharactersByUrl(this.nextUrl);
    }
  }

  loadPrevPage() {
    if (this.prevUrl) {
      this.loadCharactersByUrl(this.prevUrl);
    }
  }

  loadFavorites() {
    this.isLoading = true;
    this.favoriteService.favorites$.subscribe((favorites: Character[]) => {
      this.characters = favorites;
      this.isLoading = false;
    });
  }
}
