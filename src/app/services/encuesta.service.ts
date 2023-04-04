import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";
import { Encuesta } from "app/models/encuesta";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class EncuestaService {
  private baseUrl: string = "http://localhost:8080/encuesta/";
  // 'https://etermws.uc.r.appspot.com/user/';

  constructor(private httpClient: HttpClient) {}

  showAllEncuesta(): Observable<Encuesta[]> {
    console.log("List" + this.showAllEncuesta);
    return this.httpClient.get<Encuesta[]>(this.baseUrl + "getAllEncuestas");
  }

  showByRangeFecha(fechaInicio: String, fechaFin: String): Observable<any[]> {
    const url = `${this.baseUrl}getByFecha?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`;
    return this.httpClient.get<any[]>(url);
    console.log(url)
  }
}
