import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpacexMissionsComponent } from './spacex-missions/spacex-missions.component';
import { HttpClientModule } from '@angular/common/http';
import { MissionDetailComponent } from './mission-detail/mission-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SpacexMissionsComponent,
    MissionDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  entryComponents: [MissionDetailComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
