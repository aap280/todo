var Todo= require('../controller/todo');
// API Server Endpoints
module.exports = function(router){
 router.post('/todo', Todo.create),
 router.get('/todo/:id', Todo.get),
 router.get('/todo', Todo.getAll),
 router.put('/todo/:id', Todo.update),
 router.delete('/todo/:id', Todo.delete)
}