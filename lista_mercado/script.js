const input = window.document.getElementById("input");
const ul = window.document.querySelector("ul");
function adicionar() {
  var li = window.document.createElement("li");
  var value = input.value;
  var value_li = window.document.createTextNode(value);

  if (input.value.trim() !== ""){
  li.appendChild(value_li);
  ul.appendChild(li);
  }

  input.value="";
  input.focus();
}

window.document.querySelector("ul").addEventListener("click", (e)=> {
    e.target.classList.toggle("checked");
});

window.document.getElementById("input").addEventListener("keypress", (e)=> {
 if (e.key == "Enter") {
    adicionar();
 }
 });
 
 window.document.addEventListener("contextmenu" , (e) => {
    e.preventDefault();
    if(e.target.tagName === "LI"){
    e.target.remove();
    }
    
 })