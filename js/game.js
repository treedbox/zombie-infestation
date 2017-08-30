console.log('@treedbox');
//get canvas
const canvas = document.querySelector('canvas');
//set context
const c = canvas.getContext('2d');
//generate random number between min and max inclusive
const random = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;
let h1 = document.querySelector('h1');


let zombieInfestation = new Image();
zombieInfestation.src = 'icon/zombie-infestation.svg';

let char1 = new Image();
char1.src = 'images/char1.svg';
let char2 = new Image();
char2.src = 'images/char2.svg';
let char3 = new Image();
char3.src = 'images/char3.svg';
let char4 = new Image();
char4.src = 'images/char4.svg';
let char5 = new Image();
char5.src = 'images/char5.svg';
let char6 = new Image();
char6.src = 'images/char6.svg';
let char7 = new Image();
char7.src = 'images/char7.svg';
let char8 = new Image();
char8.src = 'images/char8.svg';
let char9 = new Image();
char9.src = 'images/char9.svg';
let char10 = new Image();
char10.src = 'images/char10.svg';
let char11 = new Image();
char11.src = 'images/char11.svg';
let char12 = new Image();
char12.src = 'images/char12.svg';
let char13 = new Image();
char13.src = 'images/char13.svg';
let char14 = new Image();
char14.src = 'images/char14.svg';
let char15 = new Image();
char15.src = 'images/char15.svg';
let char16 = new Image();
char16.src = 'images/char16.svg';
let char17 = new Image();
char17.src = 'images/char17.svg';
let char18 = new Image();
char18.src = 'images/char18.svg';
let char19 = new Image();
char19.src = 'images/char19.svg';
let char20 = new Image();
char20.src = 'images/char20.svg';
let char21 = new Image();
char21.src = 'images/char21.svg';
let char22 = new Image();
char22.src = 'images/char22.svg';
let char23 = new Image();
char23.src = 'images/char23.svg';
let char24 = new Image();
char24.src = 'images/char24.svg';
let char25 = new Image();
char25.src = 'images/char25.svg';
let char26 = new Image();
char26.src = 'images/char26.svg';
let char27 = new Image();
char27.src = 'images/char27.svg';
let char28 = new Image();
char28.src = 'images/char28.svg';
//char list
const chars = [
  char1,char2,char3,char4,char5,
  char6,char7,char8,char9,char10,
  char11,char12,char13,char14,char15,
  char16,char17,char18,char19,char20,
  char21,char22,char23,char24,char25,
  char26,char27,char28
];

//joystic
let joystic = new Image();
joystic.src = 'images/joystic.svg';
//audio

let girl01 = new Audio();
girl01.src = 'audio/girl01.ogg';
let girl02 = new Audio();
girl02.src = 'audio/girl02.ogg';
let girl03 = new Audio();
girl03.src = 'audio/girl03.ogg';
let joni01 = new Audio();
joni01.src = 'audio/joni01.ogg';
let marko01 = new Audio();
marko01.src = 'audio/marko01.ogg';
let marko02 = new Audio();
marko02.src = 'audio/marko02.ogg';
let marko03 = new Audio();
marko03.src = 'audio/marko03.ogg';
let marko04 = new Audio();
marko04.src = 'audio/marko04.ogg';
let marko05 = new Audio();
marko05.src = 'audio/marko05.ogg';
let marko06 = new Audio();
marko06.src = 'audio/marko06.ogg';
let marko07 = new Audio();
marko07.src = 'audio/marko07.ogg';
let marko08 = new Audio();
marko08.src = 'audio/marko08.ogg';
let paulo01 = new Audio();
paulo01.src = 'audio/paulo01.ogg';
let paulo02 = new Audio();
paulo02.src = 'audio/paulo02.ogg';
let robson01 = new Audio();
robson01.src = 'audio/robson01.ogg';
let robson02 = new Audio();
robson02.src = 'audio/robson02.ogg';
let robson03 = new Audio();
robson03.src = 'audio/robson03.ogg';
let robson04 = new Audio();
robson04.src = 'audio/robson04.ogg';
let toin01 = new Audio();
toin01.src = 'audio/toin01.ogg';
let toin02 = new Audio();
toin02.src = 'audio/toin02.ogg';
let toin03 = new Audio();
toin03.src = 'audio/toin03.ogg';
let toin04 = new Audio();
toin04.src = 'audio/toin04.ogg';
let toin05 = new Audio();
toin05.src = 'audio/toin05.ogg';
let zombie01 = new Audio();
zombie01.src = 'audio/zombie01.ogg';
let zombie02 = new Audio();
zombie02.src = 'audio/zombie02.ogg';
let zombie03 = new Audio();
zombie03.src = 'audio/zombie03.ogg';
let zombie04 = new Audio();
zombie04.src = 'audio/zombie04.ogg';
let zombie05 = new Audio();
zombie05.src = 'audio/zombie05.ogg';

