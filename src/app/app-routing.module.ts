import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeComponent } from './badge/badge.component';
import { BasicComponent } from './basic/basic.component';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { TextComponent } from './text/text.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';

const routes: Routes = [
  { path:'basic',component:BasicComponent},
  { path:'button',component:ButtonComponent},
  { path:'text',component:TextComponent},
  { path:'icon',component:IconComponent},
  { path:'badge',component:BadgeComponent},
  { path:'progress-spinner',component:ProgressSpinnerComponent},
  { path:'navbar',component:NavbarComponent},
  { path:'',component:BadgeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
