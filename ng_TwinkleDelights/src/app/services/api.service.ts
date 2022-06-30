import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';

import { Product } from 'src/assets/product_interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  base_url = 'http://localhost:8000/'

  getProducts(): Observable<Product> {
    return this.http.get<Product>(this.base_url + 'products_list/')
  }

  getProduct(id: any): Observable<Product> {
    return this.http.get<Product>(this.base_url + `product/${id}`)
  }

  getEarrings(): Observable<Product> {
    return this.http.get<Product>(this.base_url + 'earrings/')
  }

  getNecklaces(): Observable<Product> {
    return this.http.get<Product>(this.base_url + 'necklaces/')
  }

  getRings(): Observable<Product> {
    return this.http.get<Product>(this.base_url + 'rings/')
  }

  getBracelets(): Observable<Product> {
    return this.http.get<Product>(this.base_url + 'bracelets/')
  }

  getCart(): Observable<Product[]> {
    return this.http.get<Product[]>(this.base_url + 'cart/')
  }

  getWishlist(): Observable<Product[]> {
    return this.http.get<Product[]>(this.base_url + 'wishlist/')
  }

  getCoupons(): Observable<any> {
    return this.http.get<any>(this.base_url + 'coupons/')
  }

  updateWishlist(id: number, in_wishlist: any): Observable<any> {
    return this.http.put(this.base_url + `update_wishlist/${id}`, in_wishlist)
  }

  updateCart(id: number, in_cart: any): Observable<any> {
    return this.http.put(this.base_url + `update_cart/${id}`, in_cart)
  }
}
