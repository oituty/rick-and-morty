import { Component, Input, OnInit } from '@angular/core';
import { InputSearchComponent } from '../input-search/input-search.component';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-list-header',
  standalone: true,
  imports: [InputSearchComponent, CommonModule],
  templateUrl: './character-list-header.component.html',
})

export class CharacterListHeaderComponent implements OnInit {
  @Input() enableSearch: boolean = true;

  pageTitle: string = 'Início'; // Define um valor padrão

  constructor(private titleService: Title, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.pageTitle = data['title'];
      this.titleService.setTitle(this.pageTitle);
    });
  }
}