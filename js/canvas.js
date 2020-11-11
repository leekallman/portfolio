
// let oneresize;
// window.onresize = function() {
//     sketch01();
// }


window.addEventListener("resize", resizeCanvas, false);

function resizeCanvas() {
    mysketch01.width = eight.offsetWidth;
    mysketch01.height = eight.offsetHeight;
    mysketch02.width = ten.offsetWidth;
    mysketch02.height = ten.offsetHeight;
    console.log(mysketch02.width, ten.offsetWidth);
}

// sketch01
const eight = document.querySelector('.eight');

var graphics;
var sketch01 = function (a) {  
    a.setup = function() {
        let w = eight.offsetWidth;
        let h = eight.offsetHeight;
        a.createCanvas(w, h);
        // a.background(0);
        
        graphics = a.createGraphics(w, h)
        graphics.fill('#fff')
        graphics.textFont('futura')
        graphics.textAlign(a.CENTER, a.CENTER)
        graphics.textSize(200)
        graphics.textSize(w)
        graphics.text('a', w/2, h/2) 
    };
    
    a.draw = function() {
        a.background("#000");
        a.tileSize = 50;
        for (let x = 0; x < 12; x = x + 1) {
            for (let y = 0; y < 12; y = y + 1) {
                
                a.distortion = a.sin(a.frameCount * 0.05 + x * 0.5 + y * 0.3) * 50
                //source
                const sx = x * a.tileSize + a.distortion
                const sy = y * a.tileSize
                const sw = a.tileSize
                const sh = a.tileSize
                
                //destination
                const dx = x * a.tileSize
                const dy = y * a.tileSize
                const dw = a.tileSize
                const dh = a.tileSize
                a.image(graphics, dx, dy, dw, dh, sx, sy, sw, sh);
            };
        };
    };
};
var mysketch01 = new p5(sketch01, 'eight');

// sketch02
const ten = document.querySelector('.ten');
let w1 = ten.offsetWidth;
let h1 = ten.offsetHeight;


var sketch02 = function (b) {    
    b.setup = function(){
        b.createCanvas(w1, h1);
        
        graphics2 = b.createGraphics(w1, h1);
        graphics2.fill("#4CF5B4");
        graphics2.textSize(100);
        graphics2.textAlign(b.RIGHT, b.RIGHT);
        graphics2.textLeading(100);
        graphics2.textFont('futura');
        graphics2.text("Let's\nConnect", 500, 80);
    };
    
    b.draw = function() {
        b.background("#fff");
        
        b.tileSize = 10
        for (let x = 0; x < 20; x = x + 1) {
            for (let y = 0 ; y < 10; y = y + 1) {  
            };
        };
        b.image(graphics2, b.frameCount, 0, 500, 200)
    };
};
var mysketch02 = new p5(sketch02, 'ten');


// play
// let graphic2
// let graphic3

// function setup() {
//   // canvas2 = createCanvas(250, 250)

//   graphic2 = createGraphics(250, 250)

//   graphic2.fill('#ff61b2')
//   graphic2.textFont(font)
//   graphic2.textSize(50)
//   graphic2.textAlign(CENTER, CENTER)
//   graphic2.text('play', width / 2, height / 2)

//   graphic3 = createGraphics(250, 250)

//   graphic3.fill('#ff61b2')
//   graphic3.textFont(font)
//   graphic3.textSize(50)
//   graphic3.textAlign(CENTER, CENTER)
//   graphic3.text('play', width / 2, height / 2)


//   const play = document.querySelector('.play');
//   const canvas = document.querySelector('.p5Canvas');
//   play.append(canvas);
// }

// function draw() {
//   background('#ffb93c')

//   let val = sin(frameCount * 0.02) * 250

//   copy(graphic2, 0, 0, 500, 500, 0, 0, 250 + val, 500)
//   copy(graphic3, 0, 0, 500, 500, 250 + val, 0, 250 - val, 500)
// }


// // sketch03
// const seventeen = document.querySelector('.seventeen');
// const patterns = document.querySelector('.patterns')
// let w3 = seventeen.offsetWidth;
// let h3 = seventeen.offsetHeight;

// patterns.width = w3;
// patterns.height = h3;

// // const canvas2 = document.getElementById('defaultCanvas2');
// // console.log(canvas2)
// patterns.style.width = w3 + "px";
// patterns.style.height = h3 + "px";

// const context = patterns.getContext("2d");
// context.scale(2, 2);
// seventeen.appendChild(patterns);

// //hold and aim for the X, when we load/the cursor is not on the page - aimX = null
// let aimX = null;
// let aimY = null;
// let currentX = null;
// let currentY = null;

// let i = 0;
// const images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg"].map(src => {
//     const image = document.createElement("img");
//     image.src = src;
//     return image;

// });

// document.addEventListener("mousemove", function(event) {
//     aimX = event.pageX;
//     aimY = event.pageY;
//     if (currentX === null){
//         currentX = event.pageX;
//         currentY = event.pageY;
//     };
// });

// document.addEventListener("click", function(){
//     i = i + 1;
//     if(i >= images.length){
//         i = 0;
//     };
// });

// const draw = function() {
//     if (currentX){
//         if(images[i].complete) {
//             context.drawImage(images[i], currentX - 200, currentY - 300, 400, 600);
//         };
//         currentX = currentX + (aimX - currentX) * 0.1;
//         currentY = currentY + (aimY - currentY) * 0.1;
//     };
//     requestAnimationFrame(draw);
// }; 
// draw();

