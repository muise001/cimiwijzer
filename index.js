var nummer = 0;
var next;

function start(){
  document.getElementsByClassName("verdwijn")[1].classList.add("none");
  document.getElementsByClassName("verdwijn")[2].classList.add("none");
  document.getElementsByClassName("v1")[0].classList.remove("none")
  document.getElementsByClassName('vraag')[nummer].classList.remove( "none" )
  document.getElementsByClassName("vraag")[nummer].classList.add("flex")
}

function Switching(){
  if (next == true) {
    document.getElementsByClassName("vraag")[nummer].classList.remove("flex")
    document.getElementsByClassName('vraag')[nummer].classList.add( "none" )
    nummer ++
    document.getElementsByClassName('vraag')[nummer].classList.remove( "none" )
    document.getElementsByClassName("vraag")[nummer].classList.add("flex")
  }
  else if (next == false){
    document.getElementsByClassName("vraag")[nummer].classList.remove("flex")
    document.getElementsByClassName('vraag')[nummer].classList.add( "none" )
    nummer --
    document.getElementsByClassName('vraag')[nummer].classList.remove( "none" )
    document.getElementsByClassName("vraag")[nummer].classList.add("flex")
  }
}

function resultaat(){
  var Inbreker = document.querySelectorAll("input.a:checked").length;
  var Witwassen = document.querySelectorAll("input.b:checked").length;
  var Mensenhandelaar = document.querySelectorAll("input.c:checked").length;
  var Cybercrimineel = document.querySelectorAll("input.d:checked").length;
  var Hennepkweker = document.querySelectorAll("input.e:checked").length;
  var Drugshandelaar = document.querySelectorAll("input.f:checked").length;
  var Ontvoerder = document.querySelectorAll("input.g:checked").length;
  var Afperser = document.querySelectorAll("input.h:checked").length
  var Oplichter = document.querySelectorAll("input.i:checked").length
  var Huurmoordenaar = document.querySelectorAll("input.j:checked").length
    document.querySelectorAll("li")[0].innerHTML ="Inbreker "+Inbreker;
    document.querySelectorAll("li")[1].innerHTML ="Afperser "+Afperser;
    document.querySelectorAll("li")[2].innerHTML ="Oplichter "+Oplichter;
    document.querySelectorAll("li")[3].innerHTML ="Ontvoerder "+Ontvoerder;
    document.querySelectorAll("li")[4].innerHTML ="Hennepkweker "+Hennepkweker;
    document.querySelectorAll("li")[5].innerHTML ="Cybercrimineel "+Cybercrimineel;
    document.querySelectorAll("li")[6].innerHTML ="Huurmoordenaar "+Huurmoordenaar;
    document.querySelectorAll("li")[7].innerHTML ="Drugshandelaar "+Drugshandelaar;
    document.querySelectorAll("li")[8].innerHTML ="Mensenhandelaar "+Mensenhandelaar;
    document.querySelectorAll("li")[9].innerHTML ="Witteboordencriminaliteit "+Witwassen;
    var beroepen = [Inbreker,Witwassen,Mensenhandelaar,Cybercrimineel,Hennepkweker,Drugshandelaar,Ontvoerder,Afperser,Oplichter,Huurmoordenaar]
    var hoogste = Math.max.apply(Math, beroepen);
}

document.getElementById("klaar").addEventListener("click", resultaat);
document.getElementById("start").addEventListener('click', start)
for (var i = 0; i < document.getElementsByClassName("volgende").length; i++) {
  document.getElementsByClassName("volgende")[i].addEventListener('click', function(){
    next = true
    Switching()})
}
for (var i = 0; i < document.getElementsByClassName("vorige").length; i++) {
  document.getElementsByClassName("vorige")[i].addEventListener('click', function(){
    next = false
    Switching()})
}
