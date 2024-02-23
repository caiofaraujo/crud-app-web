import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(private productService: ProductService){}

  ngAfterViewInit() {
    this.load();
  }

  load(){
    this.productService.getAll().subscribe({
      next: (res) => {
        console.log(res.body);
      }
    });
  }
}
