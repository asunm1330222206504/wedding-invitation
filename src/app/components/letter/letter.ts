import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-letter',
  standalone: true,
  imports: [],
  templateUrl: './letter.html',
  styleUrl: './letter.scss',
})
export class Letter {

  @Output() continued = new EventEmitter<void>();

  isOpening = false;

  continueInvitation(): void {

    if (this.isOpening) {
      return;
    }

    this.isOpening = true;

    setTimeout(() => {
      this.continued.emit();
    }, 750);
  }

}