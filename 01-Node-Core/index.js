const http = require('http');


const port = 3000;

const server = http.createServer( (req, res) => {
  

  console.log(req.method);
  console.log(req.url);

  if(req.method == 'GET'){
    if(req.url == '/usuarios'){
      res.statusCode = 200;
      res.end('<h1> Hola Server GET </h1>')  
    }
    
  }

  if (req.method == 'POST') {
    if (req.url == '/usuarios') {
      res.statusCode = 200;
      res.end('<h1> Hola Server POST </h1>')
    }

  }
  
  
  // res.setHeader('Content-type', 'application/html');
  res.end('<h1> 404 not found </h1>')

});


server.listen( port, ()=> {
  console.log('Servidor Ok');
});
