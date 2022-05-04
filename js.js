"use strict"

let canvas = document.getElementById('canvas');//игравое поле
let botom = document.getElementById('Botom');// кнопка запуска игры
let scoreboard = document.getElementById('scoreboard');//Табло для вывода цифр
let ctx = canvas.getContext('2d');
let divCanvas = document.getElementById('divCanvas');
let basementDiv = document.getElementById('basement');

//вибрация 
function vibro() {
  if (navigator.vibrate) { // есть поддержка Vibration API?
    window.navigator.vibrate(500);
  }
}
//аудио звук 

let audio = 0;
let clickAudio = new Audio("t.mp3");
let clickAudio1 = new Audio("bomb.mp3");
let clickAudio2 = new Audio("Applause.mp3");
let zvuk = clickAudio.volume;
let zvuk1 = clickAudio1.volume;
let zvuk2 = clickAudio2.volume;
function suond() {
  let a = document.getElementById('suond')
  if (audio === 0) {
    clickAudio.volume = 0;
    clickAudio1.volume = 0;
    clickAudio2.volume = 0;
    a.value = 'Звук OFF'

    return audio = 1;
  }

  if (audio === 1) {
    clickAudio.volume = 1;
    clickAudio1.volume = 1;
    clickAudio2.volume = 1;
    a.value = 'Звук ON'

    return audio = 0;
  }
}
//функции для звука
function clickSoundInit() {
  clickAudio.play(); // запускаем звук
  clickAudio.pause(); // и сразу останавливаем
}
function clickSound() {
  clickAudio.currentTime = 0; // в секундах
  clickAudio.play();
  zvuk
}
function clickSoundInit1() {
  clickAudio1.play(); // запускаем звук
  clickAudio1.pause(); // и сразу останавливаем
}
function clickSound1() {
  clickAudio1.currentTime = 0; // в секундах
  clickAudio1.play();
  zvuk1
}
function clickSoundInit2() {
  clickAudio2.play(); // запускаем звук
  clickAudio2.pause(); // и сразу останавливаем
}
function clickSound2() {
  clickAudio2.currentTime = 9; // в секундах
  clickAudio2.play();
  zvuk2
}


//опрделяем пк это или нет 
const devices = new RegExp('Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini', "i");
if (!devices.test(navigator.userAgent)) {
  basementDiv.style.display = 'none'
  brickWidth = 81;
  brickHeight = 40;
} else {
  brickWidth = 87;
  brickHeight = 25;
  console.log('экран норм')
  if (innerWidth <= 500) {
    brickHeight = 80;
    console.log('экран маленький')
  }
}
//координаты кирпичей
var brickWidth;
var brickHeight;
let brickPadding = 8;
let brickOffsetTop = 30;
let brickOffsetLeft = 20;
let brickRowCount = 3;
let brickColumnCount = Math.floor(innerWidth / 91);


//красный кирпич
let brickRedM = [];
for (let a = 0; a < brickColumnCount; a++) {
  brickRedM[a] = { x: brickOffsetLeft + (brickWidth + brickPadding) * a, y: brickOffsetTop, on: 1 };

}


// удар с кирпичем 
function brickRedDel() {
  for (let c = 0; c < brickColumnCount; c++) {
    var b = brickRedM[c];

    //когда мяч касается снизу
    if ((ballH.posX >= b.x) && (ballH.posX <= b.x + brickWidth) && (ballH.posY - ballH.radius <= b.y + brickHeight) && (ballH.posY - ballH.radius >= b.y) && (ballH.speedY < 0)) {
      clickSound()
      ballH.speedY = -ballH.speedY;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      gameScoreH.score = gameScoreH.score + 12;
    }
    //когда мячь касаеться сверху
    if ((ballH.posX >= b.x) && (ballH.posX <= b.x + brickWidth) && (ballH.posY + ballH.radius >= b.y) && (ballH.posY + ballH.radius <= b.y + brickHeight) && (ballH.speedY > 0)) {
      clickSound()
      ballH.speedY = -ballH.speedY;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      gameScoreH.score = gameScoreH.score + 12;
    }
    //если мяч бьет в тарец с левого боку с верху
    if ((ballH.speedY < 0) && (ballH.posX + ballH.radius >= b.x) && (ballH.posX + ballH.radius <= b.x + brickWidth) && (ballH.posY >= b.y) && (ballH.posY <= b.y + brickHeight)) {
      ballH.speedX = -ballH.speedX;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      clickSound()
      gameScoreH.score = gameScoreH.score + 12;
    }
    //если мяч бьет в тарец с левого боку с низу
    if ((ballH.speedY > 0) && (ballH.posX + ballH.radius >= b.x) && (ballH.posX + ballH.radius <= b.x + brickWidth) && (ballH.posY >= b.y) && (ballH.posY <= b.y + brickHeight)) {
      ballH.speedX = -ballH.speedX;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      clickSound()
      gameScoreH.score = gameScoreH.score + 12;
    }
    //если мяч бьет в тарец с правого боку с верху
    if ((ballH.speedY < 0) && (ballH.posX - ballH.radius <= b.x + brickWidth) && (ballH.posX - ballH.radius >= b.x) && (ballH.posY >= b.y) && (ballH.posY <= b.y + brickHeight)) {
      ballH.speedX = -ballH.speedX;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      clickSound()
      gameScoreH.score = gameScoreH.score + 12;
    }
    //если мяч бьет в тарец с правого боку с низу
    if ((ballH.speedY > 0) && (ballH.posX - ballH.radius <= b.x + brickWidth) && (ballH.posX - ballH.radius >= b.x) && (ballH.posY >= b.y) && (ballH.posY <= b.y + brickHeight)) {
      ballH.speedX = -ballH.speedX;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      clickSound()
      gameScoreH.score = gameScoreH.score + 12;
    }
  }
}

