import { Component } from '@angular/core';

import { Splash } from '../../components/splash/splash';
import { Letter } from '../../components/letter/letter';
import { Invitation } from '../../components/invitation/invitation';

@Component({
  selector: 'app-home',
  imports: [
    Splash,
    Letter,
    Invitation
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  showLetter = false;
  showInvitation = false;


  openLetter(): void {

    this.showLetter = true;

  }


  openInvitation(): void {

    /*
     * Remove the letter first
     */
    this.showLetter = false;

    /*
     * Show the invitation
     */
    this.showInvitation = true;

    /*
     * Always start the invitation
     * from the very top.
     */
    requestAnimationFrame(() => {

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });

    });

  }

}