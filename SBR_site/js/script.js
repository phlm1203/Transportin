// Cria uma data alvo (data final da contagem)
// "March 19, 2026 04:00:00" é a data e hora que o contador vai zerar
// .getTime() transforma essa data em milissegundos
// (quantidade de milissegundos desde 1 de janeiro de 1970)
const targetDate = new Date("March 19, 2026 04:00:00").getTime();

// setInterval executa uma função repetidamente
// A função vai rodar a cada 1 segundo
setInterval(() => {

  // Pega a data e hora atual em milissegundos
  const now = new Date().getTime();

  // Calcula a diferença entre a data final e a data atual
  // Isso nos dá quanto tempo ainda falta
  const distance = targetDate - now;

  // Calcula quantos dias faltam
  // 1000 ms = 1 segundo
  // 60 segundos = 1 minuto
  // 60 minutos = 1 hora
  // 24 horas = 1 dia
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  // Calcula as horas restantes
  // O símbolo % pega o "resto" da divisão
  // Aqui pegamos o resto depois de tirar os dias
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // Calcula os minutos restantes
  // Pegamos o resto depois de tirar dias e horas
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // Calcula os segundos restantes
  // Pegamos o resto depois de tirar dias, horas e minutos
  const seconds = Math.floor((distance % (1000 * 60)) / 1000); 

  // Atualiza o elemento HTML com id="days"
  // Coloca o número de dias dentro dele
  document.getElementById("days").innerText = days;

  // Atualiza o elemento com id="hours"
  document.getElementById("hours").innerText = hours;

  // Atualiza o elemento com id="minutes"
  document.getElementById("minutes").innerText = minutes;

  // Atualiza o elemento com id="seconds"
  document.getElementById("seconds").innerText = seconds; 

// Fecha a função do setInterval
}, 1000); // 1000 milissegundos = 1 segundo