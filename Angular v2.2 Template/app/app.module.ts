import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RoutingComponent } from './app.routing';
import { routingModuleComponent } from './app.routing';
import { EmpDataService } from './app.model';

@NgModule({
  imports: [BrowserModule, RoutingComponent, FormsModule, HttpModule],
  declarations: [AppComponent, routingModuleComponent],
  bootstrap: [AppComponent],
  providers: [EmpDataService]
})
export class AppModule { }
