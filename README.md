# Install
`npm install`

# How to Start
Since the app is still in dev mode you will need to start the React server and Express server seperately.

## Start React
`npm start`

## Start Express
`npm run start-express`

Navigate your browser to http://localhost:3000/ (I will switch the port to 8080 once I have Express serving a compiled react app)

# Routes

There are currently two routes
- /products which will provide a list of products
- /products/:id (ids are currently case sensitive)

Note the root route "/" will redirect to products

# Database
The database just reads and writes a JSON file.

# TO DO
- Add product form
- Add product service