const express = require('express');
const app = express ();
const port = 1500;

app.get('/dieteticsPosts', (request, response) => {

const posts = 
[
    {"title": "cinco tips para este verano", "description": "vamos a ir de viaje", "image": "https://imagen.com"},
    {"title": "planificación de dietas", "description": "bajar de peso", "image": "https://imagen.com"},
    {"tille": "deporte", "description": "ir al gym", "image": "https://imagen.com"}
]


response.json(posts)



});

app.listen(port,() => {

});
