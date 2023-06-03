"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(tipo, direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
    }
    Mail.prototype.getRegistroMail = function () {
        return {
            Tipo: this.tipo,
            Direccion: this.direccion,
        };
    };
    return Mail;
}());
exports.Mail = Mail;
