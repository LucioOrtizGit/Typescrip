"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            this.name = 'Iron',
                this.team = 'Aven',
                this.realName = 'Ironman';
        }
        bio() {
            console.log("Biografia");
        }
        static poder() {
            console.log(1000);
        }
    }
    const antman = new Avenger();
    console.log(antman.realName);
    antman.bio();
    Avenger.poder();
})();
//# sourceMappingURL=basica.js.map