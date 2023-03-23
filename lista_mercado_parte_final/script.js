const input = window.document.getElementById("input");
const ul = window.document.querySelector("ul");
const h3 = window.document.querySelector("h3");
const db_lista_li = JSON.parse(window.localStorage.getItem("lista"));

db_lista_li.forEach((item) => adicionar(item));

function adicionar(item) {
   var li = window.document.createElement("li"); //criar uma nova linha, um novo elemento
   var value = item ? item.texto : input.value;
   var value_li = window.document.createTextNode(value);

   if (input.value.trim() !== "" || item) {
      li.appendChild(value_li); //não adicionar caso seja somente espaço
      ul.appendChild(li);
   }

   if (!item) {
      adicionar_lista(); //chamar a função
   }

   if (item) {
      if (item.checked) {
         li.setAttribute("class", "checked");//arruma o bug de atualizar a página
      }
   }

   input.value = "";
   input.focus();
}

window.document.querySelector("ul").addEventListener("click", (e) => {
   e.target.classList.toggle("checked"); //para marcar em vermelho e riscar
   adicionar_lista();

});

window.document.getElementById("input").addEventListener("keypress", (e) => {
   if (e.key == "Enter") { //para usar o botão enter
      adicionar();
   }
});

window.document.addEventListener("contextmenu", (e) => {
   e.preventDefault();
   if (e.target.tagName === "LI") {
      e.target.remove();   //remove botão direito
      adicionar_lista();

   }
});

function adicionar_lista() {
   const lista_de_li = window.document.querySelectorAll("li");
   const lista = [];
   lista_de_li.forEach((item) => {
      lista.push({ texto: item.innerText, checked: item.className == "checked" });
   });


   window.localStorage.setItem("lista", JSON.stringify(lista));
}

var li = document.getElementsByTagName('li').length;
document.write(h3 + li);