import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-cnlo-lesson002',
  templateUrl: './lesson002.component.html',
  styleUrls: ['./lesson002.component.css']
})
export class Lesson002Component implements OnInit {

  constructor(private snackBar: MdSnackBar) { }

  ngOnInit() {
  }
  PlayNi3hao3() {
     var audio = < HTMLAudioElement >document.getElementById('wo3');
 //   audio.load();
 //   audio.play();
    // Give the timeout enough time to avoid the race conflict.
    let waitTime = 150;

    setTimeout(function () {
      // Resume play if the element if is paused.
      if (audio.paused) {
        audio.play();
      }
    }, waitTime);
  }
  openSnackBar() {
    this.snackBar.openFromComponent(Lesson002Component, {
      duration: 1500,
    });
  }
  
}
