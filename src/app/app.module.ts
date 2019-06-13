import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComputadorasComponent } from './pages/computadoras/computadoras.component';

// HttpClientModule
import { HttpClientModule } from '@angular/common/http';

//Routing
import { RouterModule, Routes } from '@angular/router';
import { BuscadorpcComponent } from './pages/buscadorpc/buscadorpc.component';
import { ResultadosSugerenciaComponent } from './pages/resultados-sugerencia/resultados-sugerencia.component';


// Routes
const routes: Routes = [
  { path: '', component: BuscadorpcComponent , pathMatch: 'full' },
  { path: 'computadoras', component: ComputadorasComponent },
  { path: '**', component: BuscadorpcComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ComputadorasComponent,
    BuscadorpcComponent,
    ResultadosSugerenciaComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes),
    HttpClientModule,
    // AngularFontAwesomeModule
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
