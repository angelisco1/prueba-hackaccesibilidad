import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ElementosDeLaHabitacion } from 'src/app/services/objetos';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.css']
})
export class RoomPage {
  objetosDelInventario: Array<string> = []

  armarioCerrado: boolean = true
  cajaHerramientasCerrada: boolean = true
  cajaFuerteCerrada: boolean = true
  puertaCerrada: boolean = true

  cuadroColgado: boolean = true
  huchaCerditoNueva: boolean = true

  constructor(private router: Router) { }

  get martilloEnHabitacion() {
    return !this.objetosDelInventario.includes('martillo')
  }

  get lupaEnHabitacion() {
    return !this.objetosDelInventario.includes('lupa')
  }

  get libroEnHabitacion() {
    return !this.objetosDelInventario.includes('libro')
  }

  get postitEnHabitacion() {
    return !this.objetosDelInventario.includes('postit')
  }

  get llaveEnHabitacion() {
    return !this.objetosDelInventario.includes('llave')
  }

  estanLosObjetoEnElInventario(objetosNecesarios: Array<string>) {
    return objetosNecesarios.every((objetoNecesario: string) => {
      return this.objetosDelInventario.includes(objetoNecesario)
    })
  }

  abrirItem(item: string) {
    switch (item) {
      case 'armario':
        this.armarioCerrado = false
        break;
      case 'caja-herramientas':
        this.cajaHerramientasCerrada = false
        break;
      case 'caja-fuerte':
        this.cajaFuerteCerrada = false
        break;
      case 'puerta':
        this.puertaCerrada = false
        alert('Enhorabuena, has conseguido abrir la puerta.')
        setTimeout(() => {
          this.router.navigateByUrl('/exit')
        }, 1000)
        break;
    }
  }

  cerrarItem(item: string) {
    switch (item) {
      case 'armario':
        this.armarioCerrado = true
        break;
      case 'caja-herramientas':
        this.cajaHerramientasCerrada = true
        break;
      case 'caja-fuerte':
        this.cajaFuerteCerrada = true
        break;
      case 'puerta':
        this.puertaCerrada = true
        break;
    }

  }

  ejecutarAccion(accion: any) {
    switch (accion.evento) {
      case 'mirar':
        console.log('Mirando')
        alert(accion.mensaje)
        break;
      case 'abrir':
        console.log('Abriendo')
        if (this.estanLosObjetoEnElInventario(accion.objetosNecesarios)) {
          this.abrirItem(accion.item)
          alert(accion.mensaje)
        } else {
          alert('Necesitas algo para poder abrirla.')
        }
        break;
      case 'cerrar':
        console.log('Cerrando')
        this.cerrarItem(accion.item)
        alert(accion.mensaje)
        break;
      case 'coger':
        console.log('Añadiendo al inventario')
        if (!this.objetosDelInventario.includes(accion.item)) {
          this.objetosDelInventario.push(accion.item)
          alert(accion.mensaje)
          // TODO: que desaparezca de la vista el item
        } else {
          alert('No puedes coger este item, ya lo tienes en el inventario.')
        }
        break;
      case 'colgar':
        console.log('Colgando')
        this.cuadroColgado = true
        alert(accion.mensaje)
        break;
      case 'descolgar':
        console.log('Descolgando')
        this.cuadroColgado = false
        alert(accion.mensaje)
        break;
      case 'golpear':
        console.log('Golpeando')
        if (this.estanLosObjetoEnElInventario(accion.objetosNecesarios)) {
          this.huchaCerditoNueva = false
          alert(accion.mensaje)
        } else {
          alert('Necesitas algo para poder romper esto.')
        }
        break;
      default:
        console.log('Esta acción no se puede realizar.')
        break;
    }
  }

}