//синий кирпич
let brickBlueM = [];
for (let a = 0; a < brickColumnCount; a++) {
  brickBlueM[a] = { x: brickOffsetLeft + (brickWidth + brickPadding) * a, y: brickOffsetTop + (brickHeight + brickPadding), on: 1 };

}

// удар с кирпичем 
function brickBlueDel() {
  for (let c = 0; c < brickColumnCount; c++) {
    var b = brickBlueM[c];
    //когда мяч касается снизу
    if ((ballH.posX >= b.x) && (ballH.posX <= b.x + brickWidth) && (ballH.posY - ballH.radius <= b.y + brickHeight) && (ballH.posY - ballH.radius >= b.y) && (ballH.speedY < 0)) {
      clickSound()
      ballH.speedY = -ballH.speedY;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      gameScoreH.score = gameScoreH.score + 10;
    }
    //когда мячь касаеться сверху
    if ((ballH.posX >= b.x) && (ballH.posX <= b.x + brickWidth) && (ballH.posY + ballH.radius >= b.y) && (ballH.posY + ballH.radius <= b.y + brickHeight) && (ballH.speedY > 0)) {
      clickSound()
      ballH.speedY = -ballH.speedY;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      gameScoreH.score = gameScoreH.score + 10;
    }
    //если мяч бьет в тарец с левого боку с верху
    if ((ballH.speedY < 0) && (ballH.posX + ballH.radius >= b.x) && (ballH.posX + ballH.radius <= b.x + brickWidth) && (ballH.posY >= b.y) && (ballH.posY <= b.y + brickHeight)) {
      ballH.speedX = -ballH.speedX;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      clickSound()
      gameScoreH.score = gameScoreH.score + 10;
    }
    //если мяч бьет в тарец с левого боку с низу
    if ((ballH.speedY > 0) && (ballH.posX + ballH.radius >= b.x) && (ballH.posX + ballH.radius <= b.x + brickWidth) && (ballH.posY >= b.y) && (ballH.posY <= b.y + brickHeight)) {
      ballH.speedX = -ballH.speedX;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      clickSound()
      gameScoreH.score = gameScoreH.score + 10;
    }
    //если мяч бьет в тарец с правого боку с верху
    if ((ballH.speedY < 0) && (ballH.posX - ballH.radius <= b.x + brickWidth) && (ballH.posX - ballH.radius >= b.x) && (ballH.posY >= b.y) && (ballH.posY <= b.y + brickHeight)) {
      ballH.speedX = -ballH.speedX;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      clickSound()
      gameScoreH.score = gameScoreH.score + 10;
    }
    //если мяч бьет в тарец с правого боку с низу
    if ((ballH.speedY > 0) && (ballH.posX - ballH.radius <= b.x + brickWidth) && (ballH.posX - ballH.radius >= b.x) && (ballH.posY >= b.y) && (ballH.posY <= b.y + brickHeight)) {
      ballH.speedX = -ballH.speedX;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      clickSound()
      gameScoreH.score = gameScoreH.score + 10;
    }
  }
}


//зеленый кирпич
let brickGreenM = [];
for (let a = 0; a < brickColumnCount; a++) {
  brickGreenM[a] = { x: brickOffsetLeft + (brickWidth + brickPadding) * a, y: brickOffsetTop + (brickHeight + brickPadding) * 2, on: 1 };

}

