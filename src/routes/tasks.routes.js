const controllers = require('../controllers/tasks.controller');
const express = require('express');

const taskRoutes = express.Router();
/** Express routes for Tasks
 * 
 * Restful endpoints make for easily adding to existing API features.
 */

 /** Routes for all tasks. Evaluates to '/tasks/'/.
  */
 taskRoutes.get('/', controllers.getAllTasks).post('/', controllers.createTask);

 /** 
  * Routes for a task by id. Evaluates to '/tasks/:taskId'
  */
 taskRoutes
    .get('/:taskId', controllers.getTask) // GET http://localhost:3000/tasks/1
    .put('/:taskId', controllers.updateTask) //
    .delete('/:taskId', controllers.deleteTask);

module.exports = tasksRoutes; //