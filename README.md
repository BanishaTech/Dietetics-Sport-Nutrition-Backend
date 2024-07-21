# Dietetics-Sport-Nutrition-Backend


# Nutrition and Dietetics Backend API

This is the backend API for the Nutrition and Dietetics web application. The backend is built using Node.js and Express, providing endpoints to serve dynamic content based on user queries.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Next Steps](#next-steps)

## Features
- Provides endpoints for fetching nutrition and dietetics posts.
- Serves detailed information about specific posts.
- Handles search queries to return relevant nutrition information.

## Technologies Used
- Node.js
- Express

## Installation
To get a local copy up and running, follow these simple steps:

1. Clone the repository
    ```bash
    git clone https://github.com/BanishaTech/Dietetics-Sport-Nutrition-Backend.git
    ```
2. Navigate to the project directory
    ```bash
    cd Dietetics-Sport-Nutrition-Backend
    ```
3. Install the dependencies
    ```bash
    npm install
    ```
4. Start the server. Notice the port is defined in the same file.
    ```bash
    node .\Sources\Main\app.js
    ```

## Usage
Once the server is running, you can access the following endpoints:

### Endpoints
- **GET `/dieteticsPosts`**
  - Retrieves a list of dietetics posts.
- **GET `/dieteticsPostsDetail?id=postnumber`**
  - Retrieves detailed information about a specific post.
  - Example: `/dieteticsPostsDetail?id=1`
- **GET `/search?question=whateverphrase`**
  - Searches for posts related to the query.
  - Example: `/search?question=summer time`

## Next Steps
- Clean up and organize the code into separate files for better maintainability.
- Implement additional endpoints as needed.
- Optimize the database queries for better performance.