// удар с кирпичем 
function brickGreenDel() {
  for (let c = 0; c < brickColumnCount; c++) {
    var b = brickGreenM[c];
    //когда мяч касается снизу
    if ((ballH.posX >= b.x) && (ballH.posX <= b.x + brickWidth) && (ballH.posY - ballH.radius <= b.y + brickHeight) && (ballH.posY - ballH.radius >= b.y) && (ballH.speedY < 0)) {
      clickSound()
      ballH.speedY = -ballH.speedY;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      gameScoreH.score = gameScoreH.score + 8;
    }
    //когда мячь касаеться сверху
    if ((ballH.posX >= b.x) && (ballH.posX <= b.x + brickWidth) && (ballH.posY + ballH.radius >= b.y) && (ballH.posY + ballH.radius <= b.y + brickHeight) && (ballH.speedY > 0)) {
      clickSound()
      ballH.speedY = -ballH.speedY;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      gameScoreH.score = gameScoreH.score + 8;
    }
    //если мяч бьет в тарец с левого боку с верху
    if ((ballH.speedY < 0) && (ballH.posX + ballH.radius >= b.x) && (ballH.posX + ballH.radius <= b.x + brickWidth) && (ballH.posY >= b.y) && (ballH.posY <= b.y + brickHeight)) {
      ballH.speedX = -ballH.speedX;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      clickSound()
      gameScoreH.score = gameScoreH.score + 8;
    }
    //если мяч бьет в тарец с левого боку с низу
    if ((ballH.speedY > 0) && (ballH.posX + ballH.radius >= b.x) && (ballH.posX + ballH.radius <= b.x + brickWidth) && (ballH.posY >= b.y) && (ballH.posY <= b.y + brickHeight)) {
      ballH.speedX = -ballH.speedX;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      clickSound()
      gameScoreH.score = gameScoreH.score + 8;
    }
    //если мяч бьет в тарец с правого боку с верху
    if ((ballH.speedY < 0) && (ballH.posX - ballH.radius <= b.x + brickWidth) && (ballH.posX - ballH.radius >= b.x) && (ballH.posY >= b.y) && (ballH.posY <= b.y + brickHeight)) {
      ballH.speedX = -ballH.speedX;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      clickSound()
      gameScoreH.score = gameScoreH.score + 8;
    }
    //если мяч бьет в тарец с правого боку с низу
    if ((ballH.speedY > 0) && (ballH.posX - ballH.radius <= b.x + brickWidth) && (ballH.posX - ballH.radius >= b.x) && (ballH.posY >= b.y) && (ballH.posY <= b.y + brickHeight)) {
      ballH.speedX = -ballH.speedX;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      clickSound()
      gameScoreH.score = gameScoreH.score + 8;
    }
  }
}


//жёлтые кирпич
let brickYellowM = [];
for (let a = 0; a < brickColumnCount; a++) {
  brickYellowM[a] = { x: brickOffsetLeft + (brickWidth + brickPadding) * a, y: brickOffsetTop + (brickHeight + brickPadding) * 3, on: 1 };

}

// удар с кирпичем 
function brickYellowDel() {
  for (let c = 0; c < brickColumnCount; c++) {
    var b = brickYellowM[c];
    //когда мяч касается снизу
    if ((ballH.posX >= b.x) && (ballH.posX <= b.x + brickWidth) && (ballH.posY - ballH.radius <= b.y + brickHeight) && (ballH.posY - ballH.radius >= b.y) && (ballH.speedY < 0)) {
      clickSound()
      ballH.speedY = -ballH.speedY;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      gameScoreH.score = gameScoreH.score + 4;
    }
    //когда мячь касаеться сверху
    if ((ballH.posX >= b.x) && (ballH.posX <= b.x + brickWidth) && (ballH.posY + ballH.radius >= b.y) && (ballH.posY + ballH.radius <= b.y + brickHeight) && (ballH.speedY > 0)) {
      clickSound()
      ballH.speedY = -ballH.speedY;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      gameScoreH.score = gameScoreH.score + 4;
    }
    //если мяч бьет в тарец с левого боку с верху
    if ((ballH.speedY < 0) && (ballH.posX + ballH.radius >= b.x) && (ballH.posX + ballH.radius <= b.x + brickWidth) && (ballH.posY >= b.y) && (ballH.posY <= b.y + brickHeight)) {
      ballH.speedX = -ballH.speedX;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      clickSound()
      gameScoreH.score = gameScoreH.score + 4;
    }
    //если мяч бьет в тарец с левого боку с низу
    if ((ballH.speedY > 0) && (ballH.posX + ballH.radius >= b.x) && (ballH.posX + ballH.radius <= b.x + brickWidth) && (ballH.posY >= b.y) && (ballH.posY <= b.y + brickHeight)) {
      ballH.speedX = -ballH.speedX;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      clickSound()
      gameScoreH.score = gameScoreH.score + 4;
    }
    //если мяч бьет в тарец с правого боку с верху
    if ((ballH.speedY < 0) && (ballH.posX - ballH.radius <= b.x + brickWidth) && (ballH.posX - ballH.radius >= b.x) && (ballH.posY >= b.y) && (ballH.posY <= b.y + brickHeight)) {
      ballH.speedX = -ballH.speedX;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      clickSound()
      gameScoreH.score = gameScoreH.score + 4;
    }
    //если мяч бьет в тарец с правого боку с низу
    if ((ballH.speedY > 0) && (ballH.posX - ballH.radius <= b.x + brickWidth) && (ballH.posX - ballH.radius >= b.x) && (ballH.posY >= b.y) && (ballH.posY <= b.y + brickHeight)) {
      ballH.speedX = -ballH.speedX;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      clickSound()
      gameScoreH.score = gameScoreH.score + 4;
    }
  }
}
//розовый кирпич
let brickPinkM = [];
for (let a = 0; a < brickColumnCount; a++) {
  brickPinkM[a] = { x: brickOffsetLeft + (brickWidth + brickPadding) * a, y: brickOffsetTop + (brickHeight + brickPadding) * 4, on: 1 };

}

