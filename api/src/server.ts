import express from 'express';
import routerUsers from './routes/user.route.ts';
const app = express();

app.use(express.json());

app.use('/users', routerUsers);


app.listen(process.env.PORT);


/* http.createServer((request , response)=> {
if(request.url !== '/users'){
  response.writeHead(200 ,{'content-type':'application/json'});
  response.end(JSON.stringify({message:'Recurso nao encontrado.'}));
  return;
  }

  response.writeHead(200 , {'content-type': 'application/json'});
  response.end(JSON.stringify(users));
}).listen(3000); */