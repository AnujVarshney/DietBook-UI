import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-with-bg-image',
  templateUrl: './with-bg-image.component.html',
  styleUrls: ['./with-bg-image.component.css']
})
export class WithBgImageComponent implements OnInit {

  _emailId : String = '';
  _password : String = '';
  _rememberMe : boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router)
        { }

  ngOnInit() {
  }

  Login(){

    if(this._emailId == 'ag@gmail.com' && this._password == '123')
    {
      this.router.navigate(['user']); 
    }
    alert(' UserName : ' + this._emailId + ' Password : ' + this._password );

    this._emailId = '';
    this._password = '';


    

  }

}
