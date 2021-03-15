import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }


  model:any={};
  ngOnInit(): void {
  }

  onsubmit(form:NgForm)
  {
    alert("form succesfully submitted")
  }
}
