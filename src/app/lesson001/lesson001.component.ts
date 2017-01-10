import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';
@Component({
  selector: 'app-cnlo-lesson001',
  templateUrl: './lesson001.component.html',
  styleUrls: ['./lesson001.component.css']
})
export class Lesson001Component implements OnInit {

  constructor() { }

  ngOnInit() {
     // a
  }
  PlayB(): void {
    console.log('play B');
    const audio = new Audio('wo3.mp3');
    audio.play();
  }
}
