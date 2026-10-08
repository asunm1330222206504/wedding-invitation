import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [],
  templateUrl: './splash.html',
  styleUrl: './splash.scss',
})
export class Splash {

  @Output() opened = new EventEmitter<void>();

  isOpening = false;

  openInvitation(): void {

    if (this.isOpening) {
      return;
    }

    this.isOpening = true;

    setTimeout(() => {
      this.opened.emit();
    }, 900);
  }

}