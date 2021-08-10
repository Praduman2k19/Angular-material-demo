import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeComponent } from './badge/badge.component';
import { BasicComponent } from './basic/basic.component';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { TextComponent } from './text/text.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { GridlistComponent } from './gridlist/gridlist.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { CardsComponent } from './cards/cards.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  { path:'basic',component:BasicComponent},
  { path:'button',component:ButtonComponent},
  { path:'text',component:TextComponent},
  { path:'icon',component:IconComponent},
  { path:'badge',component:BadgeComponent},
  { path:'progress-spinner',component:ProgressSpinnerComponent},
  { path:'navbar',component:NavbarComponent},
  { path:'menu',component:MenuComponent},
  { path:'list',component:ListComponent},
  { path:'gridlist',component:GridlistComponent},
  { path:'expansion-panel',component:ExpansionPanelComponent},
  { path:'cards',component:CardsComponent},
  { path:'tabs',component:TabsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
