
// // resize header
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
//     document.getElementById('logo').style.fontSize = '30px';
//   } else {
//     document.getElementById('logo').style.fontSize = '67px';
//   }
// }


// book
const two = document.querySelector('.two');
two.addEventListener('mousemove', function(event) {
  const x = event.pageX;
  const y = event.pageY;
  const midX = x - window.innerWidth / 2;
  const midY = y - window.innerHeight / 2;
  
  const book = document.querySelector('.book')
  book.style.left = x + 'px';
  book.style.top = y + 'px';
  
  book.style.transform = 'rotateX(' + (midY * 0.5) + 'deg)rotateY(' + midX + 'deg)';
})


// a

// $(document).ready(function(){
//   if($( window ).width() < 767){
//       $("eight").html("<iframe src='https://editor.p5js.org/LisaLee/embed/6odzDWHs1' style='border:none'></iframe>");
//   }else{
//       $("eight").html("<iframe src='https://editor.p5js.org/LisaLee/embed/FMkbQhd2g'></iframe>");
//   }
// });
// $( window ).resize(function() {
//  if($( window ).width() < 767){
//       $("eight").html("<iframe src='https://editor.p5js.org/LisaLee/embed/6odzDWHs1' style='border:none'></iframe>");
//   }else{
//       $("eight").html("<iframe src='https://editor.p5js.org/LisaLee/embed/FMkbQhd2g'></iframe>");
//   }
// });

let mql = window.matchMedia('(max-width: 600px)');
const eight = document.querySelector('.eight');
const iframe = document.createElement('iframe');
iframe.style.border = "none";
eight.appendChild(iframe);
mql.addEventListener( "change", (e) => {

  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    iframe.src = "https://editor.p5js.org/LisaLee/embed/6odzDWHs1";
    iframe.style.height = "150px";
  } else {
    iframe.style.height = "300px";
    iframe.src = "https://editor.p5js.org/LisaLee/embed/FMkbQhd2g";
  }
});

// 
// // a 
// let font1, font2;
// let graphic;

// function preload() {
//     font1 = loadFont('fonts/drake-neue.ttf')
//     // font2 = loadFont('fonts/inter-var.woff2')
//     console.log(font1)
// }


// const sketch01 = function (graphic) {
//     graphic.setup = function() {
//         graphic.createCanvas(200, 200, graphic.WEBGL);

//         graphic.fill('#fff')
//         graphic.textFont('helvetica')
//         // graphic.textAlign(CENTER, CENTER)
//         graphic.textSize(200)
//         graphic.text('a', 100, 100)
//     }
//     // const container = document.querySelector('.eight');

//     // const canvas1 = document.getElementById('defaultCanvas0');
//     // container.appendChild(canvas1);//not working

//     graphic.draw = function() {
//         graphic.background("#000")
//         const tileSize = 25
//         for (let x = 0; x < 12; x = x + 1) {
//             for (let y = 0; y < 12; y = y + 1) {
//                 const distortion = sin(frameCount * 0.05 + x * 0.5 + y * 0.3) * 25
//                 //source
//                 const sx = x * tileSize + distortion
//                 const sy = y * tileSize
//                 const sw = tileSize
//                 const sh = tileSize

//                 //destination
//                 const dx =  x * tileSize
//                 const dy = y * tileSize
//                 const dw = tileSize
//                 const dh = tileSize
//                 image(graphic,dx, dy, dw, dh, sx, sy, sw, sh)
//             }
//         }
//     }
// }
// // good morning - canvas2
// const sketch02 = function (graphic) {
//     graphic.setup = function(){
//         graphic.createCanvas(200, 100, graphic.WEBGL);

//         graphic.fill("#004d9d")
//         graphic.textSize(16)
//         // graphic.textAlign(CENTER, CENTER)
//         graphic.textLeading(200)
//         graphic.textFont('helvetica')
//         graphic.text("Good\nMorning", 100, 50)
//     }
//     // const container2 = document.querySelector('.twelve');

