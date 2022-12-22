
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}

// const thing: string | number;

// const thing: string | number | string[] | boolean;
// const returnSomething = (someThing: string | number | string[] | boolean) => {
//   return someThing;
// };

// type thing = string | number | string[] | boolean;
// const returnSomeThing = (someThing: thing) => someThing;
// console.log(returnSomeThing("coolGuy"));

// type thing = string | number | string[] | boolean;
// const returnSomeThing = (someThing: thing) => {
//   if (typeof someThing === "string" || typeof someThing === "number" || typeof someThing === "boolean") {
//     console.log("someThing", someThing);
//   }
//   if (someThing instanceof Array) {
//     const joinedThings = "";
//     someThing.forEach(thing => {
//       joinedThings += `${thing}`;
//     })
//     console.log("joinedThings", joinedThings);
//   }
// }
// // returnSomeThing(2323)
// returnSomeThing(["Wonder", "Woman", "Rocks!!!!"])

type thing = string | number | string[] | boolean;
const returnSomeThing = (someThing: thing) => {
  if (someThing instanceof Array) {
    const joinedThings = "";
    someThing.forEach(thing => {
      joinedThings += `${thing}`;
    })
    console.log("joinedThings", joinedThings);
  } else {console.log("something =", someThing);}
}
returnSomeThing(false)

type stuff = string | {name:string};
const gimmeStuff = (stuff: stuff) => {
  typeof stuff === "string";
  typeof stuff.name === "string";   
};

type coolThings = {name: string;} | {id: number;};
const gimmeCoolthings = (thing: coolThings) => {
  if (typeof thing.name === "string") { return thing.name; }
  if (typeof thing.id === "number") { return thing.id; }
};  

type stuffAndThings = {cool: string; meh: string;} | {cool: string; lame: string; }
const gimmeStuffAndThings = (sat: stuffandThings) => {
  return sat.cool || sat.lame;
};