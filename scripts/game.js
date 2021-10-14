const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const characterImg = new Image();
const backgroundImg = new Image();
let tecla = 0;
let ultTecla = 0;
let pontos = 0;
let newTecla = [];

const character = {
  x: 15,
  y: 1,
  width: 20,
  height: 38,
  directX: 0,
  directY: 0,
};

const enemy = {
  x: -(Math.random() * canvas.width),
  y: 0,
  width: 22,
  height: 40,
};

const enemy1 = {
  x: 0,
  y: -(Math.random() * canvas.height),
  width: 22,
  height: 40,
};

const winner = {
  x: canvas.height - 40,
  y: canvas.width - 22,
  width: 22,
  height: 40,
};

const leftRect = { x: 0, y: 0, width: 15, height: canvas.width };
const rightRect = {
  x: canvas.width - 16,
  y: 0,
  width: 16,
  height: canvas.width,
};

// quadrados que estao no meio do mapa
// retangulos de 3 quadrados
const rect3 = { x: 45, y: 45, width: 33, height: 135 };
const rect31 = { x: 295, y: 228, width: 34, height: 135 };
const rect32 = { x: 171, y: 228, width: 34, height: 136 };
const rect33 = { x: 232, y: 136, width: 33, height: 136 };
const rect34 = { x: 233, y: 44, width: 95, height: 44 };
const rect35 = { x: 359, y: 136, width: 125, height: 44 };
const rect36 = { x: 358, y: 228, width: 95, height: 44 };
const rect37 = { x: 46, y: 412, width: 95, height: 43 };
const rect38 = { x: 170, y: 412, width: 95, height: 43 };

// retangulos de 7 quadrados
const rect7 = { x: 108, y: 45, width: 33, height: 319 };
const rect71 = { x: 420, y: 136, width: 33, height: 319 };

// retangulos de 2 quadrados
const rect2 = { x: 233, y: 0, width: 33, height: 88 };
const rect21 = { x: 295, y: 0, width: 33, height: 88 };
const rect22 = { x: 295, y: 412, width: 33, height: 88 };
const rect23 = { x: 358, y: 412, width: 33, height: 88 };
const rect24 = { x: 109, y: 412, width: 33, height: 88 };
const rect25 = { x: 0, y: 136, width: 78, height: 44 };

// retangulos de 5 quadrados
const rect5 = { x: 120, y: 136, width: 145, height: 44 };
const rect51 = { x: 120, y: 228, width: 145, height: 44 };

// 1 quadrado
const rect1 = { x: 46, y: 228, width: 32, height: 44 };
const rect11 = { x: 46, y: 320, width: 32, height: 44 };
const rect12 = { x: 233, y: 320, width: 32, height: 44 };
const rect13 = { x: 233, y: 320, width: 32, height: 44 };
const rect14 = { x: 358, y: 320, width: 32, height: 44 };
const rect15 = { x: 358, y: 44, width: 32, height: 44 };
const rect16 = { x: 420, y: 44, width: 32, height: 44 };
const rect17 = { x: 170, y: 44, width: 32, height: 44 };
const rect18 = { x: 296, y: 136, width: 32, height: 44 };

// Fica esperando o evento da tecla ser pressionada para salvar na variavel tecla
document.addEventListener("keydown", (e) => {
  tecla = e.keyCode;
});
document.addEventListener("keyup", function (evento) {
  tecla = 0;
});

function collisionRectBackground() {
  // cor dos quadrados
  ctx.fillStyle = "white";

  // retangulos das bordas laterais
  ctx.fillRect(leftRect.x, leftRect.y, leftRect.width, leftRect.height);
  ctx.fillRect(rightRect.x, leftRect.y, leftRect.width, leftRect.height);

  // quadrados que estao no meio do mapa
  // retangulos de 3 quadrados
  ctx.fillRect(rect3.x, rect3.y, rect3.width, rect3.height);
  ctx.fillRect(rect31.x, rect31.y, rect31.width, rect31.height);
  ctx.fillRect(rect32.x, rect32.y, rect32.width, rect32.height);
  ctx.fillRect(rect33.x, rect33.y, rect33.width, rect33.height);
  ctx.fillRect(rect34.x, rect34.y, rect34.width, rect34.height);
  ctx.fillRect(rect35.x, rect35.y, rect35.width, rect35.height);
  ctx.fillRect(rect36.x, rect36.y, rect36.width, rect36.height);
  ctx.fillRect(rect37.x, rect37.y, rect37.width, rect37.height);
  ctx.fillRect(rect38.x, rect38.y, rect38.width, rect38.height);

  // retangulos de 7 quadrados
  ctx.fillRect(rect7.x, rect7.y, rect7.width, rect7.height);
  ctx.fillRect(rect71.x, rect71.y, rect71.width, rect71.height);

  // retangulos de 2 quadrados
  ctx.fillRect(rect2.x, rect2.y, rect2.width, rect2.height);
  ctx.fillRect(rect21.x, rect21.y, rect21.width, rect21.height);
  ctx.fillRect(rect22.x, rect22.y, rect22.width, rect22.height);
  ctx.fillRect(rect23.x, rect23.y, rect23.width, rect23.height);
  ctx.fillRect(rect24.x, rect24.y, rect24.width, rect24.height);
  ctx.fillRect(rect25.x, rect25.y, rect25.width, rect25.height);

  // retangulos de 5 quadrados
  ctx.fillRect(rect5.x, rect5.y, rect5.width, rect5.height);
  ctx.fillRect(rect51.x, rect51.y, rect51.width, rect51.height);

  // 1 quadrado
  ctx.fillRect(rect1.x, rect1.y, rect1.width, rect1.height);
  ctx.fillRect(rect11.x, rect11.y, rect11.width, rect11.height);
  ctx.fillRect(rect13.x, rect13.y, rect13.width, rect13.height);
  ctx.fillRect(rect14.x, rect14.y, rect14.width, rect14.height);
  ctx.fillRect(rect15.x, rect15.y, rect15.width, rect15.height);
  ctx.fillRect(rect16.x, rect16.y, rect16.width, rect16.height);
  ctx.fillRect(rect17.x, rect17.y, rect17.width, rect17.height);
  ctx.fillRect(rect18.x, rect18.y, rect18.width, rect18.height);
}

