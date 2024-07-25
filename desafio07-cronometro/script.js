// Declarando as variaveis que não vão mudar seu valor e que serão usadas para namipulação de eventos com o DOM (MAPEANDO CODIGO)
const minutesEl = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')
const milisecondsEl = document.querySelector('#miliseconds') 
const start = document.querySelector('#startbtn')
const pause = document.querySelector('#pausebtn')
const resume = document.querySelector('#resumebtn')
const reset = document.querySelector('#resetbtn')
 
// Aqui são as variaveis que sofreram alterações quando clicado no botão
let interval;
let minutes = 0
let seconds = 0
let miliseconds = 0
let ispaused = false;

// Adicionando o ouvinte de eventos nos botões para funcionar quando clicado e criar as funções
startbtn.addEventListener('click', startTimer)
pausebtn.addEventListener('click', pauseTimer)
resumebtn.addEventListener('click', resumepause)
resetbtn.addEventListener('click', resetTime)

// funcão de time, com o setInterval para definir a cada intervelo de tempo os números mudaram
function startTimer() {
  interval = setInterval(() => {
    if (!ispaused) {
      miliseconds += 10

      if (miliseconds === 1000) {
        seconds++;
        miliseconds = 0;
      }

      if (seconds === 60) {
        minutes++
        seconds = 0;
      }

      // Uso do textcontent nas variaveis para mudar o texto na tela com o horario atualizado e adicionando a função para formatar o zero no final
      minutesEl.textContent = formatTime(minutes)
      secondsEl.textContent = formatTime(seconds)
      milisecondsEl.textContent = formatMilliseconds(miliseconds)

    }
  }, 10);

  //Alterando o style dos botões para mostrar o pausar e o continuar 
  startbtn.style.display = 'none';
  pausebtn.style.display = 'block'
}

//Função para a funcionalidade de pause do botão funcionar, e ao clicar  mostrar o continuar
function pauseTimer() {
    ispaused = true
    pausebtn.style.display = 'none'
    resumebtn.style.display = 'block'
}

//Função para a funcionalidade de continuar do botão funcionar, e ao clicar mostrar o pause (BASICAMENTE UMA È A INVERSA DA OUTRA)
function resumepause() {
  ispaused = false
  pausebtn.style.display = 'block'
  resumebtn.style.display = 'none'
}

//Função para a funcionalidade de restaurar do botão funcionar, ao clicar deve zerar o cronômetro
function resetTime() {
  clearInterval(interval)
  minutes = 0            // ClearInterval para parar o setInterval
  seconds = 0           // Voltando o valor das variaveis(LET) para 0, como inicio
  miliseconds = 0

  minutesEl.textContent = '00'  
  secondsEl.textContent = '00'  //Voltando com os valores das variaveis (CONST) para como no inicio e sem a função de formatação
  milisecondsEl.textContent = '000'

  //Volatndo os estados dos iniciais dos botões, sem click. Ficando visivel apenas o INICIAR e RESTAURAR
  startbtn.style.display = 'block'
  pausebtn.style.display = 'none' 
  resumebtn.style.display = 'none'
}

//Função auxiliar (operador ternario) para formatar os minutos e segundos.(SE O TIME FOR MENOR QUE 10 SERÀ ACRESCENTADO UM ZERO NA FRENTE SENÃO O VALOR DO TIME MESMO)
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//Função auliar (operador ternario) para formatar os milisegundos. (SE O TIME FOR MENOR QUE 100 SERÀ ACRESCENTADO OS ZEROS QUE FALTA PARA OS MILISEGUNDOS, NA FRENTE SENÃO O VALOR DO TIME MESMO)
function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3,"0") : time;
}

