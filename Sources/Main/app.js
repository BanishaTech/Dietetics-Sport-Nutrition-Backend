const cors = require('cors');
const express = require('express');
const app = express ();
const port = 1500;

class Post {
    constructor(title, description, image, id) {
        this.title = title;
        this.description = description;
        this.image = image || "https://picsum.photos/200"; // Imagen por defecto si no se proporciona
        this.id = id;
    }
}

class PostDetail {
    constructor(id, title, image, description, content) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.description = description;
        this.content = content; // HTML 
    }
}


app.use(cors()) // This is for avoid cors error.
app.get('/dieteticsPosts', (request, response) => {
    // Array de posts usando la clase Post
    const posts = [
        new Post("La dieta de la hamburguesa", "Con mayonesa mucho mejor :)", "https://plus.unsplash.com/premium_photo-1664391779617-c81011293ef6?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
        new Post("planificación de dietas", "bajar de peso"),
        new Post("deporte", "ir al gym"),
        new Post("Como evitar comer comidas procesadas", "Sustituyendo por los alimentos saludables como verduras, frutas,  vitaminas")
    ];


response.json(posts)
});

app.get('/dieteticsPostsDetail', (request, response) => {
    const id = request.query.id
    
    if (id == null) {
        return response.status(401).json();
    }

    const postDetail = new PostDetail(1, "Titulo", "https://imagen.com","description related", "<div>Hola Hola</div>")

    response.json(postDetail);
});

app.listen(port, () => {
   
});