//     //   const canvas2 = document.getElementById('defaultCanvas0');
//     //   container.appendChild(canvas1);//not working

//     graphic.draw = function() {
//         graphic.background("#e23f12")

//         const tileSize = 10
//         for (let x = 0; x < 20; x = x + 1) {
//             for (let y = 0 ; y < 10; y = y + 1) {  
//             }
//         }
//         image(graphic, frameCount, 0, 200, 100)
//     }
// };

// let canvas01 = new p5(sketch01, 'eight');
// let canvas02 = new p5(sketch02, 'twelve');


// typing
document.querySelector("textarea").addEventListener("keyup", function(){
  const typing = document.querySelector(".typing")
  if(this.value !=""){
    typing.innerHTML = this.value}
    else {
      typing.innerHTML = "start typing"
    }
  })
  
  // banner
  $(document).on('scroll', function() {
    var pixels = $(document).scrollTop()
    $('.banner').css('right', - 5 * pixels)
  })
  
  
  
  // // // good morning
  // function setup(){
  //   createCanvas (200, 100)
  //   graphic2 = createGraphics(200, 100)
  
  //   graphic2.fill("#004d9d")
  //   graphic2.textSize(16)
  //   graphic2.textAlign(CENTER, CENTER)
  //   graphic2.textLeading(200)
  //   graphic2.textFont(font)
  //   graphic2.text("Good\nMorning", 100, 50)
  
  //   const container2 = document.querySelector('.twelve');
  
  //   const canvas2 = document.getElementById('defaultCanvas1');
  //   container2.appendChild(canvas2);
  // }
  
  // function draw(){
  //   background("#e23f12")
  
  //   const tileSize = 10
  //   for (let x = 0; x < 20; x = x + 1) {
  //     for (let y = 0 ; y < 10; y = y + 1) {
  
  //     }
  //   }
  //   image(graphic2, frameCount, 0, 200, 100)
  // }
  
  
  // letters
  const letterBox = document.querySelector('.nine');
  const letters = ['F', 'R', 'I', 'D', 'A', 'Y', 'F', 'R', 'I', 'D', 'A', 'Y', 'F', 'R', 'I', 'D', 'A', 'Y', 'F', 'R', 'I', 'D', 'A', 'Y','F', 'R', 'I', 'D', 'A', 'Y', 'F', 'R', 'I', 'D', 'A', 'Y','F', 'R', 'I', 'D', 'A', 'Y','F', 'R', 'I', 'D', 'A', 'Y','F', 'R', 'I', 'D', 'A', 'Y','F', 'R', 'I', 'D', 'A', 'Y']
  
  for (let i = 0; i < letters.length; i++){
    const letter = document.createElement("div");
    letter.innerHTML = letters[i];
    letter.classList.add("letter");
    letterBox.appendChild(letter);
  }
  
  document.addEventListener("mousemove", function (event) {
    
    const x = event.pageX;
    const y = event.pageY;
    
    document.querySelectorAll(".letter").forEach(div => {
      // find the distance for every letter div
      const dx = div.offsetLeft + 10 - x;
      // every div 100x100 (-x is to ignore the cursor)
      const dy = div.offsetTop + 10 - y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      // distance(diagonal) is a^2 * b^2 = c^2
      const score = Math.exp(dist * -0.009);
      // convert the distance to a "score" between 0 - 1 through an exponential-curve
      
      // div.innerHTML = score.toFixed(2)
      div.style.transform ="scale(" + score + ")";
      div.style.fontWeight = 100 + (200 * Math.round(8 * score));
    });
  });
  
  
  // clock
  function runClock() {
    let now = new Date();
    let hour = now.getHours() % 12;
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let ms = now.getMilliseconds();
    
    const clock = document.querySelector('.clock');
    const hourHand = clock.querySelector('.hour');
    const minHand = clock.querySelector('.minute');
    const secHand = clock.querySelector('.second');
    
    let hourRotation = 360/12 * hour + 0.5 * min;
    let minRotation = 6 * min + 0.1 * sec;
    let secRotation = 6 * sec + 0.006 * ms;
    
    hourHand.style.transform = 'rotate(' + hourRotation + 'deg)';
    minHand.style.transform = 'rotate(' + minRotation + 'deg)';
    secHand.style.transform = 'rotate(' + secRotation + 'deg)';
    
    
    requestAnimationFrame(runClock);
  }
  
  runClock();
  
  
  // who I am
  let phrases = [
    
    'I’m a digital creative and Frontend Developer..',
    'I’m a digital creative and Frontend Developer based in Stockholm.',
    'I’m a digital creative and Frontend Developer based in Stockholm. I\m a disguised nerd..',
    'I’m a digital creative and Frontend Developer based in Stockholm. I\m a nerd. So, I had to learn code.',
    'I’m a digital creative and Frontend Developer based in Stockholm. I\m a nerd. So, I had to learn code. I started self-studying web design and code in the spring of 2020.',
    
    'I’m a digital creative and Frontend Developer based in Stockholm. I started self-studying web design and code in the spring of 2019.',
    
    'I’m a digital creative and Frontend Developer based in Stockholm. I started self-studying web design and code in the spring of 2019. Currently, I\m studying Frontend Developer at Hyper Island.',
    
    'I’m a digital creative and Frontend Developer based in Stockholm. I started self-studying web design and code in the spring of 2019. Currently, I\m studying Frontend Developer at Hyper Island. I work in the fields of web design and graphic design.',
    
    'I’m a digital creative and Frontend Developer based in Stockholm. I started self-studying web design and code in the spring of 2019. Currently, I\m studying Frontend Developer at Hyper Island. I work in the fields of responsive web design, graphic design and art direction.',
    
    'I’m a digital creative and Frontend Developer based in Stockholm. I started self-studying web design and code in the spring of 2019. Currently, I\m studying Frontend Developer at Hyper Island. I work in the fields of responsive web design, graphic design and art direction. I come from the field of urban planning and architecture.',
    
    'I’m a digital creative and Frontend Developer based in Stockholm. I started self-studying web design and code in the spring of 2019. Currently, I\m studying Frontend Developer at Hyper Island. I work in the fields of responsive web design, graphic design and art direction. I recently transitioned from the field of urban planning and sustainable architecture.',
    
    'I’m a digital creative and Frontend Developer based in Stockholm. I started self-studying web design and code in the spring of 2019. Currently, I\m studying Frontend Developer at Hyper Island. I work in the fields of responsive web design, graphic design and art direction. I recently transitioned from the field of urban planning and sustainable architecture. I have a strong conviction that inclusion and diversity are key for qualitative and sustainable design.',
    
    'I’m a digital creative and Frontend Developer based in Stockholm. I started self-studying web design and code in the spring of 2019. Currently, I\m studying Frontend Developer at Hyper Island. I work in the fields of responsive web design, graphic design and art direction. I recently transitioned from the field of urban planning and sustainable architecture. I have a strong conviction that inclusion and diversity, throughout the process, are key for qualitative design, leading to both business growth, societal prosperity and indivudual growth.'
  ]
  $("input").on("input", function (){
    let value = $(this).val()
    let phrase = phrases[value]
    $("div.phrase").html(phrase)
  })
  
  
  
  // contacts
  'use strict'
  
  // create spans for every letter in contacts div
  function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr) }
  
  function makeSpans (selector) {
    var _document$querySelect = document.querySelectorAll(selector)
    var _document$querySelect2 = _toArray(_document$querySelect)
    var elements = _document$querySelect2.slice(0)
    
    return elements.map(function (element) {
      var text = element.innerText.split('')
      var spans = text.map(function (letter) {
        return '<span>' + letter + '</span>'
      }).join('')
      return element.innerHTML = spans
    })
  }
  
  // usage with single selector
  makeSpans('.contacts')
  
  // // or with multiple selectors
  // makeSpans('h1, h2, .heading')
  
  
  
  
  
  
  