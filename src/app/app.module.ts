import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CarouselItemComponent } from './carousel/carousel-item/carousel-item.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PictureService } from './services/picture.service';
import { FactService } from './services/fact.service';
import { HistoryService } from './services/history.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    PictureService,
    FactService,
    HistoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
