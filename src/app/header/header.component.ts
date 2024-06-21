import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'; // Import for accurate URL handling

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType: string = "default"; // Initialize menuType with default value
  sellerName:string ="";


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((val:any) => {
      if (val.url) { // Check event
        if (localStorage.getItem('seller') && val.url && val.url.includes('seller')) {
          let sellerStore = localStorage.getItem('seller');
          let sellerData = sellerStore && JSON.parse(sellerStore);[0]  //read
          this.sellerName = sellerData.name
          this.menuType = "seller";
        } else {
          this.menuType = "default";
        }
      }
    });
  }
  logOut(){
    localStorage.removeItem('seller');
    this.router.navigate(['/'])
  }
}












































// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent implements OnInit {
//   menuType:string ="seller"

//   constructor(private router:Router) { }

//   ngOnInit(): void {
//     this.router.events.subscribe((val:any)=>{
//       console.log(val.url)
//       if(val.url){
//         if(localStorage.getItem('seller')&&val.url.includes('selller')){
//             this.menuType="seller"
//           console.log("seller area")
          
//         }
//         this.menuType="default"
//         console.log("outside seller area")
//       }
      
//     })
//   }

// }

