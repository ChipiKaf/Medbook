import { LoginComponent } from './pages/login/login.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'instructions', component: InstructionsComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
