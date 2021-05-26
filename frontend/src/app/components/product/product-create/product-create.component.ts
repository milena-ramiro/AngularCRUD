import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';
import { Product } from './../Model/product.model';
import { HeaderService } from './../../template/header/header.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  
  constructor(private router: Router, 
    private productService: ProductService,
    private headerService: HeaderService) { 

      headerService.headerData = {
        title: 'Cadastro de produtos',
        icon: 'storefront',
        routeUrl: '/products'
      }
      
    }

  ngOnInit(): void {
    
  }

  createProduct(): void{
    this.productService.create(this.product).subscribe(()=> {
      this.productService.showMessage('Produto criado!');
      this.router.navigate(['/products']);
    })

  }

  cancel(): void{
    this.router.navigate(['/products']);
  }

}
