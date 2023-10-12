import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArmarioAbiertoComponent } from './components/armario-abierto/armario-abierto.component';
import { ArmarioCerradoComponent } from './components/armario-cerrado/armario-cerrado.component';
import { CajaFuerteAbiertaComponent } from './components/caja-fuerte-abierta/caja-fuerte-abierta.component';
import { CajaFuerteCerradaComponent } from './components/caja-fuerte-cerrada/caja-fuerte-cerrada.component';
import { CajaHerramientasCerradaComponent } from './components/caja-herramientas-cerrada/caja-herramientas-cerrada.component';
import { CajaHerramientasAbiertaComponent } from './components/caja-herramientas-abierta/caja-herramientas-abierta.component';
import { CerditoRotoComponent } from './components/cerdito-roto/cerdito-roto.component';
import { CerditoComponent } from './components/cerdito/cerdito.component';
import { CuadroComponent } from './components/cuadro/cuadro.component';
import { CuadroColgadoComponent } from './components/cuadro-colgado/cuadro-colgado.component';
import { LibroComponent } from './components/libro/libro.component';
import { LupaComponent } from './components/lupa/lupa.component';
import { LlaveComponent } from './components/llave/llave.component';
import { MartilloComponent } from './components/martillo/martillo.component';
import { PuertaAbiertaComponent } from './components/puerta-abierta/puerta-abierta.component';
import { PuertaCerradaComponent } from './components/puerta-cerrada/puerta-cerrada.component';
import { PostItComponent } from './components/post-it/post-it.component';
import { RoomPage } from './pages/room/room.page';
import { HomePage } from './pages/home/home.page';
import { ExitPage } from './pages/exit/exit.page';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ArmarioAbiertoComponent,
    ArmarioCerradoComponent,
    CajaFuerteAbiertaComponent,
    CajaFuerteCerradaComponent,
    CajaHerramientasCerradaComponent,
    CajaHerramientasAbiertaComponent,
    CerditoRotoComponent,
    CerditoComponent,
    CuadroComponent,
    CuadroColgadoComponent,
    LibroComponent,
    LupaComponent,
    LlaveComponent,
    MartilloComponent,
    PuertaAbiertaComponent,
    PuertaCerradaComponent,
    PostItComponent,
    RoomPage,
    HomePage,
    ExitPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
