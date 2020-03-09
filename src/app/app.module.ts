import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ScreenResModule} from 'ck-screen-res';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material';
import { LoginComponent } from './pages/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    InstructionsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatIconModule,
    FontAwesomeModule,
    MatButtonModule,
    ScreenResModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