// удар с кирпичем 
function brickPinkDel() {
  for (let c = 0; c < brickColumnCount; c++) {
    var b = brickPinkM[c];
    //когда мяч касается снизу
    if ((ballH.posX >= b.x) && (ballH.posX <= b.x + brickWidth) && (ballH.posY - ballH.radius <= b.y + brickHeight) && (ballH.posY - ballH.radius >= b.y) && (ballH.speedY < 0)) {
      clickSound()
      ballH.speedY = -ballH.speedY;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      gameScoreH.score = gameScoreH.score + 2;
    }
    //когда мячь касаеться сверху
    if ((ballH.posX >= b.x) && (ballH.posX <= b.x + brickWidth) && (ballH.posY + ballH.radius >= b.y) && (ballH.posY + ballH.radius <= b.y + brickHeight) && (ballH.speedY > 0)) {
      clickSound()
      ballH.speedY = -ballH.speedY;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      gameScoreH.score = gameScoreH.score + 2;
    }
    //если мяч бьет в тарец с левого боку с верху
    if ((ballH.speedY < 0) && (ballH.posX + ballH.radius >= b.x) && (ballH.posX + ballH.radius <= b.x + brickWidth) && (ballH.posY >= b.y) && (ballH.posY <= b.y + brickHeight)) {
      ballH.speedX = -ballH.speedX;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      clickSound()
      gameScoreH.score = gameScoreH.score + 2;
    }
    //если мяч бьет в тарец с левого боку с низу
    if ((ballH.speedY > 0) && (ballH.posX + ballH.radius >= b.x) && (ballH.posX + ballH.radius <= b.x + brickWidth) && (ballH.posY >= b.y) && (ballH.posY <= b.y + brickHeight)) {
      ballH.speedX = -ballH.speedX;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      clickSound()
      gameScoreH.score = gameScoreH.score + 2;
    }
    //если мяч бьет в тарец с правого боку с верху
    if ((ballH.speedY < 0) && (ballH.posX - ballH.radius <= b.x + brickWidth) && (ballH.posX - ballH.radius >= b.x) && (ballH.posY >= b.y) && (ballH.posY <= b.y + brickHeight)) {
      ballH.speedX = -ballH.speedX;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      clickSound()
      gameScoreH.score = gameScoreH.score + 2;
    }
    //если мяч бьет в тарец с правого боку с низу
    if ((ballH.speedY > 0) && (ballH.posX - ballH.radius <= b.x + brickWidth) && (ballH.posX - ballH.radius >= b.x) && (ballH.posY >= b.y) && (ballH.posY <= b.y + brickHeight)) {
      ballH.speedX = -ballH.speedX;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      clickSound()
      gameScoreH.score = gameScoreH.score + 2;
    }
  }
}
//ораньжевый кирпич
let brickOrangeM = [];
for (let a = 0; a < brickColumnCount; a++) {
  brickOrangeM[a] = { x: brickOffsetLeft + (brickWidth + brickPadding) * a, y: brickOffsetTop + (brickHeight + brickPadding) * 5, on: 1 };

}

