function mudaCorCustom(){
    var parag = document.getElementsByTagName("p");
    var div = document.getElementsByTagName("div");

    for(i=0;i<parag.length;i++){
        parag[i].style.color = "white";
        parag[i].style.backgroundColor = "black";
        parag[i].style.fontFamily = "monospace";
    }
    for(i=0;i<div.length;i++){
        div[i].style.color = "white";
        div[i].style.backgroundColor = "black";
        div[i].style.fontFamily = "monospace";
    }

}
function mudaCorNormal(){
    //will return 2 arrays with the elements of this tags names.
    var parag = document.getElementsByTagName("p");
    var div = document.getElementsByTagName("div");

    for(i=0;i<parag.length;i++){
        parag[i].style.color = "black";
        parag[i].style.backgroundColor = "#F2F2F2";
        parag[i].style.fontFamily = "arial";
    }
    for(i=0;i<div.length;i++){
        div[i].style.color = "black";
        div[i].style.backgroundColor = "#F2F2F2";
        div[i].style.fontFamily = "arial";
    }

    document.getElementById("conteudo").style.backgroundColor = "#00001e";
    document.getElementById("descricao").style.backgroundColor = "#ccc8c4";
    var child = document.getElementById("descricao").children;
    for(i=0;i<child.length;i++){
        child[i].style.backgroundColor = "#ccc8c4"
    }
}
