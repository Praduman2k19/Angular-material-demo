import { NgModule } from '@angular/core';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
// import { MaterialComponent } from './material/material.component'
// import{ MatDialogModule} from '@angular/material/dialog'
// import { MatCardModule } from '@angular/material/card'

const MaterialComponents=[
  MatButtonModule,
  MatIconModule,
  MatDividerModule
]
@NgModule({
  imports: [ MaterialComponents ],
  exports:[ MaterialComponents ]
})
export class MaterialModule { }
