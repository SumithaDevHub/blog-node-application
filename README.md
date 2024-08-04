# Blog Application

A simple blog application built with Node.js, Express, and EJS. Users can create, view, and manage blog posts.


## Routes

- `GET /` - Home page, displays all posts.
- `GET /new` - Page to create a new post.
- `POST /new` - Submit a new post.
- `GET /edit` - Page to edit an existing post.

## Project Structure

```plaintext
.
├── views
│   ├── edit.ejs
│   ├── footer.ejs
│   ├── header.ejs
│   ├── index.ejs
│   └── new.ejs
├── public
│   ├── css
│   │   └── styles.css
│   └── js
│       └── scripts.js
├── index.js
├── package.json
└── README.md
