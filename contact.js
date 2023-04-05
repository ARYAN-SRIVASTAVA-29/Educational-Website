document.querySelector(".fa-bars").addEventListener("click", handleClick)

function handleClick(){

    let repNav = document.querySelector(".nav-links")
    if (repNav.style.opacity = "0"){
       
        repNav.style.opacity = "50";
    }
}
document.querySelector(".fa-xmark").addEventListener("click",close)
function close(){
    let repNav = document.querySelector(".nav-links")
    if(repNav.style.opacity = "50"){

        repNav.style.opacity = "0";
        repNav.style.transition = "0.1s";
}
}    