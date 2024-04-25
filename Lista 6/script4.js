let number = Math.floor(Math.random() * 100);
let tries = 0;
document.addEventListener("DOMContentLoaded", function () {
    let btn = document.getElementById("btn");
    let lista = document.getElementById("lista");
    btn.addEventListener("click", () => {
        if (tries < 5) {

            let input = document.getElementById("guess").value;
            if (input == number) {
                let li = document.createElement('li');
                li.appendChild(document.createTextNode("O valor digitado está correto"));
                lista.appendChild(li)
                tries = 5;
            } else if (input > number) {
                let li = document.createElement('li');
                li.appendChild(document.createTextNode("O valor digitado é maior"));
                lista.appendChild(li)
                tries++;
            } else if (input < number) {
                let li = document.createElement('li');
                li.appendChild(document.createTextNode("O valor digitado é menor"));
                lista.appendChild(li)
                tries++;
            }

        } else if (tries < 10){
            let li = document.createElement('li');
            li.appendChild(document.createTextNode("Tentativas esgotadas"));
            lista.appendChild(li)
            tries = 10;
        }
    })
})