export class Telefono {
    private tipo: string;
    private numero: number;
  
    constructor(tipo: string, numero: number) {
      this.tipo = tipo;
      this.numero = numero;
    }
  
    getRegistroTelefono() {
      return {
        Tipo: this.tipo,
        Numero: this.numero,
      };
    }
  }
  