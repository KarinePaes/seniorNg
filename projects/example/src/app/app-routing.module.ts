import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionWarningComponent } from './action-warning/action-warning.component';
import { HomeComponent } from './home/home.component';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';
import { HighlightLinkComponent } from './highlight-link/highlight-link.component';
import { HintComponent } from './hint/hint.component';
import { IncreaseMouseComponent } from './increase-mouse/increase-mouse.component';
import { MouseControlerComponent } from './mouse-controler/mouse-controler.component';
import { TextAdaptationComponent } from './text-adaptation/text-adaptation.component';

const routes: Routes = [
  { path: 'action', component: ActionWarningComponent },
  { path: 'dropdown', component: DropdownListComponent },
  { path: 'highlight', component: HighlightLinkComponent },
  { path: 'hint', component: HintComponent },
  { path: 'increase-mouse-sensibility', component: IncreaseMouseComponent },
  { path: 'mouse-controler', component: MouseControlerComponent },
  { path: 'text', component: TextAdaptationComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
