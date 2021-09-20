function Mapping()
{
let raksha = { name: "Raksha", surname: "Sharma", age: 28 };
let srinivas = { name: "Srinivas", surname: "Iyengar", age: 30 };
let usha = { name: "Usha", surname: "Janardhana", age: 54 };
let users = [ raksha, srinivas, usha ];
let list= users.map(item=> {return [item.name,item.surname].join(" ")});
let newlist= list.map((item,index)=>{return {fullname:item,id:index+1}});
return newlist;
}
let usersMapped= Mapping();
console.log(usersMapped);
document.getElementById('res3').innerHTML='See the result in the console. The result is in the usersMapped variable';