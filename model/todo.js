'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * @module todo
 * @description contain the details of todo information, conditions and actions.
 */

var TodoSchema = new Schema({
  name: { type: String }
});


TodoSchema.statics = {

     /**
      findOnetodo. return the one todo object.
      @param id: get id to find one todo by id.
      @param callback: callback of this form.
    */
    get: function(query, callback) {
        this.findOne(query, callback);
    },
    /**
      findalltodo. return the todo objects.
      @param callback: callback of this form.
    */
    getAll: function(query, callback) {
        this.find(query, callback);
    },
    
    /**
      updatetodo. return the create todo object result.
      @param updateData: updateData is use to update todo w.r.t id.
      @param callback: callback of this form.
    */
    updateById: function(id, updateData, callback) {
        this.update(id, {$set: updateData}, callback);
    },
    removeById: function(removeData, callback) {
         this.remove(removeData, callback);
    },
    create: function(data, callback) {
        var todo = new this(data);
        todo.save(callback);
    }
}

var todo = mongoose.model('todo', TodoSchema);

/** export schema */
module.exports = {
    Todo: todo
};