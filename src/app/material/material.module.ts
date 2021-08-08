import { NgModule } from '@angular/core';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'


const MaterialComponents=[
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatBadgeModule,
  MatProgressSpinnerModule
  
]
@NgModule({
  imports: [ MaterialComponents ],
  exports:[ MaterialComponents ]
})
export class MaterialModule { }