// удар с кирпичем 
function brickOrangeDel() {
  for (let c = 0; c < brickColumnCount; c++) {
    var b = brickOrangeM[c];

    //когда мяч касается снизу
    if ((ballH.posX >= b.x) && (ballH.posX <= b.x + brickWidth) && (ballH.posY - ballH.radius <= b.y + brickHeight) && (ballH.posY - ballH.radius >= b.y) && (ballH.speedY < 0)) {
      clickSound()
      ballH.speedY = -ballH.speedY;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      ++gameScoreH.score;
    }
    //когда мячь касаеться сверху
    if ((ballH.posX >= b.x) && (ballH.posX <= b.x + brickWidth) && (ballH.posY + ballH.radius >= b.y) && (ballH.posY + ballH.radius <= b.y + brickHeight) && (ballH.speedY > 0)) {
      clickSound()
      ballH.speedY = -ballH.speedY;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      ++gameScoreH.score;
    }
    //если мяч бьет в тарец с левого боку с верху
    if ((ballH.speedY < 0) && (ballH.posX + ballH.radius >= b.x) && (ballH.posX + ballH.radius <= b.x + brickWidth) && (ballH.posY >= b.y) && (ballH.posY <= b.y + brickHeight)) {
      ballH.speedX = -ballH.speedX;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      clickSound()
      ++gameScoreH.score;
    }
    //если мяч бьет в тарец с левого боку с низу
    if ((ballH.speedY > 0) && (ballH.posX + ballH.radius >= b.x) && (ballH.posX + ballH.radius <= b.x + brickWidth) && (ballH.posY >= b.y) && (ballH.posY <= b.y + brickHeight)) {
      ballH.speedX = -ballH.speedX;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      clickSound()
      ++gameScoreH.score;
    }
    //если мяч бьет в тарец с правого боку с верху
    if ((ballH.speedY < 0) && (ballH.posX - ballH.radius <= b.x + brickWidth) && (ballH.posX - ballH.radius >= b.x) && (ballH.posY >= b.y) && (ballH.posY <= b.y + brickHeight)) {
      ballH.speedX = -ballH.speedX;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      clickSound()
      ++gameScoreH.score;
    }
    //если мяч бьет в тарец с правого боку с низу
    if ((ballH.speedY > 0) && (ballH.posX - ballH.radius <= b.x + brickWidth) && (ballH.posX - ballH.radius >= b.x) && (ballH.posY >= b.y) && (ballH.posY <= b.y + brickHeight)) {
      ballH.speedX = -ballH.speedX;
      b.on = 0;
      b.x = -200;
      b.y = 0;
      clickSound()
      ++gameScoreH.score;
    }
  }
}


//функция для вывода рандомного сила 
function randomDiap(n, m) {
  let a = Math.floor(Math.random() * (m - n + 1)) + n

  if (a === 0) {
    return a + 1
  } return a
}
let randomY = randomDiap(-4, -5);
let randomX = randomDiap(-5, 5);

//счет игры


let gameScoreH = {
  score: 0,
  life: 2,
  updateScore: function () {
    let spanScore = document.getElementById('score');
    spanScore.textContent = `${this.score}`;

  },
  updateLife: function () {
    let spanLife = document.getElementById('life');
    spanLife.textContent = `${this.life}`;
  },
}
gameScoreH.updateScore();
gameScoreH.updateLife();


//данные по игровому полю
let playingFielH = {
  posX: 0,//начало координат холста
  posY: 0,//начало координат холста
  Width: innerWidth,//ширина холста
  Height: innerHeight,//длинна холста
  update: function () {
    canvas.setAttribute('width', `${this.Width}`);
    canvas.setAttribute('height', `${this.Height}`);
  }
}
playingFielH.update();

//данные по ракетке
let racketH = {
  posX: playingFielH.Width / 2 - 140 / 2,//начало координат 
  posY: playingFielH.Height - 10,//начало координат
  Width: 140,//длинна 
  Height: 10,//ширина 
  speed: 0,

}

//движение ракетки 
document.addEventListener('keydown', arrowDownR, false);

function arrowDownR(EO) {
  EO = EO || window.event;


  if (EO.code == 'ArrowLeft') {
    EO.preventDefault();
    racketH.speed = -10;

  }
  if (EO.code == 'ArrowRight') {
    EO.preventDefault();
    racketH.speed = 10;
  }
}

document.addEventListener('keyup', arrowUp, false);

function arrowUp(EO) {
  EO = EO || window.event;


  if (EO.code == 'ArrowLeft') {
    EO.preventDefault();
    racketH.speed = 0;

  }

  if (EO.code == 'ArrowRight') {
    EO.preventDefault();
    racketH.speed = 0;
  }
}
//данные мяча
let ballH = {
  posX: racketH.posX + racketH.Width / 2,
  posY: playingFielH.Height - racketH.Height - innerWidth / 90,
  speedX: 0,
  speedY: 0,
  radius: innerWidth / 90,//радиус

}


