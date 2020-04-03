const con = require('../db-config');
const queries = require('../queries/tasks.queries');

/**
 * CRUD - Create, Read, Update, Delete
 * GET - Read
 * POST - Create
 * PUT - Update
 * DELETE - Delete
 */

exports.getAllBooks = function(req, res) {
  con.query(queries.ALL_BOOKS, function(err, result, fields) {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
};

// http://localhost:3000/tasks/1
exports.getBook = function(req, res) {
  con.query(queries.SINGLE_BOOKS, [req.params.taskId], function(err, result) {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
};

// http://localhost:3000/tasks/1
/**
 * POST request -
 * {
 *  name: 'A task name'
 * }
 */
exports.createBook = function(req, res) {
  con.query(queries.INSERT_BOOK, [req.body.name], function(err, result) {
    if (err) {
      res.send(err);
    }
    console.log(result);
    res.json({ message: 'Number of records inserted: ' + result.affectedRows });
  });
};

// http://localhost:3000/tasks/1
/**
 * PUT request -
 * {
 *  name: 'A task name',
 *  state: 'completed'
 * }
 */
exports.updateBook = function(req, res) {
  con.query(
    queries.UPDATE_BOOK,
    [req.body.name, req.body.status, req.params.taskId],
    function(err, data) {
      if (err) {
        res.send(err);
      }
      res.json(data);
    }
  );
};

// http://localhost:3000/tasks/1
exports.deleteBook = function(req, res) {
  con.query(queries.DELETE_BOOK, [req.params.taskId], function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Deleted successfully.' });
  });
};