const express = require('express');
const app = express();

const hbs = require('hbs');

const port = process.env.PORT || 3000;

require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
 
/* app.get('/', (req, res) => {
  // res.send('Hello World')
  let salida = {
    nombre: 'Sergio',
    edad: 26,
    url: req.url,
  }
  res.send(salida);
}); */

/* // Helpers --> Funcion que se dispara cuando el template lo requiera
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, index) => {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
}); */

app.get('/', (req, res) => {
  res.render('home', {
      nombre: 'SERGIO CRUZ',
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});
 
app.listen(port, () => {
    console.log(`Escuchando peticiones por el puerto ${port}`);
});