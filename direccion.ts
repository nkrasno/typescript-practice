export class Direccion {
    private calle: string;
    private numero: number;
    private piso: number;
    private letra: string;
    //codigoPostal: string; en lugar de codigoPostal: number; dado que hay codigos que empiezan en cero
    private codigoPostal: string;
    private poblacion: string;
    private provincia: string;
  
    constructor(
      calle: string,
      numero: number,
      piso: number,
      letra: string,
      codigoPostal: string,
      poblacion: string,
      provincia: string
    ) {
      this.calle = calle;
      this.numero = numero;
      this.piso = piso;
      this.letra = letra;
      this.codigoPostal = codigoPostal;
      this.poblacion = poblacion;
      this.provincia = provincia;
    }
  
    getRegistroDireccion() {
      return {
        Calle: this.calle,
        Numero: this.numero,
        Piso: this.piso,
        Letra: this.letra,
        CodigoPostal: this.codigoPostal,
        Poblacion: this.poblacion,
        Provincia: this.provincia,
      };
    }
  }
  