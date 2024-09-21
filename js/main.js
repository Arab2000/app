// app 1
var x =0 ;

function increment() {
document.getElementById("demo").innerHTML=x;
    x++;
}


function decrement() {
    document.getElementById("demo").innerHTML =x;
    x--;
}
// app 2
function convert() {
    var y = document.getElementById("pound").value;
       var result=document.getElementById("result");
    if(isNaN(y)){
    result.innerHTML="Enter Number Please"
    return false;

   }
   else if(y<0){
    result.innerHTML="Enter Postive Number "
    return false;

   }
   else if (y==0) {
result.innerHTML="Enter Number Rather Than Zero"
return false;

   }
   else{

      
        result.innerHTML =y*50 +" Egyptian Pounds";
        return false;
    }
   
}