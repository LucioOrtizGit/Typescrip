"use strict";
(() => {
    const charles = {
        poder: "psiquico",
        estatura: 1.78,
        direccion: {
            id: 20,
            zip: '14500'
        },
        getCosas(id) {
            return this.direccion.zip;
        }
    };
    console.log(charles.poder);
})();
//# sourceMappingURL=basicas.js.map