const Suit = require('./models');
const Card = require('./models');
const Color = require('./models');

const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;
const layouts = require('express-ejs-layouts');

app.set('view engine', 'ejs'); // for our view (html like pages), we want to use 
app.use(layouts);

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) { 
    res.json({ message: 'Welcome to a deck of cards'});
});

app.get('/suits', function(req, res) {
    //get all artists
    Suit.findAll()
    .then(function(suitslist){
        console.log('FOUND ALL SUITS', suitslist);
        res.render('suits', { suits: suitslist});
    })
    .catch(function(err){
        console.log("ERROR", err);
        res.json({ message: 'Error occured, Try again'});
    })
})


Suit.create({
    suit: 'Clubs',
    color: 'black',
})
.then(function(newSuit) {
    console.log('NEW SUIT', newSuit);
    // Add album
    newSuit.createCard({
        number: '7',
        suit: 'Clubs',
        color: 'black',
    })
    .then(function(newCard) {
        console.log('NEW CARD', newCard.toJSON())
    })
})
.catch(function(error) {
    console.log(error);
});

Card.create({
    number:'7',
    suit: 'Spades',
    color: 'black',
})
.then(function(newCard) {
    console.log('NEW CARD', newCard);
    
})
.catch(function(error) {
    console.log(error);
});

app.listen(PORT, () => {
    console.log('Server is running on PORT', PORT);
})