import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DemoAngularMaterialModule } from './DemoAngularMaterialModule';
import { CustomerModule } from "./customer/customer.module";
import { ToastrModule } from 'ngx-toastr';
import { AdminModule } from "./admin/admin.module";
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ContentModule } from "./content/content.module";
import { DynamicResourceLoaderService } from './services/dynamic/dynamic-resource-loader.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DemoAngularMaterialModule,
    CustomerModule,
    ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-top-right',
        newestOnTop: false,
        preventDuplicates: true,
        closeButton: true,
        progressBar: true
    }),
    AdminModule,
    NgxImageZoomModule,
    ContentModule
],
  providers: [
    provideAnimationsAsync(),
    [DynamicResourceLoaderService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
