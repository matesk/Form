import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  nuevoFavorito: string = '';

  persona: Persona = {
    nombre: 'Pablo',
    favoritos: [
      { id: 1, nombre: 'Formula 1' },
      { id: 2, nombre: 'Moto GP' },
    ],
  };

  delete(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

  add() {
    const newFav: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoFavorito,
    };

    this.persona.favoritos.push({ ...newFav });
    this.nuevoFavorito = '';
  }
}
