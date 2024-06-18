import { Injectable } from '@angular/core';
import { Tarjeta } from './interfaces/invitado';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {


  private baseUrl: string = environment.baseUrl;
  private _tarjeta!: Tarjeta;


  get tarjeta() {
    return { ...this._tarjeta };
  }

  constructor() { }


  abrirTarjeta(idTarjeta: string){

    const url = `${this.baseUrl}/tarjeta`;

    const body = { idTarjeta: idTarjeta }
    console.log(body);

  }

}
