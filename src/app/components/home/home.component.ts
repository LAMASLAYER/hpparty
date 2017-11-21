import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public audio = new Audio();

  constructor() { }

  ngOnInit() {
    this.playAudio();
  }

 public playAudio() {
    this.audio.src = '../../assets/audio/mainTheme.mp3';
    this.audio.load();
    this.audio.play();
  }

  public mute() {
    this.audio.muted = !this.audio.muted;
  }
}
