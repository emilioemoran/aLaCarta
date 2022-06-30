import { Parser, parseTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatosComponent } from '../platos/platos.component';

@Component({
  selector: 'app-detalle-plato',
  templateUrl: './detalle-plato.component.html',
  styleUrls: ['./detalle-plato.component.css']
})
export class DetallePlatoComponent implements OnInit {

/*   @Input()
  plato: any; */

plato = JSON.parse(this.route.snapshot.params['plato']);


  constructor(  private route: ActivatedRoute,) { }

  ngOnInit(): void {
    console.log(this.plato.title)
  }

}
