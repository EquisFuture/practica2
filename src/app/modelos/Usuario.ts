export class Usuario{
    foto: string;
    nombre: string;
    telefono: string;
    direccion: string;
    email: string;
    
    constructor(nombre, telefono, direccion, email){
        this.foto = "http://source.unsplash.com/random/50x50";
        this.nombre = nombre ;
        this.telefono = telefono ;
        this.direccion = direccion ;
        this.email = email;
    }
}