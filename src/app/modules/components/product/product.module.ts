import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from '../../material/material.module';
import { ProductComponent } from './product.component';
import { DefaultTableComponent } from 'src/app/core/components/default-table/default-table.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MaterialModule,
    ProductRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductModule { }
