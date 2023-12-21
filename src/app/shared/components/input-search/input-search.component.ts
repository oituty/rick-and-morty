import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './input-search.component.html',
})
export class InputSearchComponent implements OnInit {
  private searchSubject = new Subject<string>();
  keyword = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.searchSubject
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((keyword) => this.updateSearch(keyword));
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.keyword = params['search'] || '';
    });
  }

  onKeyup() {
    this.searchSubject.next(this.keyword);
  }

  clearSearch() {
    this.keyword = '';
    this.updateSearch(this.keyword); // Atualiza imediatamente a rota sem debounce
  }

  private updateSearch(keyword: string) {
    this.router.navigate([], {
      queryParams: { search: keyword || null },
      queryParamsHandling: 'merge',
    });
  }
}
