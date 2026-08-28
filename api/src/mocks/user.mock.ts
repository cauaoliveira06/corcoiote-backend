import type { User } from '../types/user.type.ts';

const users:User[] = [{
  id:1,
  name:'Caua Oliveira',
  email:'eucaua.oliveira06@gmail.com',
  password: crypto.randomUUID()
},
{
  id:2,
  name:'Rosi Alves',
  email:'rosi123@gmail.com',
  password:crypto.randomUUID()
} , 
{
  id:3,
  name:'Fagner Lincoln',
  email:'faglinco@gmail.com',
  password:crypto.randomUUID()

}];

export default users;


