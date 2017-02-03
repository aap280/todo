'use strict';

var Todo = require('../model/todo').Todo;

/** create function to create Todo. */
exports.create = function (req, res) {
    Todo.create(req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** getTodo function to get Todo by id. */
exports.get = function (req, res) {
    Todo.get({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** getAllTodo function to get Todo by id. */
exports.getAll = function (req, res) {
    Todo.getAll({}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** updateTodo function to get Todo by id. */
exports.update = function (req, res) {
    Todo.updateById({_id:req.params.id}, req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
}

/** removeTodo function to get Todo by id. */
exports.delete = function (req, res) {
    Todo.removeById({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            console.log(err);
            return res.send(err); // 500 error
        }
    });
}