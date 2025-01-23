# Blog API Project

This is a simple API for managing blog posts, allowing for CRUD (Create, Read, Update, Delete) operations and filtering posts through query parameters.

## Features

- **GET /posts**: Retrieve all posts.
- **GET /posts/:id**: Retrieve a single post by ID.
- **GET /posts?authorId=...&date=...&title=...**: Filter posts by author ID, date, or title using query parameters.
- **POST /posts**: Create a new post.
- **PUT /posts/:id**: Update an existing post by ID.
- **DELETE /posts/:id**: Delete a post by ID.

## Technologies Used

- Node.js
- Express.js
- JavaScript

## Project Structure

```
├── utils
│   ├── data.js          # Mock database containing blog posts
│   ├── middleware.js    # Middleware functions for request handling
├── routes
│   ├── posts.js         # Routes for blog post API endpoints
├── package.json         # Project dependencies and scripts
├── package-lock.json    # Lock file for dependencies
└── README.md            # Project documentation
```

## API Endpoints

### GET All Posts

- **Endpoint**: `/posts`
- **Description**: Retrieve a list of all blog posts.
- **Query Parameters**:
  - `authorId`: Filter posts by the author's ID.
  - `date`: Filter posts by date.
  - `title`: Filter posts by title (case-insensitive).
- **Example**: `/posts?authorId=1&title=hello`

### GET Post by ID

- **Endpoint**: `/posts/:id`
- **Description**: Retrieve a specific post by its ID.

### POST Create a New Post

- **Endpoint**: `/posts`
- **Description**: Create a new blog post.
- **Request Body**:
  ```json
  {
    "title": "Post Title",
    "content": "Post Content",
    "authorId": 1,
    "date": "2025-01-23"
  }
  ```

### PUT Update a Post

- **Endpoint**: `/posts/:id`
- **Description**: Update an existing post by ID.
- **Request Body**: Provide the fields to update (e.g., `title`, `content`, etc.).

### DELETE Remove a Post

- **Endpoint**: `/posts/:id`
- **Description**: Delete a specific post by its ID.

## Middleware

- **parsId**: Parses the `id` from the request parameters and validates it.
- **generateNewId**: Generates a new ID for creating a post.
- **errorHandler**: Centralized error-handling middleware for handling errors in API requests.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd blog-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```
2. Access the API at `http://localhost:3000` (or your specified port).

## Example Data Structure

Example of a post in `data.js`:

```json
{
  "id": 1,
  "title": "First Post",
  "content": "This is the content of the first post.",
  "authorId": 1,
  "date": "2025-01-23"
}
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue if you encounter any bugs or have suggestions for improvement.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Author

[Your Name]

---

Feel free to customize this README file further to fit your project!
