// requisitamos o módulo HTTP do Node
var http = require('http');

// executamos o método para executar o servidor
var server = http.createServer(function(request, response){

    response.writeHead(200, {'Content-type': 'text/html' });

    // verificamos a URL
    if(request.url === '/'){
        response.write('<h1>Página Inicial</h1>');
    }else if(request.url === '/sobre'){
        response.write('<h1>Página Sobre</h1>');
    }else{
        response.write('<h1>Página não encontrada</h1>');
    }

    response.end();
});

// inciamos o servidor criado
server.listen(3000, function(){
    console.log('Servidor Rodando na Porta 3000');
});