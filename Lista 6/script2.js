document.addEventListener("DOMContentLoaded", function () {

    const field = document.getElementById("text");
    let btn = document.getElementById("add");
    let lista = document.getElementById("list");

    btn.addEventListener('click', () => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(field.value));
        lista.appendChild(li)
    })
})