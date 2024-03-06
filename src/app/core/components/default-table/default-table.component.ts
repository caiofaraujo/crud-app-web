import { isDataSource } from '@angular/cdk/collections';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, isObservable } from 'rxjs';

@Component({
  selector: 'app-default-table',
  templateUrl: './default-table.component.html',
  styleUrls: ['./default-table.component.scss']
})
export class DefaultTableComponent implements AfterViewInit {

  // INPUTS
  @Input() isLoading: any;
  @Input() columns: any;
  @Input() tableStyle: string | undefined;
  //@Input() paginate: boolean = true;

  // OUTPUTS
  @Output() endLoading = new EventEmitter<any>();
  //@Output() pageChangedEvent = new EventEmitter<any>();
  //@Output() detailEvent = new EventEmitter<any>();

  // CHILDS
  //@ViewChild(MatPaginator) paginator!: MatPaginator;
  //@ViewChild(MatSort) sort!: MatSort;

  // DADOS
  dataSource = new MatTableDataSource();
  displayedColumns: string[] | undefined;

  /**
   * Responsável por definir o dataSource que será utilizado na tabela genérica, 
   * podendo receber tanto um MatTableDataSource como um Observable
   *
   * @param {any} data - DataSource a ser considerado na definição.
   */
  @Input() set data(data: any){
    if(data){
      if(isObservable(data)){
        data.subscribe({
          next: (res: any) => {            
            this.dataSource.data = res;
          },
          error: (error) => {
            console.log(error.error.message);
            this.dataSource = new MatTableDataSource();
            this.isLoading = false;
            this.endLoading.emit(false);
          }, 
          complete: () => {
            this.isLoading = false;
            this.endLoading.emit(false);
          }
        })
      } else {
        this.dataSource.data = data;
        this.isLoading = false;
        this.endLoading.emit(false);
      }
    } else {
      this.dataSource.data = [];
      this.isLoading = false;
      this.endLoading.emit(false);
    }    
  }
  
  ngOnInit() {    
    this.buildColumns();           
  }

  /**
   * Método responsável por construir a definição das colunas genéricas. 
   * O objeto "columns" deverá ser definido no componente de origem, informando
   * a estrutura que será utilizada na criação da tabela genérica.
   */
  buildColumns() {
    this.displayedColumns = this.columns ? this.columns.map((c: any) => c.columnDef) : null;
  }

  ngAfterViewInit() {
    //console.log('test');
    //this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
  }

}
