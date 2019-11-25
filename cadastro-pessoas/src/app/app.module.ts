import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroPessoa } from './pages/pessoas/cadastro/cadastro.component';
import { Card } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsultaPessoas } from './pages/pessoas/consulta/consulta.component';
import { Menu } from './layouts/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HighlightDirective } from './core/directives/high-light.directive';

@NgModule({
  declarations: [
    AppComponent,
    CadastroPessoa,
    Card,
    ConsultaPessoas,
    Menu,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
