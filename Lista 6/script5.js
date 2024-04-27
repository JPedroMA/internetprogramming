document.addEventListener("DOMContentLoaded", function () {
    let empresa = document.getElementById("empresa");
    let nome = document.getElementById("nome").value;
    let img = document.getElementById("img").value;
    let func = document.getElementById("func").value;
    let btn = document.getElementById("saveBtn");

    btn.addEventListener("click", () => {
        empresa.value = empresa.value;
        console.log(empresa.value)
    })


})