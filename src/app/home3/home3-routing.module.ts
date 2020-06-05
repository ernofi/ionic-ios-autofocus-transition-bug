import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home3Page } from './home3.page';

const routes: Routes = [
  {
    path: '',
    component: Home3Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Home3PageRoutingModule {}
