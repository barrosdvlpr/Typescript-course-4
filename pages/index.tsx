
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}

// class ComicBookCharacter {
//   alias: string;
//   health: number;
//   strength: number;
//   secretIdentity: string;

//   attackFunc(opponent, attackWith: number) {
//     opponent.health -= attackWith;
//     console.log(`${this.alias} attacked ${opponent.alias} who's health = ${opponent.health}`);
//   }
// }

interface Opponent {
  alias: string;
  health: number;
}
class ComicBookCharacter {
  // alias: string;
  // health: number;
  // strength: number;
  // private secretIdentity: string;

  private team: {
    name: string;
    membres: ComicBookCharacter[]
  }

  attackFunc(opponent: Opponent, attackWith: number) {
    opponent.health -= attackWith;
    console.log(`${this.alias} attacked ${opponent.alias} who's health = ${opponent.health}`);
  }
  getSecretIdentity() {console.log(`${this.alias}'s secret identity is ${this.secretIdentity}`);}

  // constructor(alias: string, health: number, strength: number, secretIdentity: string) {
  //   this.alias = alias;
  //   this.health = health;
  //   this.strength = strength;
  //   this.secretIdentity = secretIdentity;
  // }

  constructor(
    public alias: string, public health: number, public strength: number, public secretIdentity: string) {
  }
  static createAndAssignTeam(teamName: string, members: ComicBookCharacter[]) {
    let team = {
      name: teamName,
      members: members
    }
    members.forEach((member) => {
      member.team = team;
    })
  }
  getTeamname(){console.log`${this.alias} is on Team ${this.team.name}`}
}

// let storm = new ComicBookCharacter();
// storm.alias = "Storm";
// storm.health = 100;
// storm.strength = 100;
// storm.secretIdentity = "Ororo Munroe";

// let theBlob = new ComicBookCharacter();
// theBlob.alias = "The Blob";
// theBlob.health = 1000;
// theBlob.strength = 5000;
// theBlob.secretIdentity = "Fred J. Dukes";

let storm = new ComicBookCharacter("Storm", 100, 100, "Ororo Munroe");
let theBlob = new ComicBookCharacter("The Blob", 1000, 5000, "fred J. Dukes");

storm.attackFunc(theBlob, storm.strength);
// getSecretIdentity()
// let team = ComicBookCharacter.createAndAssignTeam("oddCouple", [storm, theBlob]);
// console.log(team) 

ComicBookCharacter.createAndAssignTeam("oddCouple", [storm, theBlob]);
theBlob.getTeamname()