const audioArr = [
  girl01,girl02,girl03,
  joni01,
  marko01,marko02,marko03,marko04,marko05,marko06,marko07,marko08,
  paulo01,paulo02,
  robson01,robson02,robson03,robson04,
  toin01,toin02,toin03,toin04,toin05
];
const audioZombieArr = [
  zombie01,zombie02,zombie03,zombie04,zombie05
];
//timer
let seconds = 0;
let minutes = 0;
let hours = 0;
let survivor = 0;
let timer;


window.onload = e =>{
  canvas.width = innerWidth;
  canvas.height = innerHeight - 10;

  const startTime = e =>{
    timer = setInterval(e =>{
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes >= 60) {
        seconds = 0;
        minutes = 0;
        hours++;
      }
      if (hours >= 60) {
        seconds = 0;
        minutes = 0;
        hours = 0;
        stopTime();
        cronomether.textContent = `CONGRATULATIONS!!! We are the Walking Dead!`;
      }
    }, 1000);
  }

  const stopTime = e =>{
    clearInterval(timer);
  }
  let run;
  const start = e =>{
    document.body.style.backgroundColor = '#9a9a9a';
    run = setInterval(e =>{
      window.requestAnimationFrame(draw);
    }, 100);
  }
  let streetCity = new Audio();
  streetCity.src = 'audio/street-city.ogg';

  //start audio ambient
  const audiobg = e =>{
    streetCity.volume = 0.1;
    streetCity.play();
  }

  //people size
  const w = 50;
  const h = 50;
  const step = 15;
  let peoples = [[canvas.width/2 - w/2,canvas.height/2 - h/2,char28, zombie04]];

  let player = 0;
  let pos = 0;


  //draw element
  const draw = e =>{
    //choose random char
    const randomChar = chars[random(1, chars.length - 3)];
    const randomCharZombie = chars[random(26, chars.length - 1)];
    //prepare canvas
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = '#9a9a9a';
    c.fillRect(0, 0, canvas.width, canvas.height);

    peoples.forEach((p,i) =>{
      //random direction
      let direction = random(0,7);
      if (p[2] != char1) {
        switch(direction){
          case 0 || 1: //top
          if (p[2] == char27 || p[2] == char28) {
            p[1] = p[1] - step/4;
          }else {
            p[1] = p[1] - step;
          }
          pos = 308.5 * 3;
          break;
          case 2 || 3: //right
          if (p[2] == char27 || p[2] == char28) {
            p[0] = p[0] + step/4;
          }else {
            p[0] = p[0] + step;
          }
          pos = 0;
          break;
          case 4 || 5: //bottom
          if (p[2] == char27 || p[2] == char28) {
            p[1] = p[1] + step/4;
          }else {
            p[1] = p[1] + step;
          }
          pos = 308.5 * 2;
          break;
          case 6 || 7: //left
          if (p[2] == char27 || p[2] == char28) {
            p[0] = p[0] - step/4;
          }else {
            p[0] = p[0] - step;
          }
          pos = 308.5;
          break;
        }
      }
      if (p[2] != char27 && p[2] != char28) {
        //avoid play all the time in loop
        let canPlay = random(0,100);
        if (canPlay < 3 && p[3].paused) {
          let vol = 1 / random(1,10);
          p[3].volume = vol;
          p[3].play();
        }
      }
      //prevent canvas overflow
      if (p[0] < 0) {
        p[0] = 0;
      }else if (p[0] > canvas.width - w) {
        p[0] = canvas.width - w;
      }
      if (p[1] < 0) {
        p[1] = 0;
      }else if (p[1] > canvas.height - h) {
        p[1] = canvas.height - h;
      }
      //detect if one is not a zombie
      peoples.forEach((pp,ii) =>{
        if (i != ii &&
          p[2] == char28 && pp[2] != char28 && pp[2] != char27 ||
          p[2] == char27 && pp[2] != char27 && pp[2] != char28
        ) {
          //detect collison
          if (
            //detect left
            p[0] < pp[0] + w &&
            //detect bottom
            p[1] + h > pp[1] &&
            //detect right
            p[0] + w > pp[0] &&
            //detect top
            p[1] < pp[1] + h
          ) {
            let audioZombie = audioZombieArr[random(0,audioZombieArr.length - 1)];
            //replace
            peoples.splice(ii, 1, [pp[0],pp[1],randomCharZombie, audioZombie]);
            if (!pp[3].paused) {
              pp[3].pause();
            }
            console.log('CONTAMINED!');
            if (audioZombie.paused) {
              let vol = 1 / random(1,10);
              p[3].volume = vol;
              audioZombie.play();
            }
          }
        }
      });

      if (p[2] == char27 || p[2] == char28) {
        c.drawImage(p[2], pos, 0, 308, 308, p[0], p[1], w, h);
      }else {
        c.drawImage(p[2], pos, 0, 308, 308, p[0], p[1], w, h);
      }

    });
    //text box
    c.fillStyle = 'rgba(0,0,0,.3)';
    c.fillRect(0,0,190,70);
    //joystic
    c.drawImage(joystic, 10, canvas.height - 110, 100, 100);

    //statistics
    let infected = peoples.filter(p => p[2] == char27 || p[2] == char28);
    let percent = Math.floor((infected.length * 100) / peoples.length);
    //text
    c.font = '20px arial';
    c.fillStyle = '#000';
    c.strokeText(`Time: ${hours}h${minutes}min${seconds}s`, 10,20);
    c.fillStyle = '#8BC34A';
    c.fillText(`Time: ${hours}h${minutes}min${seconds}s`, 10,20);


    c.font = '20px arial';
    c.fillStyle = '#000';
    c.strokeText(`Population: ${peoples.length}`, 10,40);
    c.fillStyle = '#fd0';
    c.fillText(`Population: ${peoples.length}`, 10,40);

    c.font = '20px arial';
    c.fillStyle = '#000';
    c.strokeText(`infected: ${infected.length} (${percent}%)`, 10,60);
    c.fillStyle = '#F44336';
    c.fillText(`infected: ${infected.length} (${percent}%)`, 10,60);

    if (peoples.length == infected.length && peoples.length != 1) {
      stopTime();
      clearInterval(run);
      // window.cancelAnimationFrame(draw);
    }else {
      run;
      // window.requestAnimationFrame(draw);
    }
  }

  //create element
  const createEl = (x,y) =>{
    const randomChar = chars[random(1, chars.length - 3)];
    const randomAudio = audioArr[random(0, audioArr.length - 1)];
    peoples.push([x,y,randomChar,randomAudio]);
    window.requestAnimationFrame(draw);
  }
  //get click
  const addPeople = e =>{
    let x,y;
    if (e.offsetX == undefined) {
      x = e.touches[0].clientX;;
      y = e.touches[0].clientY;
    }else {
      x = e.offsetX;
      y = e.offsetY;
    }
    if (x < 110 && x > 10 && y > canvas.height - 110) {
      peoples.forEach((pp,ii) =>{
        if (pp[2] == char1) {
          if ( //top
            x >= 43 && x  <= 73 &&
            y >= canvas.height - 110 && y <= canvas.height - 75
          ) {
            console.log('top');
            pp[1] = pp[1] - step;
            pos = 308.5 * 3;
          }else if ( //right
            x >= 74 && x <= 108 &&
            y >= canvas.height - 76 && y <= canvas.height - 44
          ) {
            console.log('right');
            pp[0] = pp[0] + step;
            pos = 0;
          }else if ( //down
            x >= 43 && x  <= 73 &&
            y >= canvas.height - 45 && y <= canvas.height - 10
          ) {
            console.log('down');
            pp[1] = pp[1] + step;
            pos = 308.5 * 2;
          }else if ( //left
            x >= 10 && x  <= 42 &&
            y >= canvas.height - 76 && y <= canvas.height - 44
          ) {
            console.log('left');
            pp[0] = pp[0] - step;
            pos = 308.5;
          }
        }
      });
      if (player == 0) {
        player = 1;
        const randomAudio = audioArr[random(0, audioArr.length - 1)];
        peoples.push([0,0,char1,randomAudio]);
      };
    }else {
      createEl(x,y);
    }
    //start time
    if (survivor == 0) {
      survivor = 1;
      startTime();
      audiobg();
    }
  }
  canvas.addEventListener('click', addPeople);
  canvas.addEventListener('touchstart', e =>{
    canvas.addEventListener('touchmove', addPeople);
  });
  canvas.addEventListener('mousedown', e =>{
    canvas.addEventListener('mousemove', addPeople);
    canvas.addEventListener('mouseup', e =>{
      canvas.removeEventListener('mousemove', addPeople);
    });
  });

  //game control
  const playerDirection = e =>{
    //start time
    if (survivor == 0) {
      survivor = 1;
      startTime();
    }
    if (e.charCode) {
      key = e.charCode;
    }else {
      key = e.keyCode;
    }
    peoples.forEach((pp,ii) =>{
      if (pp[2] == char1) {
        switch(key){
          case 37: //left
          pp[0] = pp[0] - step;
          pos = 308.5;
          break;
          case 38: //up
          pp[1] = pp[1] - step;
          pos = 308.5 * 3;
          break;
          case 39: //right
          pp[0] = pp[0] + step;
          pos = 0;
          break;
          case 40: //down
          pp[1] = pp[1] + step;
          pos = 308.5 * 2;
          break;
          case 97: //left
          pp[0] = pp[0] - step;
          pos = 308.5;
          break;
          case 119: //up
          pp[1] = pp[1] - step;
          pos = 308.5 * 3;
          break;
          case 100: //right
          pp[0] = pp[0] + step;
          pos = 0;
          break;
          case 115: //down
          pp[1] = pp[1] + step;
          pos = 308.5 * 2;
          break;
          default:
        }
      }
    });
    if (player == 0) {
      player = 1;
      const randomAudio = audioArr[random(0, audioArr.length - 1)];
      peoples.push([0,0,char1,randomAudio]);
    };
  };

  //keyboard
  //get key number
  window.addEventListener('keypress', playerDirection);

  // start();

let zoom = 10;
const intro = e =>{
  let logoW = 90 + zoom;
  let logoH = 90 + zoom;
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.fillStyle = '#000';
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.drawImage(zombieInfestation,
    canvas.width / 2 - (logoW / 2),
    canvas.height / 2 - (logoH / 2),
    logoW,logoH);
  zoom += 10;
  if (zoom <= 200) {
    window.requestAnimationFrame(intro);
  }
}
  intro();
  zombie04.play();
  setTimeout(start, 2000);
}
