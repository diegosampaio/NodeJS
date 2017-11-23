var express = require('express');
var router = express.Router();
var model = require('./../model/tasks')();

/* GET home page. */
router.get('/', function(req, res, next) {

  // chama os dados do bd mongo
  model.find(null, function(err, tasks){
    // em caso de erro exibe no console
    if(err){
      throw err;
    }

    res.render('index', { title: 'Express NodeJS', tasks: tasks });
  });

});

// adiciona registro de tarefas
router.post('/add', function(req, res, next){

  var body = req.body;
  body.status = false;

  model.create(body, function(err, tasks){
    if(err){
      throw err;
    }

    res.redirect('/');

  });

});

// atualiza registro de status da tarefa
router.get('/turn/:id', function(req, res, next){

  var id = req.params.id;

  model.findById(id, function(err, tasks){
    if(err){
      throw err;
    }

    tasks.status = !tasks.status;

    tasks.save(function(){
      res.redirect('/');
    });
  });

});


module.exports = router;
