(() =>{

    interface Carles {
        poder: string,
        estatura: number,
        getCosas(id:string):string,
    }

    class Mutant implements Carles{
        public poder: string = '12';
        public estatura: number= 1.89;
        public getCosas(id: string) {
            return 'cosas';
        }
    }

    interface numeros {
        (a:number,b:number):number;
    }

    let funcionNumeros : numeros;




})()