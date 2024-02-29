import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MaterialModule } from '../modules/material/material.module';
import { DefaultTableComponent } from './components/default-table/default-table.component';

@NgModule({
  declarations: [     
    DefaultTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    DefaultTableComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule {}