import { Hero as SuperHero } from "./classes/Hero";
import { printObject, genericFunction, genericFunctionFlecha } from './generics/generics';
import { Villain,Hero } from "./interfaces";
// import { Hero } from './interfaces/hero';
// import { Villain } from './interfaces/villian';
import { getPokemon } from './generics/get-pokemon';
import { Pokemon } from './decoradores/pokemon-class';

const Hero = 'heroe';

const ironman = new SuperHero('Tony',1200,34);

// console.log(ironman)

// printObject(123);
// printObject(true);
// printObject('HOLA');

// genericFunction('Hola');

// genericFunctionFlecha(12);

// const deadpool = {
//     name: 'Deadpool',
//     realName: 'Wade',
//     danger:130
// }

// console.log(genericFunctionFlecha<Villain>(deadpool).danger)

// getPokemon(1)
//     .then(pokemon => console.log(pokemon.sprites.front_default))
//     .catch(error => console.error(error))
//     .finally(() => console.log('Fin Pokemon'))

const bullbasaur = new Pokemon('Bullbasaur');

// (Pokemon.prototype as any).customName = 'Pikachu';

// console.log(bullbasaur.savePokemon(30));
bullbasaur.savePokemon(300);

bullbasaur.publicApi = "CAMBIO";












