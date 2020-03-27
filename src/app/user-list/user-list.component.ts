import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { User } from '../User'; 

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  selected: User;
  users: User[];
  constructor(private productService: ProductService) { 
    console.log('constructor')
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.productService.getUsers().subscribe(data => {
      console.log(data);
      this.users = data;
     });
   }
   removeItem(id){
    this.productService.removeProduct(id).subscribe(response => {
      this.users = this.users.filter(product => product.id != response.id);
    })
     // this.products = this.products.filter(product => product.id != id);
   }
 
 
 
   // changeStatus(){
   //   // this.product.status = !this.product.status;
   // }
   // changeName(e){
   //   // this.product.name = e.target.value;
   // }
   // removeItem(id){
   //   this.products = this.products.filter(product => product.id != id);
   // }
   // showDetail(product){
   //   console.log(product);
   //   this.selected = product;
   // }

}
