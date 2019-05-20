import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-resultados-sugerencia',
  templateUrl: './resultados-sugerencia.component.html',
  styles: []
})
export class ResultadosSugerenciaComponent implements OnInit {

  computadoras: any = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.params.subscribe( params => {
        console.log(params);
      });
     }

  ngOnInit() {
  }

}
