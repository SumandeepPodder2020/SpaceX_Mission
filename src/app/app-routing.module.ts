import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpacexMissionsComponent } from './spacex-missions/spacex-missions.component';

const routes: Routes = [
{path:'home',component: SpacexMissionsComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: '**', component: SpacexMissionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
