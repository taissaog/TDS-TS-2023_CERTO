const musicas = window.document.querySelector("musicas");
const total = 0;
const ponto = 0;
const btn1 = window.document.getElementById("btn1");
const btn2 = window.document.getElementById("btn2");
const btn3 = window.document.getElementById("btn3");
const btn4 = window.document.getElementById("btn4");
const btn5 = window.document.getElementById("btn5");
const btn6 = window.document.getElementById("btn6");
const btn7 = window.document.getElementById("btn7");
const btn8 = window.document.getElementById("btn8");
const btn9 = window.document.getElementById("btn9");


window.document.querySelector("musicas").addEventListener("click", (e) => {
    btn1.target.classList.toggle("altera_cor"); //para marcar em verde e riscar
});
window.document.querySelector("musicas").addEventListener("click", (e) => {
    btn4.target.classList.toggle("altera_cor"); //para marcar em verde e riscar
});
window.document.querySelector("musicas").addEventListener("click", (e) => {
    btn8.target.classList.toggle("altera_cor"); //para marcar em verde e riscar
});

function responder(qest, resp) {

    if (qest == 1) {
        if (resp == 3) {
            btn3.setAttribute("class", "altera_cor");
            // alert("corrreto");
            total = 1;
        }
        if (resp != 3) {
            btn1.setAttribute("class", "altera_cor2");
        }
    }
    if (qest == 2) {
        if (resp == 1) {
            btn4.setAttribute("class", "altera_cor");
            // alert("corrreto");
            total = ponto + 1;

        }
        if (resp != 1) {
            btn5.setAttribute("class", "altera_cor2");
        }
    }
    if (qest == 3) {
        if (resp == 2) {
            btn8.setAttribute("class", "altera_cor");
            total = ponto + 1;
            // alert("corrreto");
        }
        if (resp != 3) {
           setAttribute("class", "altera_cor2");
        }
    }
}

window.localStorage.setItem("total", JSON.stringify(total));

document.getElementsByTagName('ponto').length;
document.write("Pontos finais:" + total);

