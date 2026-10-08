import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './countdown.html',
  styleUrl: './countdown.scss',
})
export class Countdown implements OnInit, OnDestroy {

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  private timer?: ReturnType<typeof setInterval>;


  ngOnInit(): void {

    this.updateCountdown();

    this.timer = setInterval(() => {
      this.updateCountdown();
    }, 1000);

  }


  private updateCountdown(): void {

    /*
     * Wedding:
     * 25 October 2026
     * 6:00 AM
     *
     * Month is 9 because JavaScript
     * months start from 0.
     */
    const weddingDate = new Date(
      2026,
      9,
      25,
      6,
      0,
      0
    ).getTime();


    const now = new Date().getTime();

    const difference = weddingDate - now;


    /*
     * Wedding time has arrived
     */
    if (difference <= 0) {

      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;

      return;
    }


    /*
     * Days
     */
    this.days = Math.floor(
      difference /
      (1000 * 60 * 60 * 24)
    );


    /*
     * Hours
     */
    this.hours = Math.floor(
      (difference /
        (1000 * 60 * 60)) % 24
    );


    /*
     * Minutes
     */
    this.minutes = Math.floor(
      (difference /
        (1000 * 60)) % 60
    );


    /*
     * Seconds
     */
    this.seconds = Math.floor(
      (difference / 1000) % 60
    );

  }


  ngOnDestroy(): void {

    if (this.timer) {
      clearInterval(this.timer);
    }

  }

}