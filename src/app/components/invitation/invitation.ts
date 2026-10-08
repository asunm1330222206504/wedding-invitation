import { Component } from '@angular/core';

import { Countdown } from '../countdown/countdown';
import { EventDetails } from '../event-details/event-details';
import { Venue } from '../venue/venue';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-invitation',
  standalone: true,
  imports: [
    Countdown,
    EventDetails,
    Venue,
    Footer
  ],
  templateUrl: './invitation.html',
  styleUrl: './invitation.scss',
})
export class Invitation {

}