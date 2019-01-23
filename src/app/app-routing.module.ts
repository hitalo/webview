import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { CorouselComponent } from './corousel/corousel.component';

const routes: Routes = [
  { path: 'cards', component: CardsComponent },
  { path: 'carousel', component: CorouselComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
