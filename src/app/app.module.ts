import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { NavbarModule } from './components/navbar/navbar.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';



registerLocaleData(localePt);
@NgModule({
  	declarations: [
    	AppComponent
  	],
  	imports: [
		ConfirmDialogModule,
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		NavbarModule,
		ToastModule
  	],
  	providers: [
		ConfirmationService,
		MessageService,
		{ provide: LOCALE_ID, useValue: 'pt-BR' },
		{ provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
    ],
  	bootstrap: [AppComponent]
})
export class AppModule { }
