import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightSearchComponent } from './pages/public/flight-search/flight-search.component';
import { FlightAddComponent } from './pages/admin/flight-add/flight-add.component';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { PublicComponent } from './pages/public/public.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FlightFindComponent } from './pages/admin/flight-find/flight-find.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    FlightAddComponent,
    PublicComponent,
    AdminComponent,
    HeaderComponent,
    FlightFindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
