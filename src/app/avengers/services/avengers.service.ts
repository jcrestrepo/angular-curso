import { sharedStylesheetJitUrl } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/avengers.interface";

@Injectable()
export class AvengersService{

    private _listadoAvengers:Personaje[]=[
        {
          nombre:'Ironman',
          poder:150000
        },
        {
          nombre:'Thor ',
          poder:990000
        }
     
      ];
    
    
    public get avengers() : Personaje[] {
        return [...this._listadoAvengers];
    }
    
    constructor(){
        console.log('Servicio Inicializado');
    }

    agregarHeroe( heroe:Personaje){
        this._listadoAvengers.push(heroe);
    }

}