import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { GridviewComponent } from './components/grid/grid.component'
import { LogoutComponent } from '../app/components/logout/logout.component';
import { LoginComponent } from '../app/components/login/login.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { AuthGaurdfreeService } from './services/auth-gaurdfree.service';

const routes: Routes = [
  { path: '', redirectTo: 'add', pathMatch: 'full' , canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent},  
  { path: 'add', component: AddTutorialComponent , canActivate:[AuthGaurdService]},
  { path: 'gridview', component: GridviewComponent , canActivate:[AuthGaurdService]},  
  { path: 'tutorials', component: TutorialsListComponent , canActivate:[AuthGaurdfreeService]},
  { path: 'tutorials/:id', component: TutorialDetailsComponent , canActivate:[AuthGaurdfreeService]},
  { path: 'freezes/:id', component: TutorialDetailsComponent , canActivate:[AuthGaurdfreeService]},
  { path: 'logout', component: LogoutComponent , canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
