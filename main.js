"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
var direccion_1 = require("./direccion");
var telefono_1 = require("./telefono");
var mail_1 = require("./mail");
// Crear un array vacío para almacenar las personas
var personas = [];
// Crear instancias de Persona 
var persona1 = new persona_1.Persona('Pedro', 'Gómez', 30, 'A123456789A', '01/01/1993', 'Azul', 'Masculino', [
    new direccion_1.Direccion('Calle Falsa', 123, 1, 'A', '28013', 'Madrid', 'Madrid')
], [new telefono_1.Telefono('Casa', 645111222)], [new mail_1.Mail('Personal', 'pepi.gomez@cursosamsung.com')]);
var persona2 = new persona_1.Persona('Emilia', 'López', 25, 'Z987654321Z', '05/06/1998', 'Rojo', 'Femenino', [
    new direccion_1.Direccion('Avenida Siempre Viva', 456, 2, 'A', '08028', 'Barcelona', 'Barcelona')
], [new telefono_1.Telefono('Móvil', 695333444)], [new mail_1.Mail('Personal', 'emi.l.98@cursobejob.com')]);
var persona3 = new persona_1.Persona('César', 'Britti', 34, 'C456789132C', '04/03/1988', 'Verde', 'Masculino', [
    new direccion_1.Direccion('Avenida Colón', 789, 3, 'C', '26006', 'Logroño', 'La Rioja')
], [new telefono_1.Telefono('Trabajo', 622777888)], [new mail_1.Mail('Trabajo', 'cesarbritti@britti.com')]);
//Incluir cada una de mis instancias en el array personas 
personas.push(persona1);
personas.push(persona2);
personas.push(persona3);
// Mostrar los registros de las personas en la consola
personas.forEach(function (persona, index) {
    console.log("Registro de Persona ".concat(index + 1, ":"));
    console.log(persona.obtenerRegistro());
    console.log('-----------------');
});
// Función para buscar y modificar un registro por DNI
function modificarRegistroPorDNI(personas, dni, nuevoMail, nuevoTelefono, nuevaDireccion) {
    personas.forEach(function (persona) {
        if (persona.getDNI() === dni) {
            persona.agregarMail(nuevoMail);
            persona.agregarTelefono(nuevoTelefono);
            persona.agregarDireccion(nuevaDireccion);
        }
    });
}
// Datos de la persona a modificar
var dniModificar = 'A123456789A';
var nuevoMail = new mail_1.Mail('Trabajo', 'pedro.gomez@trabajo.com');
var nuevoTelefono = new telefono_1.Telefono('Móvil', 689456789);
var nuevaDireccion = new direccion_1.Direccion('Avenida Buenos Aires', 1456, 2, 'B', '26006', 'Logroño', 'La Rioja');
// Modificar el registro de la persona correspondiente
modificarRegistroPorDNI(personas, dniModificar, nuevoMail, nuevoTelefono, nuevaDireccion);
// Mostrar los registros actualizados en la consola
console.log('-----------------');
console.log('Registros actualizados:');
personas.forEach(function (persona, index) {
    console.log("Registro de Persona ".concat(index + 1, ":"));
    console.log(persona.obtenerRegistro());
    console.log('-----------------');
    ;
});
