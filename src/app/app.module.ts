import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { HeaderComponent } from './header/header.component';
import { FeaturesComponent } from './features/features.component';
import { EasybankFeatureComponent } from './easybank-feature/easybank-feature.component';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';
import { RequestButtonComponent } from './request-button/request-button.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MobileMenuComponent,
    HeaderComponent,
    FeaturesComponent,
    EasybankFeatureComponent,
    LatestArticlesComponent,
    ArticleComponent,
    FooterComponent,
    RequestButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
