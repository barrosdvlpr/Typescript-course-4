
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}

function pushSomethingIntoCollection<T>(something: T, collection: T[]) {
  collection.push(something);
  console.log(collection);
}

let jeanGrey = { name: "Jean Grey" };
let wolverine = { name: "Wolverine" };

let superHeroes = [jeanGrey];
let powers = ["telekinesis", "esp"];

interface SuperHero {name: string;}

pushSomethingIntoCollection<SuperHero>("meh", superHeroes);
pushSomethingIntoCollection<string>("adamantium claws", powers);
// pushSomethingIntoCollection("cool", superHeroes);
// pushSomethingIntoCollection("adamantium claws", []);