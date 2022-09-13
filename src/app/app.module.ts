import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, TopBarComponent, ListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
