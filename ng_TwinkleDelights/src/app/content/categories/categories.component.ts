import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.displayProducts()
  }

  products: any

  displayProducts() {
    this.api.getProducts().subscribe(response => {
      this.products = response
    })
  }
}
