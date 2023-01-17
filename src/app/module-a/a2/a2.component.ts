import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.css']
})
export class A2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  titlesList: any=[ ];
  updateData(item:any){
    console.warn(item);
    this.
    titlesList = Object.values(item);
    
  }
  
  

  

}
