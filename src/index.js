const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const tasksRoutes = require('./routes/tasks.routes');
const middleware = require('./middleware/errors.middleware');

const app = express(); //initialize app
const port = process.env.PORT || 3000; //setup variable for the port
const loglevel = process.env.LOG_LEVEL || 'dev'; // define log level

//Middleware - logs server requests to console
app.use(logger(logLevel));

// Middleware - parses incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// *************************************
// ROUTE-HANDLING MIDDLEWARE FUNCTIONS
// *************************************

//Handle routes for tasks. Use this where any request that is made to task
app.use('/tasks', tasksRoutes); //http://localhost:3000/tasks
// app.use('/users', usersRoutes); //http://localhost:3000/users

// Handle 404 requests - use when a request is made that doesn't have a functionality associated with it.
app.use(middleware.error404);

//Handle 500 requests - applies mostly to live services
app.use(middleware.error500);

//listen on server  port
app.listen(port, () => {
    console.log('Running on port: ${port}...');
});