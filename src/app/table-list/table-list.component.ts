import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Encuesta } from 'app/models/encuesta';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  encuesta: Encuesta[] = [
     { idEncuesta: 1,p1: 'Si',p2: 'Si',p3: 'Si',p4: 'Si',imagen1:'', imagen2:'',imagen3:'',direccion:'', fecha: '2022-12-31'}
  ];

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  constructor() { }

filtrarPorFecha(){
if(this.range.controls.start.valid && this.range.controls.end.valid && this.range.value.start != null && this.range.value.end != null){
  console.log("RANGO DE FECHAS: ", this.range.value)
  alert("buscando por fechas"  )
}else{
  alert("Debes escoger un rango de fechas valido")
  console.log("Debe escoger un rango de fechas validas ")
}
}

quitarFiltro(){
this.range.controls.start.reset()
this.range.controls.end.reset()
}


  ngOnInit() {
  
  }

  


}