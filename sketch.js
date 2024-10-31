let campoIdade;
let campoHistoria;
let campoJoosOnline;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de jogos");
  createSpan("Sua idade:");
  campoIdade = createInput("livre");
  campoHistoria = createCheckbox("Gosta de historia?");
  campoJogosOnline = createCheckbox("Gosta de jogos online?");
}

function draw() {
  background("#51095E");
  let idade = campoIdade.value();
  let gostaDeHistoria = campoHistoria.checked();
  let gostaDeJogosOnline = campoJogosOnline.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeHistoria, gostaDeJogosOnline);

  fill(color(76, 800, 115));
  textAlign(CENTER, CENTER);
  textSize(38);https://github.com/joaogabreilsoares?tab=repositories
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeHistoria, gostaDeJogosOnline) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Gta 5";
    } else {
      if (idade >= 12) {
        if(gostaDeHistoria || gostaDeJogosOnline) {
          return "Fortinite";          
        } else{
         return "Fifa";
        }
      } else {
        if (gostaDeHistoria) {
          return "Detroid";
        } else {
          return "Minecraft";
        }
      }
    }
  } else {
    if (gostaDeHistoria) {
      return "God of War";
    } else {
      return "Detroid";
    }
  }
}



