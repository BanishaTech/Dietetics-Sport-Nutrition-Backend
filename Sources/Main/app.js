const cors = require('cors');
const express = require('express');
const app = express();
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
    new Post("Fresh Energy for Summer",
        "Refresh your sports diet with vegetables, fruits, and greens. These foods keep you hydrated and improve your athletic performance under the sun. Enjoy a summer full of energy and vitality!",
        "https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        1),
    new Post("Dietetics and Sports Nutrition",
        "Optimize your athletic performance with proper nutrition. Learn about essential nutrients and how to incorporate them into your daily diet to reach your goals.",
        "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        2),
    new Post("Sports and Wellness",
        "Discover how sports can improve your physical and mental well-being. Find the sport that best suits you and start transforming your life.",
        "https://thumbs.dreamstime.com/z/woman-doing-various-sport-exercise-set-training-gym-fitness-activity-woman-doing-various-sport-exercise-set-training-167141099.jpg",
        3),
    new Post("Emotional Coaching for Athletes",
        "Improve your athletic performance through emotional coaching. Learn to manage your emotions and maintain a positive mindset to achieve your goals.",
        "https://images.pexels.com/photos/3763879/pexels-photo-3763879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        4),
];

const postDetailList = [
    new PostDetail(
        1,
        "Fresh Energy for Summer",
        "https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "Refresh your sports diet with vegetables, fruits, and greens. These foods keep you hydrated and improve your athletic performance under the sun. Enjoy a summer full of energy and vitality!",
        `<div class="container">
            <h1>Fresh Energy</h1>
            <p>Refresh your sports diet with fruits and vegetables for a summer full of energy.</p>
            <img src="https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F049f79b0-ef5d-11ed-b02d-cefaa3091195.jpg?crop=1600%2C900%2C0%2C0&resize=1200" alt="Fruits and Vegetables">
            
            <h2>Recommended Ingredients</h2>
            <ul>
                <li>Tomatoes</li>
                <li>Cucumbers</li>
                <li>Spinach</li>
                <li>Strawberries</li>
                <li>Oranges</li>
                <li>Celery</li>
            </ul>

            <h2>Recommended Vegetables Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Vegetable</th>
                        <th>Benefits</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tomatoes</td>
                        <td>Rich in antioxidants, help muscle recovery.</td>
                    </tr>
                    <tr>
                        <td>Cucumbers</td>
                        <td>Hydrating and refreshing, perfect for summer.</td>
                    </tr>
                    <tr>
                        <td>Spinach</td>
                        <td>High in iron and vitamins, boosts endurance.</td>
                    </tr>
                    <tr>
                        <td>Carrots</td>
                        <td>Improve vision and provide beta-carotenes.</td>
                    </tr>
                    <tr>
                        <td>Celery</td>
                        <td>Low in calories, aids in hydration.</td>
                    </tr>
                </tbody>
            </table>
        </div>`
    ),
    new PostDetail(
        2,
        "Dietetics and Sports Nutrition",
        "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "Optimize your athletic performance with proper nutrition. Learn about essential nutrients and how to incorporate them into your daily diet to reach your goals.",
        `<div class="container">
            <h1>Dietetics and Sports Nutrition</h1>
            <p>Optimize your athletic performance with proper nutrition. Learn about essential nutrients and how to incorporate them into your daily diet to reach your goals.</p>
            <img src="https://www.sheilakealey.com/wp-content/uploads/2014/05/OverallNutrition-1024x694.jpg" alt="Sports Nutrition">
            
            <h2>Essential Nutrients</h2>
            <ul>
                <li>Proteins</li>
                <li>Carbohydrates</li>
                <li>Healthy Fats</li>
                <li>Vitamins and Minerals</li>
                <li>Hydration</li>
            </ul>

            <h2>Food Examples</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nutrient</th>
                        <th>Food</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Proteins</td>
                        <td>Chicken breast, tofu, legumes.</td>
                    </tr>
                    <tr>
                        <td>Carbohydrates</td>
                        <td>Brown rice, quinoa, oats.</td>
                    </tr>
                    <tr>
                        <td>Healthy Fats</td>
                        <td>Avocado, nuts, olive oil.</td>
                    </tr>
                    <tr>
                        <td>Vitamins and Minerals</td>
                        <td>Varied fruits and vegetables.</td>
                    </tr>
                    <tr>
                        <td>Hydration</td>
                        <td>Water, isotonic drinks.</td>
                    </tr>
                </tbody>
            </table>
        </div>`

    ),
    new PostDetail(
        3,
        "Sports and Wellness",
        "https://thumbs.dreamstime.com/z/woman-doing-various-sport-exercise-set-training-gym-fitness-activity-woman-doing-various-sport-exercise-set-training-167141099.jpg",
        "Discover how sports can improve your physical and mental well-being. Find the sport that best suits you and start transforming your life.",
        `<div class="container">
            <h1>Sports and Wellness</h1>
            <p>Discover how sports can improve your physical and mental well-being. Find the sport that best suits you and start transforming your life.</p>
            <img src="https://img.freepik.com/premium-vector/athletic-people-performing-sports-activity-training-exercising-sport-workout_605858-1092.jpg" alt="Sports and Wellness">
            
            <h2>Sports Activities</h2>
            <ul>
                <li>Running</li>
                <li>Swimming</li>
                <li>Yoga</li>
                <li>Strength Training</li>
                <li>Cycling</li>
            </ul>

            <h2>Benefits for Wellness</h2>
            <table>
                <thead>
                    <tr>
                        <th>Sport</th>
                        <th>Benefits</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Running</td>
                        <td>Improves cardiovascular health.</td>
                    </tr>
                    <tr>
                        <td>Swimming</td>
                        <td>Low-impact exercise, strengthens the entire body.</td>
                    </tr>
                    <tr>
                        <td>Yoga</td>
                        <td>Enhances flexibility and reduces stress.</td>
                    </tr>
                    <tr>
                        <td>Strength Training</td>
                        <td>Increases muscle mass and strengthens bones.</td>
                    </tr>
                    <tr>
                        <td>Cycling</td>
                        <td>Boosts cardiovascular system and improves endurance.</td>
                    </tr>
                </tbody>
            </table>
        </div>`
    ),
    new PostDetail(4,
        "Emotional Coaching for Athletes",
        "https://images.pexels.com/photos/3763879/pexels-photo-3763879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "Improve your athletic performance through emotional coaching. Learn to manage your emotions and maintain a positive mindset to achieve your goals.",
        `<div class="container">
            <h1>Emotional Coaching for Athletes</h1>
            <p>Improve your athletic performance through emotional coaching. Learn to manage your emotions and maintain a positive mindset to achieve your goals.</p>
            <img src="i&ved=0CA0QxiAoBWoXChMI0PWAgcuuhwMVAAAAAB0AAAAAEA8" alt="Emotional Coaching">
            
            <h2>Key Aspects of Emotional Coaching</h2>
            <ul>
                <li>Stress Management</li>
                <li>Motivation</li>
                <li>Self-Confidence</li>
                <li>Resilience</li>
                <li>Focus and Concentration</li>
            </ul>

            <h2>Benefits of Emotional Coaching</h2>
            <table>
                <thead>
                    <tr>
                        <th>Aspect</th>
                        <th>Benefits</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Stress Management</td>
                        <td>Improves performance under pressure.</td>
                    </tr>
                    <tr>
                        <td>Motivation</td>
                        <td>Encourages persistence and dedication.</td>
                    </tr>
                    <tr>
                        <td>Self-Confidence</td>
                        <td>Increases security and decision-making.</td>
                    </tr>
                    <tr>
                        <td>Resilience</td>
                        <td>Facilitates recovery from failures and challenges.</td>
                    </tr>
                    <tr>
                        <td>Focus and Concentration</td>
                        <td>Optimizes performance and efficiency in training.</td>
                    </tr>
                </tbody>
            </table>
        </div>`
    )
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

app.get('/search', (request, response) => {
    const questionRequested = request.query.question;

    if (questionRequested == null) {
        return response.status(400).json();
    }
    console.log(questionRequested);

    const filteredPosts = posts.filter(item => item.title.toLowerCase().includes(questionRequested.toLowerCase()));

    response.json(filteredPosts);
});


app.listen(port, () => {

});
