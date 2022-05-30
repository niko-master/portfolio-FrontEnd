export class persona {
    id?: number;
    nombre: String;
    apellido: String;
    img: String ;
    telefono: String;
    mail: String;
    sobremi: String;

    constructor (nombre: String, apellido: String, img: String, telefono: String, mail: String, sobremi: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.telefono = telefono;
        this.mail = mail;
        this.sobremi = sobremi;
    }
}