import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { ClientesComponent } from './clientes/clientes.component';

// Services
import { ClienteService } from './clientes/cliente.service';

// Router
import { RouterModule, Routes } from '@angular/router';

// Http (permite comunicacion con las API's de Spring)
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: '/clientes', pathMatch: 'full'},
  { path: 'directivas', component: DirectivasComponent },
  { path: 'clientes', component: ClientesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivasComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
