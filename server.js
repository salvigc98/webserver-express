const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helper');

const port = process.env.PORT || 3000;

app.use( express.static( __dirname + '/public' ));

// Express HBS engine
hbs.registerPartials( __dirname + '/views/partials');
app.set('view engine', 'hbs');

// helpers

 
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Salvi'
    });

});

app.get('/about', (req, res) => {

    res.render('about');

});
 
app.listen(port, () => {
    console.log(`escucahndo en el puerto ${ port }`);
});