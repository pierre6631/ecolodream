import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { EcoloComponent } from './ecolo/ecolo.component';

const routes: Routes = [
  { path: '', component: EcoloComponent },
  { path: 'inscription', component: RegisterComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
