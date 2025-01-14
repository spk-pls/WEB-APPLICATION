let servicebox = document.getElementById("servicebox") 
let services = document.getElementById("services")
let nav = document.querySelector("nav")
servicebox.style.display = "none"
services.addEventListener("click",showbox)
function showbox(event){
    if(servicebox.style.display == "none"){
        servicebox.style.display = "block"
    }
    else{
        servicebox.style.display = "none"
    }
    event.stopPropagation()
}
document.body.addEventListener("click",hidebox)
function hidebox(event){
    if(!servicebox.contains(event.target)){
        servicebox.style.display = "none"

    }
}
