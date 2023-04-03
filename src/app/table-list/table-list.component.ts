import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Encuesta } from 'app/models/encuesta';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  encuesta: any[] = [
    { idEncuesta: 1, p1: 'Si', p2: 'Si', p3: 'Si', p4: 'Si', direccion: 'Ciudad de mexico', fecha: new Date('2023-03-10') },
    { idEncuesta: 2, p1: 'Si', p2: 'Si', p3: 'Si', p4: 'Si', direccion: 'Ciudad de mexico', fecha: new Date('2023-03-01') },
    { idEncuesta: 3, p1: 'Si', p2: 'Si', p3: 'Si', p4: 'Si', direccion: 'Ciudad de mexico', fecha: new Date('2023-03-05') },
    { idEncuesta: 4, p1: 'Si', p2: 'Si', p3: 'Si', p4: 'Si', direccion: 'Ciudad de mexico', fecha: new Date('2023-03-06') },
    { idEncuesta: 5, p1: 'Si', p2: 'Si', p3: 'Si', p4: 'Si', direccion: 'Ciudad de mexico', fecha: new Date('2023-03-07') },
    { idEncuesta: 6, p1: 'Si', p2: 'Si', p3: 'Si', p4: 'Si', direccion: 'Ciudad de mexico', fecha: new Date('2023-03-08') },
    { idEncuesta: 7, p1: 'Si', p2: 'Si', p3: 'Si', p4: 'Si', direccion: 'Ciudad de mexico', fecha: new Date('2023-03-09') },
    { idEncuesta: 8, p1: 'Si', p2: 'Si', p3: 'Si', p4: 'Si', direccion: 'Ciudad de mexico', fecha: '2023-03-25' }
  ];

  encuestaFiltrada: any[] = this.encuesta;


  fechaInicio: Date;
  fechaFin: Date;

  constructor() { }

  filtrarPorFecha() {
    this.encuestaFiltrada = this.encuesta.filter(registro => {
      const fecha = new Date(registro.fecha);
      return fecha >= this.fechaInicio && fecha <= this.fechaFin;
    });
    console.log(this.encuesta)
    console.log(this.encuestaFiltrada)
  }


  ngOnInit() {
  }
  exportToExcel(): void {
    // Crea un libro de Excel vacío
    const workbook = XLSX.utils.book_new();
  
    // Crea una hoja de Excel con los datos de la tabla
    const worksheet = XLSX.utils.json_to_sheet(this.encuesta);
  
    // Agrega la hoja al libro de Excel
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');
  
    // Guarda el archivo Excel
    XLSX.writeFile(workbook, 'datos.xlsx');
  }
}