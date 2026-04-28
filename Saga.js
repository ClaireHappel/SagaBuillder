// Our Saga function- feel free to copy over to create your own!
function newSaga() {
   
  // our variables which we pull from to generate random sagas, they live in an OUTER scope
const names = ["Garrulus", "Pittuitus", "Marc", "Balthazarous", "Helen", "Carl",  "Barnaby" , "Gertrude" , "Zephyr" , "Mortimer" , "Hildegard" , "Bob"];
    const adjectives = ["Quarrelsome", "Super Duper Silent", "Ever Unblinking", "Perspicacious", "Extremely Noisy", "Mild Nuisance", "Chronically Late" , "Aggressively Polite" , "Mildly Sticky" , "Dangerously Fluffy" , "Existential Dread Inducing",  "Visibly Confused" , "Mildly Radioactive" , "Slightly Damp" , "Painfully Awkward"];
    const titles = ["Breaker", "Hoarder", "Whisperer", "Slayer", "Fearer", "Collector", "Defiler" , "Baker" , "Ignorer" , "Hugger" , "Weaver" , "Summoner",  "Tickler" , "Distractor" , "Borrower" , "Disappointer" , "Expert"]; 
    const objects = ["Pots", "Secrets", "Spoons", "Shadows", "Misdemeanors", "Left Socks" , "Uncomfortable Silences" , "Lost Keys" , "Expired Coupons" , "Forbidden Snacks", "Stale Bread" , "Broken Dreams" , "Shiny Rocks" , "The Last Slice of Pizza"];
    const adverbs = ["fondly", "with terror", "drunkenly", "nervously", "with great gusto", "with mild amusement", "in bored tones", "with reverence", "suspiciously" , "with extreme sarcasm" , "accidentally" , "via interpretive dance" , "with zero confidence", "with malicious intent" , "with no context" , "reluctantly"];
    const people = ["overly violent barbarians", "timid librarians", "shady merchants", "confused tax collectors", "their anxious mothers", "hyperactive children", "caffeinated wizards" , "clueless guards" , "disgruntled bards" , "polite zombies" , "majestic pigeons", "sentient potatoes" , "emotional skeletons" , "overzealous interns" , "grumpy dryads"];
    const actions = ["liberated the world", "saved the tavern", "stole the moon", "unclogged the toilets", "conflabulated the dohickey",  "stopgobbed the gobstopper", "oiled the wheels", "fireballed the vampire boyband", "accidentally started a cult" , "befriended a mimic" , "organized a bake sale" , "defused the awkward tension", "offended the king" , "summoned a helpful duck" , "lost the map" , "started the dance-off"];
    const terrors = ["the unwashed napkins of the Elderdark", "the Endless Monday", "the Great Dust Bunnies", "the One Unreachable Corner of the Living Room", "the dreaded Roomba of Doomba" , "the Bottomless Inbox of Fired Employees Past" , "the Mimic Who Hid Poorly", "the Dragon of Below-Average Patience", "the Shapeshifting Master of Darkness", "The Squirrel of Many Teeth",  "The Leacherous Leech", "The Pig of Perilous Pinkness", "the Hydra Whose Heads Keep Agreeing to Disagree", "the Unskippable Cutscene of Reality","the Phantom Ringing of a Phone with No Caller ID", "the Bottomless Pit of Unresolved Plot Hooks", "the Feared Lich Passive-Aggressiveness"];

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