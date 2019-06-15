function range1()
{ 
    var DL = localStorage.getItem("score");
    document.getElementById("font1").innerHTML = DL;
    
    
    if(DL<1.5){
        document.getElementById("font2").innerHTML = "No Depression";
    }
    else if((DL>=1.5)&(DL<=9.7)){
        document.getElementById("font2").innerHTML = "Normal";
    }
    else if((DL>=10.7)&(DL<=16.5)){
        document.getElementById("font2").innerHTML = "Mild";
    }
    else if((DL>=16.6)&(DL<=22.7)){
        document.getElementById("font2").innerHTML = "Moderate : Consult a Doctor as a precaution."
    }
    else if((DL>=22.8)){
        document.getElementById("font2").innerHTML = "Severe : Make an emergency appointment with Doctor. "
    }
    
}
window.onload = range1;
