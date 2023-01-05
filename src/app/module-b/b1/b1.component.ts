import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b1',
  templateUrl: './b1.component.html',
  styleUrls: ['./b1.component.css']
})
export class B1Component implements OnInit {

  data: any={};
  titlesList: any=[];
  constructor() { }

  ngOnInit(): void {
  }
  updateData(value:any){
    console.log(value);
    this.data=value;
    this.titlesList = Object.values(value);
  }

}
