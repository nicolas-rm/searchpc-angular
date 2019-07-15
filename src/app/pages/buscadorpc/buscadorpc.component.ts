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
  // filterPC = this.options;
  buscador = this;
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

  RedNeuronalComponent = new RedNeuronalComponent();
  // options: string[] = ['One', 'Two', 'Three'];
  comp: any = [];
  options: string[] = [];

  filteredOptions: Observable<string[]>;
  // PIPE
  // tslint:disable-next-line: variable-name
  constructor(private _computadoraService: ComputadoraService) { }


  ngOnInit() {
    this.arregloOcupacion = [];

    // PIPE
    this.filteredOptions = this.myControlAuto.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    // console.log(this.areaText);
    // constructor() { }
  }

  private _algorhitmicPipe() {
    // DE AQUI SE SACAN TODOS LOS DATOS DE LAS COMPUTADORAS RECOMENDADAS, PERO
    // ESPECIFICAMENTE SOLAMENTE LA MARCA Y EL MODELO
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.comp.length; index++) {
      this.options.push(this.comp[index].marca + ' ' + this.comp[index].modelo);
    }
    this.arregloMarcaPreferencia = [];
    // let a = this.myControlAuto.asyncValidator;
    // console.log('valor de a : ' + a);
    console.log('COMPUTADORAS THIS.OPTION');
    //  console.log('ESTAS' + this.options.length);
    console.log(this.options);
  }
  // PIPE
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log(value);

    // tslint:disable-next-line: prefer-const
    let ret = this.options.filter(option => option.toLowerCase().includes(filterValue));
    // ESTE ES EL VALOR QUE COINCIDE CUANDO GENERA UNA BUSQUEDA. (RET)
    console.log('EL VALOR DE RET ES : ' + ret);
    return ret;
  }

  // PIPE
  sugerirPc() {


    this.preferencias.color = this.colores.split(',');

    // AQUI DEBE DE LLAMARSE A LOS METODOS DE RED-NEURONAl
    // this.redNeuronal();
    // console.log(this.RedNeuronalComponent._upercase);
    this._computadoraService
      .cargarConAlgoritmo(this.preferencias, this.desde)
      .subscribe((resp: any) => {
        this.computadoras = resp;
        this.comp = resp;
        console.log('THIS.COMPUTADORAS : ');
        console.log(this.computadoras);
        this._algorhitmicPipe();
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

  }

  agregarMarcaPreferencia(event) {


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
    console.log(this.preferencias.marcaPreferencia);

  }

  agregarHora(event) {
    if (event.target.checked) {
      this.preferencias.horas = event.target.id.toString();
    }

  }
  agregarUso(event) {
    if (event.target.checked) {
      this.preferencias.nivelUso = event.target.id.toString();
    }

  }

  redNeuronal() {
    this.RedNeuronalComponent.algorithm(this.areaText);
  }
}
