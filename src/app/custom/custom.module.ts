import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule
  ],
  declarations: []
})
export class CustomModule { }
