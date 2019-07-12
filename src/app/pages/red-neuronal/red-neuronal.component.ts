import { Component, OnInit } from '@angular/core';
import { BuscadorpcComponent } from './../buscadorpc/buscadorpc.component';
// import { BuscadorpcComponent } from '../buscadorpc/buscadorpc.component';

@Component({
  selector: 'app-red-neuronal',
  templateUrl: './red-neuronal.component.html',
  styleUrls: ['./red-neuronal.component.scss']
})
export class RedNeuronalComponent implements OnInit {



  palabras = {
    colores: ['rojo', 'colorado', 'carmesí',
      'rubí', 'frutilla', 'bermellón', 'escarlata',
      'granate', 'burdeos', 'carmín',
      'amaranto', 'verde', 'chartreuse',
      'verde Kelly', 'esmeralda', 'verde agua',
      'agua marina', 'xanadu', 'jade',
      'verde veronés', 'arlequín', 'espárrago',
      'verde oliva', 'verde cazador', 'verde militar',
      'azul', 'azul cobalto', 'azul marino',
      'azul petróleo', 'azur', 'azul francia',
      'zafiro', 'añil', 'índigo',
      'turquí', 'azul de Prusia', 'azul majorelle',
      'azul Klein', 'magenta', 'fucsia',
      'morado', 'malva', 'lila',
      'lila', 'lavanda', 'rosa',
      'cian', 'turquesa', 'celeste',
      'cerúleo', 'aguamarina', 'menta',
      'amarillo', 'amarillo limón', 'oro',
      'dorado', 'ámbar', 'amarillo indio',
      'topacio', 'amarillo selectivo', 'marrón',
      'marrón', 'café', 'chocolate',
      'castaño', 'caqui', 'ocre',
      'siena', 'siena pálido', 'borgoña',
      'violeta', 'lavanda floral', 'amatista',
      'Púrpura', 'púrpura de Tiro', 'naranja',
      'cara de luz', 'zanahoria', 'sésamo',
      'albaricoque', 'beis', 'beige',
      'durazno', 'piel', 'blanco',
      'nieve', 'lino', 'hueso',
      'marfil', 'plata', 'plateado',
      'zinc', 'gris', 'negro'
    ],
    estilo: ['bonita'],
    tamaño: ['mini', 'pequeña', 'mediana', 'grande']
  };
  // tslint:disable-next-line: variable-name
  constructor() { }

  ngOnInit() {
  }

  _upercase() {
    // tslint:disable-next-line: prefer-const
    let upperCase = [];

    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.palabras.colores.length; index++) {
      upperCase.push(this.palabras.colores[index].toUpperCase());
    }

    this.palabras.colores = [];
    return this.palabras.colores = upperCase;
  }

  algorithm(textArea) {
    let palabras = textArea.split(' ');
    let colores = [];

    // se va a recorrer el arreglo y se van a buscar las palabras
    // tslint:disable-next-line: prefer-for-of
    for (let j = 0; j < this.palabras.colores.length; j++) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].equals(this.palabras.colores[j])) {
          colores.push(palabras[i]);
        }
      }
    }
  }
}
