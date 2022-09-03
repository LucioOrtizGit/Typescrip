(() => {

    interface Carles {
        poder: string,
        estatura: number,
        direccion: Direccion,
        getCosas(id:string):string,
    }

    interface Direccion{
        id:number,
        zip:string
    }

    const charles: Carles = {
        poder: "psiquico",
        estatura: 1.78,
        direccion:{
            id:20,
            zip:'14500'
        },
        getCosas(id:string){
            return this.direccion.zip
        }
    }

    console.log(charles.poder);
})()