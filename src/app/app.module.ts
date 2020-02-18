import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { LogoPanelComponent } from './logo-panel/logo-panel.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    LogoPanelComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
