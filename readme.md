# Application Name: Blog Management API

## Description

This project is a RESTful API built using Node.js and Express.js to manage blog posts, products, and users. It includes middleware for request processing, data validation, and error handling. The application allows CRUD (Create, Read, Update, Delete) operations on three types of data: posts, products, and users.

## Features

- Retrieve, create, update, and delete posts, products, and users.
- Query filtering for posts and products.
- Middleware for common functionality, such as ID parsing and generating new IDs.
- Error handling for missing fields and invalid requests.

## Technologies Used

- Node.js
- Express.js

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```

## Endpoints

### Posts

**Base URL:** `/posts`

1. **Get all posts:**

   ```
   GET /posts
   ```

   Supports query parameters: `authorId`, `date`, `title`.

2. **Get a specific post by ID:**

   ```
   GET /posts/:id
   ```

3. **Create a new post:**

   ```
   POST /posts
   ```

   - Body fields: `title`, `content`, `authorId`, `date` (required).

4. **Update a post by ID:**

   ```
   PUT /posts/:id
   ```

   - Body fields: Any fields to update.

5. **Delete a post by ID:**
   ```
   DELETE /posts/:id
   ```

### Products

**Base URL:** `/products`

1. **Get all products:**

   ```
   GET /products
   ```

   Supports query parameters: `category`, `name`.

2. **Get a specific product by ID:**

   ```
   GET /products/:id
   ```

3. **Create a new product:**

   ```
   POST /products
   ```

   - Body fields: `name`, `price`, `category`, `stock` (required).

4. **Update a product by ID:**

   ```
   PUT /products/:id
   ```

   - Body fields: Any fields to update.

5. **Delete a product by ID:**
   ```
   DELETE /products/:id
   ```

### Users

**Base URL:** `/users`

1. **Get all users:**

   ```
   GET /users
   ```

2. **Get a specific user by ID:**

   ```
   GET /users/:id
   ```

3. **Create a new user:**

   ```
   POST /users
   ```

   - Body fields: `name`, `email`, `age`, `isActive` (required).

4. **Update a user by ID:**

   ```
   PUT /users/:id
   ```

   - Body fields: Any fields to update.

5. **Delete a user by ID:**
   ```
   DELETE /users/:id
   ```

## Middleware

1. **parsId:** Parses and validates the `id` parameter, and attaches the relevant object to the request.
2. **generateNewId:** Generates a new ID for POST requests.
3. **errorHandler:** Handles errors and sends appropriate responses.

## Example Data

### Posts

```json
{
  "id": 1,
  "title": "The Future of Technology",
  "content": "Exploring advancements in AI and robotics.",
  "authorId": 1,
  "date": "2025-01-01"
}
```

### Products

```json
{
  "id": 1,
  "name": "Laptop Pro",
  "price": 1200.99,
  "category": "Electronics",
  "stock": 15
}
```

### Users

```json
{
  "id": 1,
  "name": "Alice Johnson",
  "email": "alice.johnson@example.com",
  "age": 25,
  "isActive": true
}
```

## Error Handling

- **Missing fields:** Returns a 400 error with a message indicating the missing fields.
- **Not found:** Returns a 404 error if the specified ID does not exist.

## License

This project is licensed under the MIT License.
