var solved=false;
function entering(val)
{
    let check=parseInt(val)
    console.log(check);
    if((solved==true) && (isNaN(check)===false))
    {
        console.log("entered the statement")
        clr();
        
    }
    solved=false;
    document.getElementById("display").value+=val
    
    
}
function calculate()
{
    try {
    let s=document.getElementById("display").value;
    let cal= parseFloat(eval(s));
    cal=cal.toFixed(4);
    document.getElementById("display").value = cal;
    solved=true;
    } 
    
    catch (error) {
        console.log(error);
        alert(error);
        clr();
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
    clr();
    document.getElementById("display").value+=new_s;
}