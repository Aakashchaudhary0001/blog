import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Property Bindings ';
  name= "Neeraj"
  disable=false;
  show="yes";
  getData(val:string){
    console.warn(val);
    }
    getName(name:string,secondName:string){
      alert(name)
      alert(secondName)
    }
    displayVal='';
    getValue(val:string){
      console.warn(val);
      this.displayVal=val
    }
    count=0;
    counter(type:string){
      type==='add' ? this.count++:this.count--;
    }

}
