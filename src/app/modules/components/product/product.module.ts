import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from '../../material/material.module';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