function movePlayer() {
  // 87 -> w e 38 -> seta pra cima
  if (tecla === 87 || tecla === 38) {
    character.y -= 1;
  }

  // 65 -> a e 37 -> seta pra esquerda
  if (tecla === 65 || tecla === 37) {
    character.x -= 1;
  }

  // 83 -> s e 40 -> seta pra baixo
  if (tecla === 83 || tecla === 40) {
    character.y += 1;
  }

  // 68 -> d e 39 -> seta pra direita
  if (tecla === 68 || tecla === 39) {
    character.x += 1;
  }

  if (character.x <= 15) {
    character.x = 25;
  }
  if (character.x + character.width > canvas.width) {
    character.x = canvas.width - character.width;
  }
  if (character.y < 1) {
    character.y = 1;
  }
  if (character.y + character.height > canvas.height) {
    character.y = canvas.height - character.height;
  }

  if (
    character.x + character.width < winner.x ||
    character.y + character.height < winner.y
  ) {
    //document.getElementById('texto').style.display = block;
    //document.getElementById("restart").style.display = block;
  }
}
function colisao() {
  if (
    character.x < rect3.x + rect3.width &&
    character.x + character.width > rect3.x &&
    character.y < rect3.y + rect3.height &&
    character.y + character.height > rect3.y
  ) {
    character.x = 15;
    character.y = 1
  }

  if (
    character.x < rect31.x + rect31.width &&
    character.x + character.width > rect31.x &&
    character.y < rect31.y + rect31.height &&
    character.y + character.height > rect31.y
  ) {
    character.x = 15;
    character.y = 1
  }

  if (
    character.x < rect32.x + rect32.width &&
    character.x + character.width > rect32.x &&
    character.y < rect32.y + rect32.height &&
    character.y + character.height > rect32.y
  ) {
    character.x = 15;
    character.y = 1
  }

  if (
    character.x < rect33.x + rect33.width &&
    character.x + character.width > rect33.x &&
    character.y < rect33.y + rect33.height &&
    character.y + character.height > rect33.y
  ) {
    character.x = 15;
    character.y = 1
  }

  if (
    character.x < rect34.x + rect34.width &&
    character.x + character.width > rect34.x &&
    character.y < rect34.y + rect34.height &&
    character.y + character.height > rect34.y
  ) {
    character.x = 15;
    character.y = 1
  }

  if (
    character.x < rect35.x + rect35.width &&
    character.x + character.width > rect35.x &&
    character.y < rect35.y + rect35.height &&
    character.y + character.height > rect35.y
  ) {
    character.x = 15;
    character.y = 1
  }

  if (
    character.x < rect36.x + rect36.width &&
    character.x + character.width > rect36.x &&
    character.y < rect36.y + rect36.height &&
    character.y + character.height > rect36.y
  ) {
    character.x = 15;
    character.y = 1
  }

  if (
    character.x < rect37.x + rect37.width &&
    character.x + character.width > rect37.x &&
    character.y < rect37.y + rect37.height &&
    character.y + character.height > rect37.y
  ) {
    character.x = 15;
    character.y = 1
  }

  if (
    character.x < rect38.x + rect38.width &&
    character.x + character.width > rect38.x &&
    character.y < rect38.y + rect38.height &&
    character.y + character.height > rect38.y
  ) {
    character.x = 15;
    character.y = 1
  }

  if (
    character.x < rect7.x + rect7.width &&
    character.x + character.width > rect7.x &&
    character.y < rect7.y + rect7.height &&
    character.y + character.height > rect7.y
  ) {
    character.x = 15;
    character.y = 1
  }

  if (
    character.x < rect71.x + rect71.width &&
    character.x + character.width > rect71.x &&
    character.y < rect71.y + rect71.height &&
    character.y + character.height > rect71.y
  ) {
    character.x = 15;
    character.y = 1
  }

  if (
    character.x < rect2.x + rect2.width &&
    character.x + character.width > rect2.x &&
    character.y < rect2.y + rect2.height &&
    character.y + character.height > rect2.y
  ) {
    character.x = 15;
    character.y = 1
  }

  if (
    character.x < rect21.x + rect21.width &&
    character.x + character.width > rect21.x &&
    character.y < rect21.y + rect21.height &&
    character.y + character.height > rect21.y
  ) {
    character.x = 15;
    character.y = 1
  }

  if (
    character.x < rect22.x + rect22.width &&
    character.x + character.width > rect22.x &&
    character.y < rect22.y + rect22.height &&
    character.y + character.height > rect22.y
  ) {
    character.x = 15;
    character.y = 1
  }

  if (
    character.x < rect23.x + rect23.width &&
    character.x + character.width > rect23.x &&
    character.y < rect23.y + rect23.height &&
    character.y + character.height > rect23.y
  ) {
    character.x = 15;
    character.y = 1
  }

  if (
    character.x < rect24.x + rect24.width &&
    character.x + character.width > rect24.x &&
    character.y < rect24.y + rect24.height &&
    character.y + character.height > rect24.y
  ) {
    character.x = 15;
    character.y = 1
  }

  if (
    character.x < rect1.x + rect1.width &&
    character.x + character.width > rect1.x &&
    character.y < rect1.y + rect1.height &&
    character.y + character.height > rect1.y
  ) {
    character.x = 15;
    character.y = 1
  }

  if (
    character.x < rect1.x + rect1.width &&
    character.x + character.width > rect1.x &&
    character.y < rect1.y + rect1.height &&
    character.y + character.height > rect1.y
  ) {
    character.x = 15;
    character.y = 1
  }

  if (
    character.x < rect11.x + rect11.width &&
    character.x + character.width > rect11.x &&
    character.y < rect11.y + rect11.height &&
    character.y + character.height > rect11.y
  ) {
    character.x = 15;
    character.y = 1
  }

  if (
    character.x < rect12.x + rect12.width &&
    character.x + character.width > rect12.x &&
    character.y < rect12.y + rect12.height &&
    character.y + character.height > rect12.y
  ) {
    character.x = 15;
    character.y = 1
  }

  if (
    character.x < rect13.x + rect13.width &&
    character.x + character.width > rect13.x &&
    character.y < rect13.y + rect13.height &&
    character.y + character.height > rect13.y
  ) {
    character.x = 15;
    character.y = 1
  }

  if (
    character.x < rect14.x + rect14.width &&
    character.x + character.width > rect14.x &&
    character.y < rect14.y + rect14.height &&
    character.y + character.height > rect14.y
  ) {
    character.x = 15;
    character.y = 1
  }

  if (
    character.x < rect15.x + rect15.width &&
    character.x + character.width > rect16.x &&
    character.y < rect16.y + rect16.height &&
    character.y + character.height > rect16.y
  ) {
    character.x = 15;
    character.y = 1
  }

  if (
    character.x < rect17.x + rect17.width &&
    character.x + character.width > rect17.x &&
    character.y < rect17.y + rect17.height &&
    character.y + character.height > rect17.y
  ) {
    character.x = 15;
    character.y = 1
  }

  if (
    character.x < rect18.x + rect18.width &&
    character.x + character.width > rect18.x &&
    character.y < rect18.y + rect18.height &&
    character.y + character.height > rect18.y
  ) {
    character.x = 15;
    character.y = 1
  }
  if (character.x < rect25.x + rect25.width &&
    character.x + character.width > rect25.x &&
    character.y < rect25.y + rect25.height &&
    character.y + character.height > rect25.y)
    {character.x = 15
    character.y = 1 }

  if (character.x < rect5.x + rect5.width &&
    character.x + character.width > rect5.x &&
    character.y < rect5.y + rect5.height &&
    character.y + character.height > rect5.y)
    {character.x = 15
      character.y = 1}  
}

function desenha() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  characterImg.src = "./images/character.jpeg";
  backgroundImg.src = "./images/background.jpeg";

  movePlayer();
  colisao();

  collisionRectBackground();
  ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);

  ctx.drawImage(
    characterImg,
    character.x,
    character.y,
    character.width,
    character.height
  );

  ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
  ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);

  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.fillRect(winner.x, winner.y, winner.width, winner.height);

  window.requestAnimationFrame(desenha);
}

function main() {
  desenha();
}

main();
