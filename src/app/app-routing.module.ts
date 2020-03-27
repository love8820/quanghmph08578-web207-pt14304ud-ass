import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { ManagerComponent } from './manager/manager.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'trangchu', pathMatch: 'full'},
  {path: 'trangchu', component: TrangchuComponent},
  {path: 'manager', component: ManagerComponent},
  {path: 'user', component: UserComponent},
  {path: 'user/list', component: UserListComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
