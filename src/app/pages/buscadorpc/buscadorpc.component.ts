import { Component, OnInit } from '@angular/core';
import { ComputadoraService } from '../../services/computadora.service';

// import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { RedNeuronalComponent } from '../red-neuronal/red-neuronal.component';

@Component({
  selector: 'app-buscadorpc',
  templateUrl: './buscadorpc.component.html',
  styles: []
})
export class BuscadorpcComponent implements OnInit {
  // tslint:disable-next-line: jsdoc-format
  /**variables que utilizare para captar todo lo que se marque */

  // colors = new RedNeuronalComponent();
  formulario = true;
  computadoras: any = [];
  areaText = '';
  colores = ''.toUpperCase();
  clickMessage: string;
  arregloOcupacion: any = [];
  arregloMarcaPreferencia: any = [];
  desde = 0;
  preferencias = {
    ocupacion: ''.toUpperCase(),
    horas: 0,
    presupuesto: 18000,
    edad: 0,
    nivelUso: ''.toUpperCase(),
    marcaPreferencia: ['DELL', 'HP'],
    // color: ''.toUpperCase(),
    color: [],
    almacenamiento: ''.toUpperCase()
  };

  // PIPE
  // myControlPlain = new FormControl();
  myControlAuto = new FormControl();

  // options: string[] = ['One', 'Two', 'Three'];
  options: string[];

  filteredOptions: Observable<string[]>;
  // PIPE
  /** */
  // tslint:disable-next-line: jsdoc-format
  /** buscar la forma en que se marquen varios y guardarlos*/

  // tslint:disable-next-line: variable-name
  constructor(private _computadoraService: ComputadoraService) { }

  ngOnInit() {
    this.arregloOcupacion = [];
    this.arregloMarcaPreferencia = [];

    // PIPE
    this.filteredOptions = this.myControlAuto.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  // PIPE
  private _filter(value: string): string[] {
// tslint:disable-next-line: prefer-const
    let filterValue = value.toLowerCase();
    console.log(value);


    /* for (let a = 0; a < this.computadoras.length(); a++) {
      this.computadoras.
    } */
    // tslint:disable-next-line: prefer-const
    let ret = this.options.filter(option => option.toLowerCase().includes(filterValue));
    console.log(ret);
    return ret;
  }
// PIPE

  sugerirPc(/*todos los argumentos con los que voy a validar */) {
    // tslint:disable-next-line: jsdoc-format
    /**referencia al donde mandare los parametros */
    /* this._computadoraService.cargarConAlgoritmo() */

    // this.colorPref();
    this.preferencias.color = this.colores.split(',');
    this._computadoraService
      .cargarConAlgoritmo(this.preferencias, this.desde)
      .subscribe((resp: any) => {
        this.computadoras = resp;
        this.options = resp;
        console.log('THIS.COMPUTADORAS : ');
        console.log(this.computadoras);
        console.log('THIS.OPTIONES : ');
        console.log(this.options);
      });

    console.log(this.preferencias);
    if (this.formulario) {
      this.formulario = false;
    } else {
      this.formulario = true;
    }
  }

  agregarOcupacion(event) {
    console.log(event);
    if (event.target.checked) {
      // tslint:disable-next-line: prefer-const
      let separacion = '' + event.target.id.toString() + '';
      console.log(separacion);
      this.arregloOcupacion.push(separacion.toUpperCase());
    } else {
      for (let i = 0; i < this.arregloOcupacion.length; i++) {
        if (this.arregloOcupacion[i] === event.target.id.toString()) {
          this.arregloOcupacion.splice(i, 1);
        }
      }
    }

    console.log(this.arregloOcupacion);
    this.preferencias.ocupacion = this.arregloOcupacion.toString();
    console.log(this.preferencias.ocupacion);
    // console.log(this.preferencias.presupuesto);
    // console.log(this.preferencias.horas);
  }

  agregarMarcaPreferencia(event) {
    // este es para uno solo
    // if (event.target.checked) {
    //   this.preferencias.marcaPreferencia = event.target.id.toString();
    // }

    //////////////
    // este es para varios
    console.log(event);
    if (event.target.checked) {
      const separacion = '' + event.target.id.toString() + '';
      console.log(separacion);
      this.preferencias.marcaPreferencia.push(separacion);
    } else {
      for (let i = 0; i < this.preferencias.marcaPreferencia.length; i++) {
        if (
          this.preferencias.marcaPreferencia[i] === event.target.id.toString()
        ) {
          this.preferencias.marcaPreferencia.splice(i, 1);
        }
      }
    }
    // this.preferencias.marcaPreferencia = this.arregloMarcaPreferencia;
    console.log(this.preferencias.marcaPreferencia);
    // console.log(this.colors);
    // console.log(this.preferencias.color);
  }

  agregarHora(event) {
    if (event.target.checked) {
      this.preferencias.horas = event.target.id.toString();
    }
    // console.log(this.preferencias.horas);
  }
  agregarUso(event) {
    if (event.target.checked) {
      this.preferencias.nivelUso = event.target.id.toString();
    }
    // console.log(this.preferencias.nivelUso);
  }

  colorPref() {
    // separio los colores
    let pref = this.colores.split(',');
    // pref = this.colores.split(',WS');
    // quito los espacios
    // tslint:disable-next-line: prefer-const
    let cad: string = pref.toString();
    pref = cad.split('\n');
    // quito los tabuladores
    cad = pref.toString();
    pref = cad.split('\s');

    this.preferencias.color = pref;
    // pref = this.colores.split(',');
    // this.preferencias.color = this.colores.split(',');
    // this.preferencias.color = this.colores.split(',');
    console.log('ESTOS SON LOS COLES O EL COLOR ');
    console.log(this.preferencias.color);
  }

  onclick() {
    this.clickMessage = 'You are my hero!';
    // console.log(this.clickMessage);
    // console.log(this.preferencias.edad);
    // console.log(this.preferencias.horas);
    console.log(this.preferencias);
  }
}
