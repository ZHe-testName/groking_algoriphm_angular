import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/ch0_home/home/home.component';
import { IntroductionComponent } from './components/ch1_introduction/introduction/introduction.component';
import { SelectionSortComponent } from './components/ch2_selection_sort/selection-sort/selection-sort.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/',
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'intro',
    component: IntroductionComponent,
  },
  {
    path: 'selection',
    component: SelectionSortComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
