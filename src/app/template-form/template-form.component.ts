import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

userdetails={
  username:'harsh',
  email:'harsh@gmail.com',
  city:'chandigarh'
};

  constructor() { }

  ngOnInit(): void {
  }

  getData(form:NgForm)
  {
    console.log(form.value);
  }

}
