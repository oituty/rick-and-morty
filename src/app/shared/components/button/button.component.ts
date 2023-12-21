import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Output() buttonClick = new EventEmitter<void>();

  onButtonClick() {
    this.buttonClick.emit();
  }
}
