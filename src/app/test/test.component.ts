import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public myname= 'Anisur Rahman'
  public massgeStyles = {
color: 'red',
fontSiza: '14px',
fontStyle: 'italic',
  };
  public event ='';
  public name :string = '';
  
  constructor() { }

  ngOnInit(): void {
  }
  showMessage  (event :any){
this.event = event.type;
  }
  submitButton(value:any){
    console.log(value);
  }
}
