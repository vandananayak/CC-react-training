function Destru()
{
    const user = { 
        person:
         { employee:
          { firstname: "Rahul" },
         likes: ["Cycling", "Hiking", "Driving"] 
         }
     }
     
     const {person:{employee:{firstname:name}},person:{likes}}=user;
     return [name,likes[1]];
}

var result5= Destru();
console.log(result5);
document.getElementById('res4').innerHTML=result5;
