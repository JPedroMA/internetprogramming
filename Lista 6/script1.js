document.addEventListener("DOMContentLoaded", function () {
    const li1 = document.getElementById("show1");
    console.log("teste")
    li1.addEventListener("click", () => {
        console.log("clicou1")
        let div = document.getElementById("div1");
        if (div.style.opacity == 0) div.style.opacity = 1;
        else div.style.opacity = 0;
    })  
})

document.addEventListener("DOMContentLoaded", function () {
    const li2 = document.getElementById("show2");
    console.log("teste")
    li2.addEventListener("click", () => {
        console.log("clicou2")
        let div2 = document.getElementById("div2");
        if (div2.style.opacity == 0) div2.style.opacity = 1;
        else div2.style.opacity = 0;
    })  
})

document.addEventListener("DOMContentLoaded", function () {
    const li3 = document.getElementById("show3");
    console.log("teste")
    li3.addEventListener("click", () => {
        console.log("clicou3")
        let div3 = document.getElementById("div3");
        if (div3.style.opacity == 0) div3.style.opacity = 1;
        else div3.style.opacity = 0;
    })  
})

document.addEventListener("DOMContentLoaded", function () {
    const li4 = document.getElementById("show4");
    console.log("teste")
    li4.addEventListener("click", () => {
        console.log("clicou4")
        let div4 = document.getElementById("div4");
        if (div4.style.opacity == 0) div4.style.opacity = 1;
        else div4.style.opacity = 0;
    })  
})