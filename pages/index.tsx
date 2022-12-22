
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}

interface SuperHero {
  powers: string[];
  savesTheDay: () => void;
}
let dazzler: SuperHero = {
  powers: ["transduces sonic vibrations into light"],
  savesTheDay(){console.log(`Dazzer ${this.powers} to save the day!`)}
}

interface BadGuy {
  badDeeds: string[];
  getRandomBadDeed: () => string;
  commitBadDeed: () => void;
}
let badGuy: BadGuy = {
  badDeeds: ["meh 1", "meh 2", "meh 3"],
  getRandomBadDeed(){ return this.badDeeds[Math.floor(Math.random() * this.badDeeds.length)]},
  commitBadDeed(){ console.log(`BadGuy ${this.getRandomBadDeed()}`)}
}

function saveDayOrBadDeed(something: SuperHero | BadGuy) {
  if ((something as SuperHero).powers) {
    (something as SuperHero).savesTheDay()
  } else {
    (something as BadGuy).commitBadDeed()
  }
}

saveDayOrBadDeed(dazzler);
saveDayOrBadDeed(badGuy)