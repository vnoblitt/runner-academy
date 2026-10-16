const content = document.getElementById("content");
const raceButton = document.getElementById("race-button");

const progressBar = document.createElement("div");
progressBar.classList.add("progress-bar", "empty");

const progressBar25 = document.createElement("div");
progressBar25.classList.add("progress-segment", "empty");
const progressBar50 = document.createElement("div");
progressBar50.classList.add("progress-segment", "empty");
const progressBar75 = document.createElement("div");
progressBar75.classList.add("progress-segment", "empty");
const progressBar100 = document.createElement("div");
progressBar100.classList.add("progress-segment", "empty");

const progressBarArr = [ progressBar25, progressBar50, progressBar75, progressBar100];
let progressBarIndex = 0;

const updates = document.getElementById("updates");

raceButton.addEventListener("click", () => {
    if (progressBar.classList.contains("full")) {
        clearProgress();
    } 
    startRace();
    
})

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function startRace() {
    raceButton.disabled = true;

    const startMessage = document.createElement("p");
    startMessage.textContent = "The race has started!";
    updates.append(startMessage);

    for(progressBarIndex; progressBarIndex < 4; progressBarIndex++) {
        const timeoutId = setTimeout(updateProgress, 2000);
        await delay(2000);
    }
    const finishMessage = document.createElement("p");
    finishMessage.textContent = "The race has finished, X wins!";
    updates.append(finishMessage);
    progressBarIndex = 0;
    progressBar.classList.remove("empty");
    progressBar.classList.add("full");
    raceButton.disabled = false;
}

function updateProgress() {
    const segment = progressBarArr[progressBarIndex];

    segment.classList.remove("empty");
    segment.classList.add("full");

    const updateMessage = document.createElement("p");
    updateMessage.textContent = "X is in the lead!";
    updates.append(updateMessage);
}

function clearProgress() {
    for(progressBarIndex; progressBarIndex < 4; progressBarIndex++) {
        progressBarArr[progressBarIndex].classList.add("empty");
        progressBarArr[progressBarIndex].classList.remove("full");
        console.log(progressBarIndex)
    }
    progressBarIndex = 0;
    progressBar.classList.remove("full");
    progressBar.classList.add("empty");
    updates.innerHTML = "";
}

progressBar.append(progressBar25, progressBar50, progressBar75, progressBar100);
content.append(progressBar);

export { progressBar }