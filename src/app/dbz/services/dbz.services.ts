import { Injectable } from "@angular/core";
import { Personaje } from "../interface/dbz.interface";

@Injectable()
export class DbzService{

    private _personajes: Personaje[]=[
        {
          nombre: 'Picolo',
          poder:8000
        },
        {
          nombre: 'Freezer',
          poder:180000
        }
    
      ];
    
    get personajes():Personaje[] {
      return [...this._personajes];

    }
    constructor(){
        console.log("Servicio Inicializado");
    }

}