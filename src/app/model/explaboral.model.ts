export class explaboral {
    explaboral_id?: number;
     trabajoactual: String ;
     fechainicio: String;
     fechafin: String;
     descripcion: String;
     tipoempleo: String;    


    constructor (trabajoactual: String, fechainicio: String, fechafin: String, descripcion: String, tipoempleo: String){
        this.trabajoactual = trabajoactual;
        this.fechainicio = fechainicio;
        this.fechafin = fechafin;
        this.descripcion = descripcion;
        this.tipoempleo = tipoempleo;
    }
}