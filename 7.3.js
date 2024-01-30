
const express = require("express");
const app = express();


app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log("listening on port 3000");
})

app.get("/", (req, res) => {
    res.render('index', { result: 'No die rolled yet!' });
});


app.get("/about", (req, res) => {
    res.render('about', { title: 'about'});
})

app.get('/rolld6', (req, res) => {
    res.render('dieroll', { result: 'Click "Roll the Die" to roll the die!' });
});

app.get('/roll', (req, res) => {
    
    const result = Math.floor(Math.random() * 6) + 1;
    
    res.render('dieroll', { result: `You rolled a ${result}!` });
});

function pickRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const nouns = [
    "ninja",
    "ocean",
    "painting",
    "pilot",
    "pirate",
    "warrior",
    "running"
];

app.get('/randomSentence', (req, res) => {

  
    
    const adjectives = [
        "captivating",
        "castaway",
        "dead",
        "enchanting",
        "ephemeral",
        "ethereal",
        "euro",
        "evil",
        "grizzly",
        "haunted",
        "heartbroken"
    ];

    const verbs = [
        "run",
        "jump",
        "sing", 
        "eat", 
        "sleep", 
        "dance", 
        "write", 
        "read", 
        "swim", 
        "talk"];

    noun1 = pickRandom(nouns);
    noun2 = pickRandom(nouns);
    adjective1 = pickRandom(adjectives);
    adjective2 = pickRandom(adjectives);
    verb = pickRandom(verbs);

    res.render('randomsentence', { noun1, noun2, adjective1, adjective2, verb })
 });

app.use((req, res) => {
    res.status(404).render('404');
})
