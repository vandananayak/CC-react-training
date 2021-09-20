function unique(arr) {
    var set= new Set(arr);
   return (Array.from(set.values())
)

   }
   
   let arr = ["green", "green", "red", "red",
     "yellow", "pink", "pink", "yellow"
   ];
   
var NoDup=unique(arr);
console.log(NoDup);

document.getElementById('res1').innerHTML=NoDup;
