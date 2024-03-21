//closing-offer pop up
var closebtn=document.getElementById("closebtn")
var offer=document.getElementById("offer")

closebtn.addEventListener("click",function(){
    offer.style.display="none"
})

//menu-icon
var menuicon=document.getElementById("menuicon")
var sidenav=document.getElementById("sidenav")
var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.left="0"
})
closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
})