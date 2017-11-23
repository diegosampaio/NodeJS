var mogoose = require('mongoose');
var db;

module.exports = function(){
    if(!db){
        db = mogoose.connect('mongodb://localhost/tutoriais_node');
    }

    return db;
}