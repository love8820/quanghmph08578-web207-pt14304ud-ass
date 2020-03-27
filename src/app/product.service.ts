import { Injectable } from '@angular/core';
import { data } from './MockData';
import { User } from './User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ProductService {
  api = 'https://5e76f6aee3fd85001601f548.mockapi.io/user';
  users = data;
  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]>{ 
    return this.http.get<User[]>(this.api);
  }
  getUser(id): Observable<User>{
    return this.http.get<User>(`${this.api}/${id}`);
    // return this.products.find(product => product.id == id);
  }
  removeProduct(id): Observable<User>{
    return this.http.delete<User>(`${this.api}/${id}`);
    // return this.products.filter(product => product.id !== id);
  }
  addProduct(product){
    return this.http.post<User>(`${this.api}`, product);
    // const newProduct = { id: 5, ...product};
    // this.products.push(newProduct);
    // console.log(this.products)
  }
  updateProduct(product){
     return this.http.put<User>(`${this.api}/${product.id}`, product);
  }
}