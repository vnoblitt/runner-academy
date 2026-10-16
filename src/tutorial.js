import { Runner, createRunner, displayRunner } from "./Runner.js";
import sprite1 from "./assets/Sprite-0001.png";
import sprite2 from "./assets/Sprite-0002.png";
import sprite3 from "./assets/Sprite-0003.png";

const content = document.getElementById("content");
let runnersArr = []

const runnerX = createRunner("Mark", 30, 10, 40, 15, 100, 25, sprite1);
const runnerY = createRunner("Amy", 20, 20, 30, 30, 100, 20, sprite2);
const runnerZ = createRunner("Zeke", 10, 10, 10, 10, 100, 100, sprite3);

runnersArr.push(runnerX);
runnersArr.push(runnerY);
runnersArr.push(runnerZ);

function displayRunners() {
    for (let runner of runnersArr) {
        const div =  document.createElement("div");
        div.id = displayRunner(runner.id, runnersArr, div);
        div.classList.add("runner");
        content.append(div);
    }
}

export { runnersArr }