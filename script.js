burger= document.querySelector(".burger");
navbar= document.querySelector(".nav-bar");

burger.addEventListener('click',()=>{
    if (navbar.style.display === "none") { 
        navbar.style.display = "flex";
        burger.style.position = "fixed"; 
        navbar.style.position = "fixed";
    } 
    else { 
        navbar.style.display = "none"; 
    }
})

