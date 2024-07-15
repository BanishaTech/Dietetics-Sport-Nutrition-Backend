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

const posts = [
        new Post("Energía Fresca para el Verano",
         "Refresca tu dieta deportiva con frutas y verduras para un verano lleno de energía.",
          "https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
         1),
        new Post("planificación de dietas", "bajar de peso",2),
        new Post("deporte", "ir al gym",3),
        new Post("Como evitar comer comidas procesadas", "Sustituyendo por los alimentos saludables como verduras, frutas,  vitaminas", 4)
];

const postDetailList = [
    new PostDetail(
    1,
     "Energía Fresca para el Verano",
      "https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "Refresca tu dieta deportiva con vegetales, frutas y verduras. Estos alimentos te mantienen hidratado y mejoran tu rendimiento atlético bajo el sol. ¡Disfruta de un verano lleno de energía y vitalidad!",
     `<div class="container">
        <h1>Energía Fresca</h1>
        <p>Refresca tu dieta deportiva con frutas y verduras para un verano lleno de energía.</p>
        <img src="https://via.placeholder.com/800x400.png?text=Frutas+y+Verduras" alt="Frutas y Verduras">
        
        <h2>Ingredientes Recomendados</h2>
        <ul>
            <li>Tomates</li>
            <li>Pepinos</li>
            <li>Espinacas</li>
            <li>Fresas</li>
            <li>Naranjas</li>
            <li>Apio</li>
        </ul>

        <h2>Tabla de Verduras Recomendadas</h2>
        <table>
            <thead>
                <tr>
                    <th>Verdura</th>
                    <th>Beneficios</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tomates</td>
                    <td>Ricos en antioxidantes, ayudan a la recuperación muscular.</td>
                </tr>
                <tr>
                    <td>Pepinos</td>
                    <td>Hidratantes y refrescantes, ideales para el verano.</td>
                </tr>
                <tr>
                    <td>Espinacas</td>
                    <td>Altas en hierro y vitaminas, fortalecen la resistencia.</td>
                </tr>
                <tr>
                    <td>Zanahorias</td>
                    <td>Mejoran la visión y aportan beta-carotenos.</td>
                </tr>
                <tr>
                    <td>Apio</td>
                    <td>Bajo en calorías, ayuda en la hidratación.</td>
                </tr>
            </tbody>
        </table>
    </div>`
    ),
    new PostDetail(2, "Titulo", "https://imagen.com","description related", "<div>Hola Hola</div>"),
    new PostDetail(3, "Titulo", "https://imagen.com","description related", "<div>Hola Hola</div>"),
    new PostDetail(4, "Titulo", "https://imagen.com","description related", "<div>Hola Hola</div>"),
];
app.use(cors()) // This is for avoid cors error.
app.get('/dieteticsPosts', (request, response) => {
response.json(posts)
});

app.get('/dieteticsPostsDetail', (request, response) => {
    const idRequested = request.query.id
    
    if (idRequested == null) {
        return response.status(401).json();
    }

    console.log(idRequested);

    const postDetail = postDetailList.find(item => item.id == idRequested);
    console.log(postDetailList);
    response.json(postDetail);
});

app.listen(port, () => {
   
});
