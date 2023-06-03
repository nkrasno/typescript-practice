"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    Telefono.prototype.getRegistroTelefono = function () {
        return {
            Tipo: this.tipo,
            Numero: this.numero,
        };
    };
    return Telefono;
}());
exports.Telefono = Telefono;
