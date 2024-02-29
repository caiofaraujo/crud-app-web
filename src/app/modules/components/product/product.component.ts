import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // DEFINIÇÃO DA TABELA (componente: default-table)
  columns = [
    {columnDef: 'id', header: 'Cód. Produto', cell: (element: any) => `${element.id}` },
    {columnDef: 'title', header: 'Título', cell: (element: any) => `${element.title}` },
    {columnDef: 'description', header: 'Descrição', cell: (element: any) => `${element.description}` },
    {columnDef: 'price', header: 'Preço', cell: (element: any) => `${element.price}` }
  ]

  //dataSource: any;
  dataSource = new MatTableDataSource();
  dataSource$: Observable<Product> | undefined;
  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.dataSource$ = this.productService.getAll();
/*     this.productService.getAll().subscribe({
      next: (res) => {
        this.dataSource = res;
        console.log('teste');
      }
    }); */
  }
}
