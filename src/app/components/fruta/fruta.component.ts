import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';
import { FrutaService } from 'src/app/providers/fruta.service';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.scss']
})
export class FrutaComponent implements OnInit {

  frutas: Fruta[];
  nueva: string;
  todas:boolean;
  textoFiltro:string;
  constructor(public frutaService: FrutaService) {
    console.trace('FrutaComponent constructor');
    this.frutas = [];
    this.todas=true;
    this.textoFiltro="Todas";
  }

  ngOnInit() {
    console.trace('FrutaComponent ngOnInit');
    //Llamar al servicio para la carga inicial de las tareas,NO hacerlo en el constructor.
    this.recargarLista();
    
  }


  recargarLista() {
    this.frutaService.getAll().subscribe(data => {
      console.debug('datos recibidos %o', data);
      this.frutas = data.map(el => el);
    });
  }


  filtrar(){
    this.todas=!this.todas;
    this.textoFiltro=(this.todas)?'Todas':'En oferta';
  }

}
