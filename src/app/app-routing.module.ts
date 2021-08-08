import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { TextComponent } from './text/text.component';

const routes: Routes = [
  { path:'basic',component:BasicComponent},
  { path:'button',component:ButtonComponent},
  { path:'text',component:TextComponent},
  { path:'icon',component:IconComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
