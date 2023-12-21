import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FavoriteService } from '../../../services/favorite/favorite.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  favoritesCount: number = 0;

  constructor(public router: Router, private favoriteService: FavoriteService) {}

  ngOnInit() {
    this.favoriteService.favorites$.subscribe((favorites) => {
      this.favoritesCount = favorites.length;
    });
  }

  getIconSrc(route: any): string {
    const isActiveRoute = this.router.isActive(route.path, true);
    return `${route.iconSrc}${isActiveRoute ? '-dark' : ''}.png`;
  }

  routes = [
    { path: '/', label: 'Início', iconSrc: '/assets/home-icon' },
    {
      path: '/favorites',
      label: 'Favoritos',
      iconSrc: '/assets/favorite-icon',
    },
  ];
}
