import { Component, OnInit, Input } from '@angular/core';
import { User } from '../User';

@Component({ 
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('data') user : User;
  constructor() { }

  ngOnInit(): void {
  }

}
