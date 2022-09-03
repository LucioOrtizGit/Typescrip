"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let powers;
    (function (powers) {
        powers[powers["Acuaman"] = 0] = "Acuaman";
        powers[powers["Batman"] = 1] = "Batman";
        powers[powers["Flash"] = 5] = "Flash";
        powers[powers["Superman"] = 100] = "Superman";
    })(powers || (powers = {}));
    ;
    const fuerzaFlash = powers.Flash;
    const fuerzaSuperman = powers.Superman;
    const fuerzaBatman = powers.Batman;
    const fuerzaAcuaman = powers.Acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app.js.map