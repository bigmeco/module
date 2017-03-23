//function itogo()
//        {
//    czn1 = 297;
//   
//  
//    var zn1 = parseInt(document.getElementById("polotno").value) + czn1;
// 
//  
//    }
//function mamFunkt(){
//    
//    var itog1 = zn1;
//    document.getElementById("obhodtrub").innerHTML=czn1;
//    
//}

function myfyn(){
     var maj1 = parseInt(document.getElementById("perimetr").value);
     var gruskol1 = parseInt(document.getElementById("grus").value);
     var mesto1 = parseInt(document.getElementById("km").value);
     var taim = parseInt(document.getElementById("time").value);
     var dop1k = parseInt(document.getElementById("korob").value);
     var dop2p = parseInt(document.getElementById("polit").value);
   //  var dop3l = parseInt(document.getElementById("dop3l").value);
    var result=document.getElementsByName('checkme').item(0).checked;
    
    if (maj1===3){
        maj1=490;
    } else {
         maj1=590;
    }
     if (result==true){
                  
                    dop3l=100;
                } else {
                  
                    dop3l=0;
                }
    var km=0;
                if (mesto1<=200){
                    km=30;
                } if (mesto1>=201 && mesto1<=500){
                    km=27;
                }if (mesto1>=501){
                    km=25;
                }
    
    var n0 = dop3l * taim;
    var n1 = gruskol1*400;
    var n12 = n1*taim;
    var n3 = maj1*taim;
    var n4 = mesto1*km;
    var b2 = dop1k*40;
    var b3 = dop2p*250;
     var nq = n12+n3+n4+n0+b2+b3;
    document.getElementById("kolugl").innerHTML=nq;
    
}