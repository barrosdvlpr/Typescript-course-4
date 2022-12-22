
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}

// let superHero: { secretIdentity: string; superHeroName: string; health: number };
// let superVillain: { secretIdentity: string; superHeroName: string; health: number };

// let superHero: { secretIdentity: string; alias: string; health: number };
// let superVillain: { secretIdentity: string; alias: string; health: number };

interface AttackFunction {
  (opponent: { alias: string; health: number;}, attackWith: number): number;
}

interface KrustyTheClown extends OptionalAttributes {
  secretIdentity?: string;
  alias: string;
  health: number;
  attack: AttackFunction;
}
interface ComicBookCharacter extends OptionalAttributes {
  secretIdentity?: string;
  alias: string;
  health: number;
  // attack(opponent: { alias: string; health: number;} attackWith: number): number;
  attack: AttackFunction;
}

interface OptionalAttributes {
  strength?: number;
  insanity?: number;
  dexterity?: number;
  healingFactor?: number;
}

// let superHero: ComicBookCharacter = {
//   alias: true,
//   health: 5000
// }

// let superHero = {
//   alias: true,
//   health: 5000
// };

// let superHero: ComicBookCharacter = {
//   alias: "Hulk",
//   health: 5000
// }

// let superVillain: ComicBookCharacter = {
//   secretIdentity: "Jack Napier",
//   alias: "Joker",
//   health: 75
// }

function attackFunc(opponent, attackWith) {
  opponent.health -= attackWith;
  console.log(`${this.alias} attacked ${opponent.alias}, who's health = ${opponent.health}`);
  return opponent.health;
}
let superHero: ComicBookCharacter = {
  // alias: true, 
  alias: "Hulk",      
  health: 5000,
  strength: 5000,
  attack: attackFunc      
}
let superVillain: ComicBookCharacter = {
  scretIdentity: "Jack Napier", 
  alias: "Joker",               
  health: 75,
  insanity: 175,
  attack: attackFunc
}

superHero.attack(superVillain, superHero.strength);


function getSecretIdentity(character: ComicBookCharacter) {
  if (character.secretIdentity) {
    console.log(`${character.alias} is ${character.secretIdentity}`);
  } else {
    console.log(`${character.alias} has no secret identity`);
  }
}
getSecretIdentity(superHero); 
