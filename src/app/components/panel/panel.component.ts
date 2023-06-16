import { Component, OnInit } from '@angular/core';
import { PropiedadService } from 'src/app/services/propiedad.service';
import { Propiedad } from './../../models/propiedad';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import { ToastrService } from 'ngx'

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  listPropiedades: Propiedad[] = [];
  propiedadForm: FormGroup;

  id: string | null;

  constructor(private _propiedadService: PropiedadService,
     private fb: FormBuilder,
     private aRouter: ActivatedRoute){

this.propiedadForm= this.fb.group({
  ubicacion: ['', Validators.required],
  direccion: ['', Validators.required],
  precio: ['', Validators.required],
  descripcion: ['', Validators.required],
});

this.id  = this.aRouter.snapshot.paramMap.get('id');
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

  eliminarPropiedad(id: any) {
    this._propiedadService.eliminarPropiedad(id).subscribe(data => {
      //this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
      this.obtenerPropiedades();
    }, error=> {

      console.log('No funciono eliminado');
      console.log(error);
    })
  }

  agregarPropiedad() {
    const PROPIEDAD: Propiedad ={
      ubicacion: this.propiedadForm.get('ubicacion')?.value,
      direccion: this.propiedadForm.get('direccion')?.value,
      precio: this.propiedadForm.get('precio')?.value,
      descripcion: this.propiedadForm.get('descripcion')?.value
      
    }

    console.log(PROPIEDAD);
    this._propiedadService.guardarPropiedad(PROPIEDAD).subscribe(data => {
      console.log(data);
    })

  }

  sendNotify(){
    alert( "La propiedad se guardo correctamente");
    setInterval(() => {
      window.location.reload();
    },1000)
   }


}
