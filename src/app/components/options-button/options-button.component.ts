import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-options-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './options-button.component.html',
  styleUrl: './options-button.component.css'
})
export class OptionsButtonComponent {

  optionsMenuActive: boolean = false;


  toggleOptionsMenu(event: MouseEvent) {
    this.optionsMenuActive = !this.optionsMenuActive;
    event.stopPropagation();
  }

  selectOption(option: string) {
    console.log('Selected oiption:', option);
    this.optionsMenuActive = false;
  }

  deactivateOptionsMenu() {
    this.optionsMenuActive = false;
  }
}
