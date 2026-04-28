// Our Saga function- feel free to copy over to create your own!
function newSaga() {
   
  // our variables which we pull from to generate random sagas, they live in an OUTER scope
    const names = ["Garrulus", "Pittuitus", "Marc", "Balthazarous", "Helen", "Carl"];
    const adjectives = ["Quarrelsome", "Super Duper Silent", "Ever Unblinking", "Perspicacious", "Extremely Noisy", "Mild Nuisance"];
    const titles = ["Breaker", "Hoarder", "Whisperer", "Slayer", "Fearer", "Collector"]; 
    const objects = ["Pots", "Secrets", "Spoons", "Shadows", "Misdemeanors"];
    const adverbs = ["fondly", "with terror", "drunkenly", "nervously", "with great gusto", "with mild amusement", "in bored tones", "with reverence"];
    const people = ["overly violent barbarians", "timid librarians", "shady merchants"];
    const actions = ["liberated the world", "saved the tavern", "stole the moon"];
    const terrors = ["the unwashed napkins of the Elderdark", "the Endless Monday", "the Great Dust Bunnies"];

    // our lovely randomization function, also in OUTER scope
    const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

    // an INNER function that gives us a closure, remembering all that was defined above
    return function() {
        // our lovely saga, to return 
        const saga = `${random(names)} the ${random(adjectives)}, ${random(titles)} of ${random(objects)}. Yes, they were a hero spoken of ${random(adverbs)} by ${random(people)}. They ${random(actions)} from ${random(terrors)}!`;
        // we locate the element sagaOutput and then make it's innerText our saga result
        document.getElementById('sagaOutput').innerText = saga;
    };
}
                                                                  // here we're calling newSaga(), the listener will run the outer function immediately.
// attach the closure to the button                               // hence why we only need newSaga() as oppose to previously when we called using newSaga()()
document.getElementById('generateBtn').addEventListener('click', newSaga());;