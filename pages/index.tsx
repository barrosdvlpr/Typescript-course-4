
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}

let unit: string = "awesome";
// let miles: "MILES" = "MILES"; 
let miles: "MILES" = "MILtS"; 

// function moveCharacter(distance: number, value: string) {
//   console.log(`You moved ${distance} ${value}`);
// };
// // moveCharacter(3, "feet");
// moveCharacter(4, "dragon");

type distanceMetric = "MILES" | "KILOMETERS" | "METERS" | "YARDS" | "FEET" | "INCHES";
function moveCharacter(distance: number, value: distanceMetric) {
  console.log(`You moved ${distance} ${value}`);
};
// moveCharacter(4, "dragon");

