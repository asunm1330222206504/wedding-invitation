import { Component, signal, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('HK-invite');

@ViewChild('weddingAudio')
weddingAudio!: ElementRef<HTMLAudioElement>;

isMusicPlaying = false;

async toggleMusic(): Promise<void> {
  const audio = this.weddingAudio.nativeElement;

  if (this.isMusicPlaying) {
    audio.pause();
    this.isMusicPlaying = false;
    return;
  }

  try {
    await audio.play();
    this.isMusicPlaying = true;
  } catch (error) {
    this.isMusicPlaying = false;
    console.error('Unable to play wedding music:', error);
  }
}
}
