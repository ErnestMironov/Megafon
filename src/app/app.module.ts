import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import ru from '@angular/common/locales/ru';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { LoginComponent } from './views/login/login.component';
import { MapComponent } from './views/map/map.component';

registerLocaleData(ru);

@NgModule({
  declarations: [AppComponent, LoginComponent, MapComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTypographyModule,
    NzInputModule,
    NzIconModule,
    NzSpaceModule,
    NzFormModule,
    NzButtonModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }],
  bootstrap: [AppComponent],
})
export class AppModule {}
