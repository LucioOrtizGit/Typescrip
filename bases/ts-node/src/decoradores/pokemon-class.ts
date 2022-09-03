
function printToConsole(constuctor: Function) {
    console.log(constuctor)
}

const printToConsoleCondicional = (print: boolean = false): Function => {
    if (print) {
        return printToConsole
    }
    else {
        return () => { }
    }
}

const bloquearPrototipo = function (constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);

}

function CheckValidPokemonId() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = (id: number) => {
            if (id < 1 || id > 900) {
                return console.error("El id debe ser aceptable");
            }
            else {
                return originalMethod(id);
            }
        }
    }
}

function readonly(isWrite: boolean = true):Function {
    return function (target: any, propertyKey: string){
        const descriptor:PropertyDescriptor = {
            get(){
                return 'Luk';
            },
            set(this,val){
                Object.defineProperty(this, propertyKey,{
                    value: val,
                    writable: !isWrite
                })
            }
        }
        return descriptor;
    }
}




@bloquearPrototipo
@printToConsoleCondicional(false)

export class Pokemon {
    @readonly(true)
    public publicApi: string = 'https://pokeapi.co';

    constructor(public name: string) {

    }

    @CheckValidPokemonId()
    savePokemon(id: number) {
        console.log(`Pokemon guardado ${id}`)
    }
}