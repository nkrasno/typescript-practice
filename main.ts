import { Persona } from './persona';
import { Direccion } from './direccion';
import { Telefono } from './telefono';
import { Mail } from './mail';

// Crear un array vacío para almacenar las personas
const personas: Persona[] = [];

// Crear instancias de Persona 
const persona1 = new Persona(
    'Pedro',
    'Gómez',
    30,
    'A123456789A',
    '01/01/1993',
    'Azul',
    'Masculino',
    [
        new Direccion('Calle Falsa', 123, 1, 'A', '28013', 'Madrid', 'Madrid')
    ],
    [new Telefono('Casa', 645111222)],
    [new Mail('Personal', 'pepi.gomez@cursosamsung.com')]
);

const persona2 = new Persona(
    'Emilia',
    'López',
    25,
    'Z987654321Z',
    '05/06/1998',
    'Rojo',
    'Femenino',
    [
      new Direccion('Avenida Siempre Viva', 456, 2, 'A', '08028', 'Barcelona', 'Barcelona')
    ],
    [new Telefono('Móvil', 695333444)],
    [new Mail('Personal', 'emi.l.98@cursobejob.com')]
  );

const persona3 = new Persona(
    'César',
    'Britti',
    34,
    'C456789132C',
    '04/03/1988',
    'Verde',
    'Masculino',
    [
        new Direccion('Avenida Colón', 789, 3, 'C', '26006', 'Logroño', 'La Rioja')
    ],
    [new Telefono('Trabajo', 622777888)],
    [new Mail('Trabajo', 'cesarbritti@britti.com')]
);

//Incluir cada una de mis instancias en el array personas 
personas.push(persona1);
personas.push(persona2);
personas.push(persona3);

// Mostrar los registros de las personas en la consola
personas.forEach((persona, index) => {
    console.log(`Registro de Persona ${index + 1}:`);
    console.log(persona.obtenerRegistro());
    console.log('-----------------');
  });


// Función para buscar y modificar un registro por DNI
function modificarRegistroPorDNI(
    personas: Persona[],
    dni: string,
    nuevoMail: Mail,
    nuevoTelefono: Telefono,
    nuevaDireccion: Direccion
  ) {
    personas.forEach((persona) => {
      if (persona.getDNI() === dni) {
        persona.agregarMail(nuevoMail);
        persona.agregarTelefono(nuevoTelefono);
        persona.agregarDireccion(nuevaDireccion);
      }
    });
  }
  
  // Datos de la persona a modificar
  const dniModificar = 'A123456789A';
  const nuevoMail = new Mail('Trabajo', 'pedro.gomez@trabajo.com');
  const nuevoTelefono = new Telefono('Móvil', 689456789);
  const nuevaDireccion = new Direccion('Avenida Buenos Aires', 1456, 2, 'B', '26006', 'Logroño', 'La Rioja');
  
  // Modificar el registro de la persona correspondiente
  modificarRegistroPorDNI(personas, dniModificar, nuevoMail, nuevoTelefono, nuevaDireccion);
  
  // Mostrar los registros actualizados en la consola
  console.log('-----------------');
  console.log('Registros actualizados:');
  personas.forEach((persona, index) => {
    console.log(`Registro de Persona ${index + 1}:`);
    console.log(persona.obtenerRegistro())
    console.log('-----------------');
    ;
  });