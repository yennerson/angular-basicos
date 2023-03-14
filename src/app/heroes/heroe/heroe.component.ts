import { Component } from '@angular/core';



@Component({
  selector: "app-heroe",
  templateUrl: `heroe.component.html`
})
export class HeroeComponent {
  nombre: string = "iron-man"
  edad: number = 37

  public get nombreMayuscula() : string {
    return this.nombre.toUpperCase()
  }


  obtenerNombre (): string{
    return `${this.nombre} - ${this.edad}`
  }

  cambiarNombre (){
    this.nombre = "hulk";
  }

   cambiarEdad (){
    this.edad = 20;
  }


}