//функция которая рисует все и удаляет 
function pikcher() {


  //стираем весь холст 
  ctx.clearRect(0, 0, playingFielH.Width, playingFielH.Height);
  //мяч

  ctx.beginPath();
  ctx.arc(ballH.posX, ballH.posY, ballH.radius, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
  //ракетка
  ctx.beginPath();
  ctx.rect(racketH.posX, racketH.posY, racketH.Width, racketH.Height);
  ctx.fillStyle = 'green';
  ctx.fill();
  ctx.closePath();
  //рисуем прямоугольники 
  let summ = 0;
  for (let a = 0; a < brickRedM.length; a++) {
    if (brickRedM[a].on === 1) {

      ctx.beginPath();
      ctx.rect(brickRedM[a].x, brickRedM[a].y, brickWidth, brickHeight);
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.closePath();
      ++summ;
    }
  }
  for (let a = 0; a < brickBlueM.length; a++) {
    if (brickBlueM[a].on === 1) {
      ctx.beginPath();
      ctx.rect(brickBlueM[a].x, brickBlueM[a].y, brickWidth, brickHeight);
      ctx.fillStyle = 'blue';
      ctx.fill();
      ctx.closePath();
      ++summ;
    }
  }

  for (let a = 0; a < brickGreenM.length; a++) {
    if (brickGreenM[a].on === 1) {
      ctx.beginPath();
      ctx.rect(brickGreenM[a].x, brickGreenM[a].y, brickWidth, brickHeight);
      ctx.fillStyle = 'green';
      ctx.fill();
      ctx.closePath();
      ++summ;
    }
  }
  for (let a = 0; a < brickYellowM.length; a++) {
    if (brickYellowM[a].on === 1) {
      ctx.beginPath();
      ctx.rect(brickYellowM[a].x, brickYellowM[a].y, brickWidth, brickHeight);
      ctx.fillStyle = 'yellow';
      ctx.fill();
      ctx.closePath();
      ++summ;
    }
  }
  for (let a = 0; a < brickPinkM.length; a++) {
    if (brickPinkM[a].on === 1) {
      ctx.beginPath();
      ctx.rect(brickPinkM[a].x, brickPinkM[a].y, brickWidth, brickHeight);
      ctx.fillStyle = 'pink';
      ctx.fill();
      ctx.closePath();
      ++summ;
    }
  }
  for (let a = 0; a < brickOrangeM.length; a++) {
    if (brickOrangeM[a].on === 1) {
      ctx.beginPath();
      ctx.rect(brickOrangeM[a].x, brickOrangeM[a].y, brickWidth, brickHeight);
      ctx.fillStyle = 'orange';
      ctx.fill();
      ctx.closePath();
      ++summ;
    }
  }
  //победа!!
  if ((summ < 1) && (ballH.speedY > 0)) {
    clickSound2();
    ballH.speedX = 0;
    ballH.speedY = 0;
    vibro();
    finih()
  }

}

pikcher();
//первый запуск функции тик
requestAnimationFrame(tick)
function start() {
  let a = document.getElementsByClassName('finih')[0];
  if ((ballH.speedY === 0) && (a.offsetHeight === 0) && (gameScoreH.life > 0) && (gameScoreH.life < 3)) {
    randomY = randomDiap(-4, -5);
    randomX = randomDiap(-5, 5);
    ballH.posX = racketH.posX + racketH.Width / 2;
    ballH.posY = playingFielH.Height - racketH.Height - ballH.radius;
    ballH.speedX = randomX;
    ballH.speedY = randomY;
    clickSoundInit();
    clickSoundInit1();
    clickSoundInit2();
  }
}


function tick() {


  //движение правой ракетки
  racketH.posX += racketH.speed
  if (racketH.posX < playingFielH.posX) {
    racketH.speed = 0;
    racketH.posX = playingFielH.posX;
  }
  if (racketH.posX + racketH.Width > playingFielH.Width) {
    racketH.speed = 0;
    racketH.posX = playingFielH.Width - racketH.Width;

  }

  //движение мяча по Х
  ballH.posX += ballH.speedX;

  if (ballH.posX + ballH.radius > playingFielH.Width + playingFielH.posX) {
    ballH.speedX = - ballH.speedX;
    ballH.posX = playingFielH.Width + playingFielH.posX - ballH.radius
    clickSound()
  }

  if (ballH.posX - ballH.radius < playingFielH.posX) {
    ballH.speedX = - ballH.speedX;
    ballH.posX = playingFielH.posX + ballH.radius
    clickSound()
  }

  if ((ballH.speedY === 0) && (ballH.speedX === 0) && (ballH.posY === playingFielH.Height - ballH.radius - racketH.Height)) {
    ballH.posX = racketH.posX + racketH.Width / 2;
  }


  //движение мяча по Y
  ballH.posY += ballH.speedY;
  if (ballH.posY - ballH.radius < playingFielH.posY) {
    ballH.posY = playingFielH.posY + ballH.radius;
    ballH.speedY = -ballH.speedY;
    clickSound()
    //уменьшение ракетки 
    racketH.Width = 90
  }
  if ((ballH.posY + ballH.radius > playingFielH.Height) && (ballH.speedY > 0)) {
    ballH.speedY = 0;
    ballH.speedX = 0;
    ballH.posY = playingFielH.Height - ballH.radius - racketH.Height;
    ballH.posX = racketH.posX + racketH.Width / 2;
    clickSound1();
    vibro();
    //жизни
    --gameScoreH.life;
  }
  //Мяч отбиваетья от ракетки 
  if ((ballH.speedY > 0) && (ballH.posY + ballH.radius > playingFielH.Height - racketH.Height) && (ballH.posX > racketH.posX + racketH.Width / 3) && (ballH.posX < racketH.posX + racketH.Width - racketH.Width / 3)) {
    ballH.posY = playingFielH.Height - racketH.Height - ballH.radius;
    ballH.speedY = -ballH.speedY;

    clickSound()
  }
  if ((ballH.speedX > 0) && (ballH.posY + ballH.radius > playingFielH.Height - racketH.Height) && (ballH.posX > racketH.posX) && (ballH.posX < racketH.posX + racketH.Width / 3)) {
    ballH.posY = playingFielH.Height - racketH.Height - ballH.radius;
    ballH.speedY = -ballH.speedY;
    ballH.speedX = -ballH.speedX - 0.5;
    clickSound()
  }
  if ((ballH.speedX < 0) && (ballH.posY + ballH.radius > playingFielH.Height - racketH.Height) && (ballH.posX > racketH.posX) && (ballH.posX < racketH.posX + racketH.Width / 3)) {
    ballH.posY = playingFielH.Height - racketH.Height - ballH.radius;
    ballH.speedY = -ballH.speedY;
    ballH.speedX = +ballH.speedX;
    clickSound()
  }
  if ((ballH.speedX < 0) && (ballH.posY + ballH.radius > playingFielH.Height - racketH.Height) && (ballH.posX > racketH.posX + racketH.Width - racketH.Width / 3) && (ballH.posX < racketH.posX + racketH.Width)) {
    ballH.posY = playingFielH.Height - racketH.Height - ballH.radius;
    ballH.speedY = -ballH.speedY;
    ballH.speedX = -ballH.speedX + 0.5;
    clickSound()
  }
  if ((ballH.speedX > 0) && (ballH.posY + ballH.radius > playingFielH.Height - racketH.Height) && (ballH.posX > racketH.posX + racketH.Width - racketH.Width / 3) && (ballH.posX < racketH.posX + racketH.Width)) {
    ballH.posY = playingFielH.Height - racketH.Height - ballH.radius;
    ballH.speedY = -ballH.speedY;
    ballH.speedX = +ballH.speedX;
    clickSound()

  }

  //проверка счета
  if ((gameScoreH.life === 0) && (gameScoreH.score > 0)) {
    finih();
    gameScoreH.life = 3
  }

  //вызов функции 
  playingFielH.update();
  gameScoreH.updateLife();
  gameScoreH.updateScore();
  requestAnimationFrame(tick);
  pikcher();
  brickRedDel()
  brickBlueDel()
  brickGreenDel()
  brickYellowDel()
  brickPinkDel()
  brickOrangeDel()

}

//выезжает в конце игры 
function finih() {
  let finih = document.getElementsByClassName('finih')[0];
  finih.style.height = '50%';
  finih.style.width = '50%';
  finih.style.transform = 'rotate(360deg) translateZ(0)';
}

function finihOff() {
  let finih = document.getElementsByClassName('finih')[0];
  finih.style.height = '0%';
  finih.style.width = '0%';
  finih.style.transform = 'rotate(0deg) translateZ(0)';
}

//работа с правилами
function rule() {
  let rule = document.getElementsByClassName('rule')[0];
  if (rule.offsetHeight > 0) {
    rule.style.height = '0%';
  } else rule.style.height = '95%';
}
function ruleOff() {
  let rule = document.getElementsByClassName('rule')[0];
  rule.style.height = '0%';
}
//Работа с таблицей рекордов
function record() {
  let rule = document.getElementsByClassName('Record')[0];
  if (rule.offsetWidth > 0) {
    rule.style.width = '0%';
  } else rule.style.width = '100%';
}
function recorOff() {
  let rule = document.getElementsByClassName('Record')[0];
  rule.style.width = '0%';
}

//функции для тач скрина
function touchstartLeft(EO) {
  EO = EO || window.event;
  EO.preventDefault();
  racketH.speed = -10;

}
function touchendLeft(EO) {
  EO = EO || window.event;
  EO.preventDefault();
  racketH.speed = 0;

}
function touchstartRight(EO) {
  EO = EO || window.event;
  EO.preventDefault();
  racketH.speed = 10;

}
function touchendRight(EO) {
  EO = EO || window.event;
  EO.preventDefault();
  racketH.speed = 0;

}


// записываем победителей 

var ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
var messages; // элемент массива - {name:'Иванов',check:'Привет'};
var updatePassword;
var stringName = 'DUBINCHYK_BREIKAUT_REZULTAT';

// показывает все сообщения из messages на страницу

function showMessages() {
  let str = '';
  let M=[]
  for (let m = 0; m < messages.length; m++) {
    let message = messages[m];
    if(typeof(message.check)==='number'){
      M.push(message);
      
    }
  }
  
  M.sort((a,b)=>b.check-a.check)
  
  for(let a = 0; a<M.length;a++){
    if(a<10){
   let b =M[a]
console.log(b)
   str += `<tr><th>${escapeHTML(b.name)} </th>  <th> ${b.check} </th></tr> `;
   }
  }
  document.getElementById('RecordT').innerHTML = `<caption><b>Таблица рекордов<b></caption> ${str}`;
  console.log(str)
}

function escapeHTML(text) {
  if (!text)
    return text;
  text = text.toString()
    .split("&").join("&amp;")
    .split("<").join("&lt;")
    .split(">").join("&gt;")
    .split('"').join("&quot;")
    .split("'").join("&#039;");
  return text;
}

// получает сообщения с сервера и потом показывает
function refreshMessages() {
  $.ajax({
    url: ajaxHandlerScript,
    type: 'POST', dataType: 'json',
    data: { f: 'READ', n: stringName },
    cache: false,
    success: readReady,
    error: errorHandler
  }
  );
}

function readReady(callresult) { // сообщения получены - показывает
  if (callresult.error != undefined)
    alert(callresult.error);
  else {
    messages = [];
    if (callresult.result != "") { // либо строка пустая - сообщений нет
      // либо в строке - JSON-представление массива сообщений
      messages = JSON.parse(callresult.result);
      // вдруг кто-то сохранил мусор вместо LOKTEV_CHAT_MESSAGES?
      if (!Array.isArray(messages))
        messages = [];
    }
    showMessages();
  }
}

// получает сообщения с сервера, добавляет новое,
// показывает и сохраняет на сервере
function sendCheck() {
  updatePassword = Math.random();
  $.ajax({
    url: ajaxHandlerScript,
    type: 'POST', dataType: 'json',
    data: {
      f: 'LOCKGET', n: stringName,
      p: updatePassword
    },
    cache: false,
    success: lockGetReady,
    error: errorHandler
  }
  );
  finihOff()
}

// сообщения получены, добавляет, показывает, сохраняет
function lockGetReady(callresult) {
  if (callresult.error != undefined)
    alert(callresult.error);
  else {
    messages = [];
    if (callresult.result != "") { // либо строка пустая - сообщений нет
      // либо в строке - JSON-представление массива сообщений
      messages = JSON.parse(callresult.result);
      // вдруг кто-то сохранил мусор вместо LOKTEV_CHAT_MESSAGES?
      if (!Array.isArray(messages))
        messages = [];
    }

    var senderName = document.getElementById('name').value;
    var message = gameScoreH.score;
    messages.push({ name: senderName, check: message });
    if (messages.length > 10)
      messages = messages.slice(messages.length - 10);

    showMessages();

    $.ajax({
      url: ajaxHandlerScript,
      type: 'POST', dataType: 'json',
      data: {
        f: 'UPDATE', n: stringName,
        v: JSON.stringify(messages), p: updatePassword
      },
      cache: false,
      success: updateReady,
      error: errorHandler
    }
    );
  }
}

// сообщения вместе с новым сохранены на сервере
function updateReady(callresult) {
  if (callresult.error != undefined)
    alert(callresult.error);
}

function errorHandler(jqXHR, statusStr, errorStr) {
  alert(statusStr + ' ' + errorStr);
}

refreshMessages();
