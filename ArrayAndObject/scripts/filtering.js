function filtering()
{
    const list=[1,33,99,50,100,150,60,99,1000,999,0,-1,10];
    const val=list.filter(value=> value>=150);
    return val;
}

var val=filtering();
console.log(val);
document.getElementById('res5').innerHTML=val;
