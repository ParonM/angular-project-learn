import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glavnaya',
  templateUrl: './glavnaya.component.html',
  styleUrls: ['./glavnaya.component.scss']
})
export class GlavnayaComponent implements OnInit {

  title!: string;
  isMeruj: boolean = true;
  buttonName!: string;


  constructor() { }

  ngOnInit(): void {
    this.title = 'Hello i am Meruzhan!';
    this.buttonName = "Surprise";
  }



  manChange() {
    if (this.isMeruj) {
      this.buttonName = 'Go Back';
      this.title = 'OMG its Mark';
      this.isMeruj = !this.isMeruj;
    }
    else {
      this.buttonName = "Surprise";
      this.title = 'Hello i am Meruzhan!';
      this.isMeruj = !this.isMeruj;
    }
  }
}
