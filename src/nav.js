// nav.js
// Navigation bar

const title = document.getElementById("nav-title");
const runners = document.getElementById("nav-runners");
const races = document.getElementById("nav-races");
const settings = document.getElementById("nav-settings");

title.addEventListener("click", () => {
    console.log("Title clicked");
});

runners.addEventListener("click", () => {
    console.log("Runners clicked");
});

races.addEventListener("click", () => {
    console.log("Races clicked");
});

settings.addEventListener("click", () => {
    console.log("Settings clicked");
});

export {title, runners, races, settings}