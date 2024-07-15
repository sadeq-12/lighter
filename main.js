let light = document.querySelector("#light")
let onButton= document.querySelector("#onbtn")
let offButton = document.querySelector("#offbtn")



onButton.addEventListener("click", function(){
    light.style.backgroundColor= "yellow"
    onButton.style.backgroundColor = "blue"
    offButton.style.backgroundColor = ""

})

offButton.addEventListener("click", function(){
    light.style.backgroundColor= "white"
    offButton.style.backgroundColor = "blue"
    onButton.style.backgroundColor = ""


})

