function mudaCorCustom(){
    var r = document.querySelector(":root");
    r.style.setProperty("--hBackColor","aquamarine");
    r.style.setProperty("--fBackColor","aquamarine");
    r.style.setProperty("--mBackColor","aquamarine");
    r.style.setProperty("--bBackColor","aquamarine");
    r.style.setProperty("--lColor","white");
    r.style.fontFamily = "monospace";
}
function mudaCorNormal(){
    var r = document.querySelector(":root");
    r.style.setProperty("--hBackColor","#f4f0f0");
    r.style.setProperty("--fBackColor","#f4f0f0");
    r.style.setProperty("--mBackColor","#white");
    r.style.setProperty("--bBackColor","#white");
    r.style.setProperty("--lColor","black");
    r.style.fontFamily = "arial";
}