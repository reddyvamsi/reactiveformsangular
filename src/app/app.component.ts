import { Component,OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){}
  title = 'angularreactiveforms';
  reactiveforms:FormGroup;
ngOnInit(){
  this.reactiveforms=new FormGroup({
     firstname:new FormControl('', Validators.required),
     lastname:new FormControl('', Validators.required),
     email:new FormControl('',[Validators.required,Validators.email]),
     username:new FormControl(''),
     dateofbirth:new FormControl(''),
     gender:new FormControl(''),
     address:new FormControl(''),
     country:new FormControl(''),
     city:new FormControl('')
  })

}
formsubmission(){
  console.log(this.reactiveforms);
}
}
