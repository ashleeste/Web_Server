const controllers = require('../controllers/tasks.controller');
const express = require('express');

const tasksRoutes = express.Router();
/**
 * Express routes for Tasks.
 *
 * RESTful endpoints make for easily adding to existing API features.
 */

/**
 * Routes for all tasks. Evaluates to `/tasks/`.
 */
tasksRoutes.get('/', controllers.getAllBooks).post('/', controllers.createBook);

/**
 * Routes for a task by id. Evaluates to `/tasks/:taskId`.
 */
tasksRoutes
  .get('/:taskId', controllers.getBook) // GET http://locahost:3000/tasks/1
  .put('/:taskId', controllers.updateBook)
  .delete('/:taskId', controllers.deleteBook);

module.exports = tasksRoutes;