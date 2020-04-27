import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ColorChangeDirective } from './app.directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorChangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
