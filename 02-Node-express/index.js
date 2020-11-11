
//modulo terceros
const express = require('express');
const bodyParser = require('body-parser');
require('./config/config');
//modulo local
const xxx = require('./middleware/myMiddleware');



const app = express();

const data = [
  {
    "userId": 123,
    "usuario": "ventas",
    "password": "123456"
  }, {
    "userId": 124,
    "usuario": "logistica",
    "password": "123456"
  }
];

////////////// MIDDLEWARE 

// app.use((req, res, next) => {
//   console.log('Hola soy un middleware');
//   next();
// });

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//////////////  METODOS

app.get('/usuarios', (req, res)=> {
  res.json(data)
});

app.get('/usuarios/:userId', (req, res) => {

  console.log(req.params.userId);

  let item;
  item = data.filter( items => {
    return items.userId == req.params.userId
  });
  
  res.json(item)
});



app.post('/usuarios/registrar', [xxx] , (req, res)=>{
  
  let body = req.body;

  res.status(200).json(
   {
      result: "OK",
      comment: "Usuario Registrado",
      data: body
   }
  );
});

app.put( (req, res) => {
  res.status(404)
});


app.listen(process.env.PORT, ()=>{
  console.log('Servidor OK');
  console.log(process.env.PORT);
  
  
});
