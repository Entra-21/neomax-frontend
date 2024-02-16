import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-options-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './options-button.component.html',
  styleUrl: './options-button.component.css'
})
export class OptionsButtonComponent {

  optionsMenuActive: boolean = false;
  private static currentlyOpenOptionsMenu: OptionsButtonComponent | null = null;


  toggleOptionsMenu(event: MouseEvent) {
    if (OptionsButtonComponent.currentlyOpenOptionsMenu && OptionsButtonComponent.currentlyOpenOptionsMenu !== this) {
      OptionsButtonComponent.currentlyOpenOptionsMenu.deactivateOptionsMenu();
    }
    this.optionsMenuActive = !this.optionsMenuActive;
    OptionsButtonComponent.currentlyOpenOptionsMenu = this;
    event.stopPropagation();
  }

  selectOption(option: string) {
    console.log('Selected oiption:', option);
    this.optionsMenuActive = false;
  }

  deactivateOptionsMenu() {
    this.optionsMenuActive = false;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if(!event.target) return;
    const target = event.target as HTMLElement;
    if (!target.closest('.options')) {
      this.deactivateOptionsMenu();
    }
  }
}
