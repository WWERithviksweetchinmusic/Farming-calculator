function calculate()
{
var L=document.getElementById("length").value;    
var a=L * L;    
var p=4*L;
document.getElementById("area").innerHTML=a;
document.getElementById("perimeter").innerHTML=p;    
}