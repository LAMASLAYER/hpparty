import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.playAudio();
  }

 public playAudio() {
    let audio = new Audio();
    audio.src = '../../assets/audio/mainTheme.mp3';
    audio.load();
    audio.play();
  }
}
