import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

   data=[
     {name:"john Doe",profile:"developer",location:"Washington"},
     {name:"Arun",profile:"Designer",location:"gurgoan"},
     {name:"Varsha",profile:"Developer",location:"mohali"}
   ];




  buttonProp=true;
  showMessage=false;
  // datatype varname;

  // varname:datatype
  name="John Doe";
  ngOnInit(): void {

    setTimeout(()=>{
      this.buttonProp=false;
    },2000)
  }

  changeText(user:HTMLInputElement)
  {
    this.name=user.value;
    this.showMessage=true

  }

test()
{
  alert("Button is clicked");
}

  // value(name:string)
  // {

  // }
}



// functionname=function(param,param)
// {

// }


// functionname=(param,param)=>{

// }

// function functionname(param,param)
// {

// }
