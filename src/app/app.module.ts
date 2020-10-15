import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GithubfetcherService } from './services/githubfetcher.service';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { WhiteBlackDirective } from './white-black.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    WhiteBlackDirective,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [GithubfetcherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
