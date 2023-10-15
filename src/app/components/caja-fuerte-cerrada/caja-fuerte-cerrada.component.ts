import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-caja-fuerte-cerrada',
  templateUrl: './caja-fuerte-cerrada.component.html',
  styleUrls: ['./caja-fuerte-cerrada.component.css']
})
export class CajaFuerteCerradaComponent {
  @Output() onExecuteAction = new EventEmitter<any>()

  id = 'caja-fuerte'
  nombre = 'Caja fuerte'
  acciones = [
    { evento: 'mirar', mensaje: 'Es una caja fuerte. Parece que necesitamos un código de 4 números para abrirla.', objetosNecesarios: [] },
    { evento: 'abrir', mensaje: 'Has abierto la caja.', objetosNecesarios: ['postit'] },
  ]
  cerrado = true

  mostrarAcciones = false

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.onShowActions
      .pipe(
        filter((mostrarAccionesDe: string) => this.id !== mostrarAccionesDe)
      )
      .subscribe(() => {
        this.mostrarAcciones = false
      })
  }

  toggleAcciones() {
    this.eventsService.onShowActions.emit(this.id)
    this.mostrarAcciones = !this.mostrarAcciones
  }

  ejecutarAccion(accion: any) {
    console.log(accion)
    this.onExecuteAction.emit({ ...accion, item: this.id })
  }
}
