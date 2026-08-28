import express from 'express';
import users from './mocks/user.mock.ts';
const app = express();

app.get('/users',(_request , response)=> {
  response.status(200).json(users);
});

app.listen(3000);


/* http.createServer((request , response)=> {
if(request.url !== '/users'){
  response.writeHead(200 ,{'content-type':'application/json'});
  response.end(JSON.stringify({message:'Recurso nao encontrado.'}));
  return;
  }

  response.writeHead(200 , {'content-type': 'application/json'});
  response.end(JSON.stringify(users));
}).listen(3000); */