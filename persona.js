"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, direcciones, telefonos, mails) {
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
    Persona.prototype.agregarDireccion = function (direccion) {
        this.direcciones.push(direccion);
    };
    Persona.prototype.agregarMail = function (mail) {
        this.mails.push(mail);
    };
    Persona.prototype.agregarTelefono = function (telefono) {
        this.telefonos.push(telefono);
    };
    Persona.prototype.obtenerRegistro = function () {
        return {
            Nombre: this.nombre,
            Apellidos: this.apellidos,
            Edad: this.edad,
            DNI: this.dni,
            Cumpleaños: this.cumpleanos,
            ColorFavorito: this.colorFavorito,
            Sexo: this.sexo,
            Direcciones: this.direcciones.map(function (direccion) { return direccion.getRegistroDireccion(); }),
            Mails: this.mails.map(function (mail) { return mail.getRegistroMail(); }),
            Telefonos: this.telefonos.map(function (telefono) { return telefono.getRegistroTelefono(); }),
            Notas: this.notas,
        };
    };
    Persona.prototype.getDNI = function () {
        return this.dni;
    };
    return Persona;
}());
exports.Persona = Persona;
