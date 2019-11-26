import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
    canActivate: [AuthGuard]
  },
  {
    path: "home",
    loadChildren: "../app/layouts/layouts.module#LayoutsModule",
    canActivate: [AuthGuard],
  },
  {
    path: "account",
    loadChildren: "../app/pages/account/account.module#AccountModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
