(() =>{

    class Avenger{
        // private name:string;
        // public team:string;
        // public realName:string;

        constructor(private name?:string,public team?:string,public realName?:string){
            this.name = 'Iron',
            this.team = 'Aven',
            this.realName = 'Ironman'
        }

        public bio(){
            console.log("Biografia");
        }

        static poder(){
            console.log(1000);
        }
    }

    const antman:Avenger = new Avenger();
    console.log(antman.realName);
    antman.bio();
    Avenger.poder();



})()