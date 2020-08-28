import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';

@NgModule({
  declarations: [AppComponent, CatsComponent],
  imports: [BrowserModule, HttpClientModule, MatProgressSpinnerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
