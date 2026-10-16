class Runner {
    constructor(name, speed, endurance, form, vitality, fatigue, willpower, sprite, id) {
        this.name = name; 
        this.speed = speed; 
        this.endurance = endurance; 
        this.form = form; // effects speed, endurance, and fatigue
        this.vitality = vitality; // max fatigue
        this.fatigue = fatigue; // current hp
        this.willpower = willpower; // max training before it becomes ineffective
        this.sprite = sprite;
        this.id = id;
    }
}

function createRunner(name, speed, endurance, form, vitality, fatigue, willpower, sprite) {
    const id = crypto.randomUUID();
    const runner = new Runner(name, speed, endurance, form, vitality, fatigue, willpower, sprite, id);
    return runner;
}

function displayRunner(id, arr, div) {
    const runner = arr.find(r => r.id === id);

    const name = document.createElement("p");
    name.classList.add("runner-name")
    const speed = document.createElement("div");
    const endurance = document.createElement("div");
    const form = document.createElement("div");
    const vitality = document.createElement("div");
    const fatigue = document.createElement("div");
    const willpower = document.createElement("div");
    const sprite = document.createElement("img");

    name.textContent = runner.name;
    speed.textContent = `Speed: ${runner.speed}`;
    endurance.textContent = `Endurance: ${runner.endurance}`;
    form.textContent = `Form: ${runner.form}`;
    vitality.textContent = `Vitality: ${runner.vitality}`;
    fatigue.textContent = `Fatigue: ${runner.fatigue}`;
    willpower.textContent = `Willpower: ${runner.willpower}`;
    sprite.src = runner.sprite;

    div.append(sprite, name, speed, endurance, form, vitality, fatigue, willpower);
    return id;
}

export {Runner, createRunner, displayRunner}