import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PlatosComponent } from './platos/platos.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MenuService } from './servicios/menu.service';
import { ApiInterceptorService } from './servicios/api-interceptor.service';
import { BuscadorPlatosComponent } from './buscador-platos/buscador-platos.component';
import { DetallePlatoComponent } from './detalle-plato/detalle-plato.component';
import { AuthService } from './servicios/auth.service';
import { AuthGuardService } from './servicios/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlatosComponent,
    BuscadorPlatosComponent,
    DetallePlatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module,
    SweetAlert2Module.forRoot()
  ],
  providers: [ MenuService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService, multi: true }, 
    AuthGuardService, 
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
