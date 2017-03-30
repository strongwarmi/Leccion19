window.addEventListener("load", function(){
var img = document.getElementsByClassName("animal");
var select = document.getElementById("select");
select.onchange = function(){
  if(select.value == "original"){
    for (var i = 0; i < img.length; i++) {
      img[i].classList.add("original");
      img[i].classList.remove("blanco-negro");
      img[i].classList.remove("invertir-colores");
      img[i].classList.remove("sepia");
    }
  }
  if(select.value == "sepia"){
    for (var j = 0; j < img.length; j++) {
      img[j].classList.add("sepia");
      img[j].classList.remove("blanco-negro");
      img[j].classList.remove("invertir-colores");
      img[j].classList.remove("original");
    }
  }
  if(select.value == "blanco-negro"){
    for (var k = 0; k < img.length; k++) {
      img[k].classList.add("blanco-negro");
      img[k].classList.remove("original");
      img[k].classList.remove("invertir-colores");
      img[k].classList.remove("sepia");
    }
  }
  if(select.value == "invertir-colores"){
    for (var l = 0; l < img.length; l++) {
      img[l].classList.add("invertir-colores");
      img[l].classList.remove("original");
      img[l].classList.remove("blanco-negro");
      img[l].classList.remove("sepia");
    }
  }
}
});
