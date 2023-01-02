import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Tutorial ';
  name= "Neeraj"
  disable=false;
  show="yes";
  color="blue"
  switchcolor='red'
  
  loopuser=['Anil','Bhaskar','Peter','Burce'];
  loopuserdetails=[
    {name: 'Anil',email: 'anil@abc.com', phone: '0998775544'},
    {name: 'Bhaskar',email: 'bhaskar@abc.com', phone: '2737735544'},
    {name: 'Burce',email: 'burce@abc.com', phone: '8553587664'},
    {name: 'Peter',email: 'peter@abc.com', phone: '34218775544'},
  ];
  nestedloopuser=[
    {name:'Anil',phone:'1111',socialAccounts:['facebook','Insta','Gmail','Twitter']},
    {name:'Sam',phone:'3333',socialAccounts:['facebook','Insta','Gmail','Twitter']},
    {name:'Peter',phone:'4444',socialAccounts:['facebook','Insta','Gmail','Twitter']},
    {name:'Burce',phone:'5555',socialAccounts:['facebook','Insta','Gmail','Twitter']},
  ]
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
    color20="red";
    bgColor="green";

    updateColor(){
      this.color20="blue"
      this.bgColor="red"
    }
    displayb=false
    toggle(){
        this.displayb=!this.displayb
    }
    list:any[]=[];
    addTask(item:string){
      
      this.list.push({id:this.list.length,name:item});
      console.warn(this.list);
    }
    removeTask(id:number){
      console.warn(id);
      this.list=this.list.filter(item=>item.id!==id)
      
    }
    data=0
    updatChild(){
      this.data= Math.floor(Math.random()*10)
    }
    userDetails=[
      {name:'Anil Sidhu',email: 'anil@gmail.com'},
      {name:'Neeraj kumar',email: 'neeraj@gmail.com'},
      {name:'Amar verma',email: 'amar@gmail.com'},
      {name:'viaks dagar',email: 'anil@gmail.com'},
    ]
    datab="x";
    updateData(item:string){
      console.warn(item);
      this.datab=item;
    }
    namec:any
    getValk(item:any){
      console.warn(item);
      }

      today=Date()
      userd={
        name:'neeraj',
        age: 42
      }
      titleb='Advancepipes'
      userLogin(item:any){
        console.warn(item);
        
      }
}
