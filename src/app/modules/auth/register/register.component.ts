import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from 'src/app/models/usuario'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true; //input de contraseña

  //importacion del modelo
  usuarios: Usuario ={
    uid:'',
    nombre: '',
    contrasena:'',
  } 
  async registrase(){
    const credenciales= {
      nombre: this.usuarios.nombre,
      contrasena: this.usuarios.contrasena,
    }
    const res = await this.servicioAuth.registrar(credenciales.nombre, credenciales.contrasena)
    .then(res =>{
      alert("ha agregado un nuveo usuario con exito")
    })
    console.log(res)
  }
  //definimos de forma publica el servicioAuth
  constructor(public servicioAuth: AuthService){}
}
