import { Direccion } from './direccion';
import { Telefono } from './telefono';
import { Mail } from './mail';

export class Persona {
  private nombre: string;
  private apellidos: string;
  private edad: number;
  private dni: string;
  private cumpleanos: string;
  private colorFavorito: string;
  private sexo: string;
  private direcciones: Direccion[];
  private mails: Mail[];
  private telefonos: Telefono[];
  private notas: string;

  constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    dni: string,
    cumpleanos: string,
    colorFavorito: string,
    sexo: string,
    direcciones: Direccion[],
    telefonos: Telefono[],
    mails: Mail[]
  ) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.dni = dni;
    this.cumpleanos = cumpleanos;
    this.colorFavorito = colorFavorito;
    this.sexo = sexo;
    this.direcciones = direcciones;
    this.telefonos = telefonos;
    this.mails = mails;
    this.notas = '';
  }

  agregarDireccion(direccion: Direccion) {
    this.direcciones.push(direccion);
  }

  agregarMail(mail: Mail) {
    this.mails.push(mail);
  }

  agregarTelefono(telefono: Telefono) {
    this.telefonos.push(telefono);
  }

  obtenerRegistro() {
    return {
      Nombre: this.nombre,
      Apellidos: this.apellidos,
      Edad: this.edad,
      DNI: this.dni,
      Cumpleaños: this.cumpleanos,
      ColorFavorito: this.colorFavorito,
      Sexo: this.sexo,
      Direcciones: this.direcciones.map((direccion) => direccion.getRegistroDireccion()),
      Mails: this.mails.map((mail) => mail.getRegistroMail()),
      Telefonos: this.telefonos.map((telefono) => telefono.getRegistroTelefono()),
      Notas: this.notas,
    };
  }


  getDNI() {
    return this.dni;
  }
}