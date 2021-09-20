// javascript
function camelize(str)
{
    let newstr="";
    let arr= str.split('-');
    for(let i in arr)
    {
        if(i==0)
        {
            
            newstr=newstr+arr[i].charAt(0).toLowerCase()+arr[i].slice(1);;
            
            
        }
        else{
            newstr=newstr+arr[i].charAt(0).toUpperCase()+arr[i].slice(1);;
            
        }
    }
    return newstr;
}
let res2=camelize('list-style-image')
console.log(res2);
document.getElementById('res2').innerHTML=res2;
res2=camelize('-webkit-transition')
console.log(res2);
document.getElementById('res2').innerHTML=res2;

