import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-b2',
  templateUrl: './b2.component.html',
  styleUrls: ['./b2.component.css']
})
export class B2Component implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  

  
  loginForm = this.formBuilder.group({
    name:['', Validators.required],
    email:['', Validators.required],
    password:['', Validators.required],
    number:['', Validators.required],
    date:['', Validators.required],
    check1:[false, Validators.required],
    check2:[false, Validators.required],
    radio:['Delhi', Validators.required],
  });

  userForm() {
    // console.warn(this.loginForm.value);

  }
  @Output() updateDataEvent= new EventEmitter<any>();

}
