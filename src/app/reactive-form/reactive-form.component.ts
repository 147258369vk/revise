import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  Register!:FormGroup;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {

    this.Register = this.formbuilder.group({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      cpassword: new FormControl('')
    })







  }

  onsubmit()
  {
    console.log(this.Register.value);
  }

}
