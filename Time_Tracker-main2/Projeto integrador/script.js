const startButton = document.getElementById('startTimerButton');
const resetButton = document.getElementById('resetTimerButton');
const timeInput = document.getElementById('timeInput');
const display = document.getElementById('timerDisplay');
let timerInterval;
let isTimerActive = false;

// Função para iniciar o cronômetro com o tempo digitado
function startTimer(event) {
    if (event.key && event.key !== 'Enter') return; // Verifica se a tecla pressionada é "Enter"

    const time = parseFloat(timeInput.value); // Obtém o tempo digitado como um número decimal

    if (!isNaN(time) && time > 0) {
        const duration = time * 60 * 60; // Converte o tempo para segundos
        let timer = duration, minutes, seconds;
        clearInterval(timerInterval); // Limpa qualquer intervalo de timer existente

        // Função de atualização do cronômetro
        function updateTimer() {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(timerInterval); // Interrompe o cronômetro quando o tempo acabar
            }
        }

        // Inicia o cronômetro
        updateTimer();
        timerInterval = setInterval(updateTimer, 1000);
        isTimerActive = true;
    }
}

// Função para zerar o cronômetro e redefinir o campo de tempo
function resetTimer() {
    clearInterval(timerInterval);
    display.textContent = '00:00';
    timeInput.value = '';
    isTimerActive = false;
}

// Adiciona ouvintes de eventos para os botões
startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
timeInput.addEventListener('keyup', startTimer); // Ouve o evento de pressionar tecla no campo de tempo

//função para salvar tarefa _________________________________________________________________________________________________________

const input = window.document.getElementById("input");
const ul = window.document.querySelector("ul");
const h3 = window.document.querySelector("h3");
const db_lista_li = JSON.parse(window.localStorage.getItem("lista"));

db_lista_li.forEach((item) => salvar(item));

function salvar(item) {
   var li = window.document.createElement("li"); //criar uma nova linha, um novo elemento
   var value = item ? item.texto : input.value;
   var value_li = window.document.createTextNode(value);

   if (input.value.trim() !== "" || item) {
      li.appendChild(value_li); //não adicionar caso seja somente espaço
      ul.appendChild(li);
   }

   if (!item) {
      salvar_lista(); //chamar a função
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
   salvar_lista();
});

window.document.getElementById("input").addEventListener("keypress", (e) => {
   if (e.key == "Enter") { //para usar o botão enter
      salvar();
   }
});


   window.localStorage.setItem("lista", JSON.stringify(lista));
