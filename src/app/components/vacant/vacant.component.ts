import { Component, OnInit } from '@angular/core';
import { PropiedadService } from 'src/app/services/propiedad.service';
import { Propiedad } from './../../models/propiedad';
@Component({
  selector: 'app-vacant',
  templateUrl: './vacant.component.html',
  styleUrls: ['./vacant.component.css']
})
export class VacantComponent implements OnInit {

  listPropiedades: Propiedad[] = []

  constructor(private _propiedadService: PropiedadService){

  }

  ngOnInit() {
    this.obtenerPropiedades();
  }

  obtenerPropiedades(){
    this._propiedadService.getPropiedades().subscribe(data =>{
     console.log(data);
      this.listPropiedades = data;
    },
    
    err =>{
      console.log(err);
    });
  }
}
