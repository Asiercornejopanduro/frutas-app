
//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//Componentes
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { CrudFrutasComponent } from './components/crud-frutas/crud-frutas.component';
import { FrutaCardComponent } from './components/fruta-card/fruta-card.component';
import { LoginComponent } from './components/login/login.component';
//Providers
import { FrutaService } from './providers/fruta.service';

//Pipes
import { OfertaPipe } from './pipes/oferta.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComparadorComponent,
    CrudFrutasComponent,
    FrutaCardComponent,
    FormularioComponent,
    LoginComponent,
    OfertaPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule 
  ],
  providers: [
    FrutaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
