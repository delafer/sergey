import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  text;

    onClick() {
      this.text = "poka";
      console.log('я ебу что писать');
      alert ("идите на хуй");
    }


  ngOnInit(): void {
  }
}
