import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
   modal:any = document.getElementById('id01');
   event:any;
    
  // When the user clicks anywhere outside of the modal, close it
  onclick() {
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
