import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { CorouselComponent } from './corousel/corousel.component';
import { SampletabComponent } from './sampletab/sampletab.component';

const routes: Routes = [
  { path: 'cards', component: CardsComponent },
  { path: 'carousel', component: CorouselComponent },
  { path: 'sample-tab', component: SampletabComponent,
      children:[
        { path: 'carousel', component: CorouselComponent },
        { path: 'cards', component: CardsComponent },
      ] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
