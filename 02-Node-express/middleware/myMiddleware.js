
const myMiddleware = ( req, res, next)=>{
  console.log(' hola middleware modulo');
  next();
  
};

module.exports = myMiddleware;
