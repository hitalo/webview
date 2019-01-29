import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { CorouselComponent } from './corousel/corousel.component';
import { SampletabComponent } from './sampletab/sampletab.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: 'u',
    canActivate: [AuthGuard],
    children: [
      { path: 'cards', component: CardsComponent },
      { path: 'carousel', component: CorouselComponent },
      {
        path: 'sample-tab', component: SampletabComponent,
        children: [
          { path: 'carousel', component: CorouselComponent },
          { path: 'cards', component: CardsComponent },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
