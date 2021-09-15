function entering(val)
{
    document.getElementById("display").value+=val
}
function calculate()
{
    try {
    let s=document.getElementById("display").value;
    let cal= parseFloat(eval(s));
    cal=cal.toFixed(4);
    document.getElementById("display").value = cal;
    } 
    
    catch (error) {
        console.log(error);
        document.getElementById("display").value ="";
    }
    
}
function clr()
{
    document.getElementById("display").value = ""
}
function del()
{
    let s=document.getElementById("display").value;
    let new_s=s.slice(0,-1);
    document.getElementById("display").value= ""
    document.getElementById("display").value+=new_s;
}