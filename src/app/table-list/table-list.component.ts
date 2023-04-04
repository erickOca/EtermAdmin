import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Encuesta } from "app/models/encuesta";
import { EncuestaService } from "app/services/encuesta.service";
import { data } from "jquery";
import * as XLSX from "xlsx";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-table-list",
  templateUrl: "./table-list.component.html",
  styleUrls: ["./table-list.component.css"],
})
export class TableListComponent implements OnInit {
  listEncuesta: Encuesta[] = [];
  encuestasFiltr: Encuesta[];
  fechaInicio: string;
  fechaFin: string;
  constructor(
    private encuestaService: EncuestaService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.encuestaService.showAllEncuesta().subscribe((data) => {
      this.listEncuesta = data;
    });
  }

  showListEncuesta() {
    this.encuestaService.showAllEncuesta().subscribe((data) => {
      this.listEncuesta = data;
    });
  }

  showByRangeFecha(fechaInicio: String, fechaFin: String) {
    this.encuestaService
      .showByRangeFecha(fechaInicio, fechaFin)
      .subscribe((data) => {
        this.listEncuesta = data;
        this.snackBar.open("Buscando..", "Cerrar", { panelClass: ['blue-snackbar'], duration: 3000 });
        return;
      });
    console.log(data);
  }

  clearSearchFields() {
    this.fechaInicio = "";
    this.fechaFin = "";
    this.encuestaService.showAllEncuesta().subscribe((data) => {
      this.listEncuesta = data;
      this.snackBar.open("Limpiando..", "Cerrar", { duration: 300000, panelClass: ['blue-snackbar'] });
    });
  }

  exportToExcel(): void {
    // Crea un libro de Excel vacío
    const workbook = XLSX.utils.book_new();

    // Crea una hoja de Excel con los datos de la tabla
    const worksheet = XLSX.utils.json_to_sheet(this.listEncuesta);

    // Agrega la hoja al libro de Excel
    XLSX.utils.book_append_sheet(workbook, worksheet, "Datos");

    // Guarda el archivo Excel
    XLSX.writeFile(workbook, "encuestas.xlsx");
    this.snackBar.open("Excel generado..", "Cerrar", { duration: 3000 });
  }
}
