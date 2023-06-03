export class Mail {
    private tipo: string;
    private direccion: string;
  
    constructor(tipo: string, direccion: string) {
      this.tipo = tipo;
      this.direccion = direccion;
    }
  
    getRegistroMail() {
      return {
        Tipo: this.tipo,
        Direccion: this.direccion,
      };
    }
  }
  