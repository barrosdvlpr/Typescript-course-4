
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}

let userName: string = "Silver Surfer";
// userName = ["Silver", "Surfer"];

// let userId = (a: string, b:number): string => a + b;
// let userId = (a: string, b:number) => a + b;
// let userId = (a: string, b:number): number => a + b;
let userId = (a: string, b:number) => a + b;

// let target: HTMLElement = document.getElementById("target");
// target.onclick = (event: MouseEvent) => event.button;

let target: HTMLElement = document.getElementById("target");
target.onclick = (event: HTMLButtonElement) => event.button;  