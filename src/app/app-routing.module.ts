import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeechbodyComponent } from './app-components/seechbody/seechbody.component';

const routes: Routes = [
  { path:'', component: SeechbodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
