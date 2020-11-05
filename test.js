// a - canvas1
let font1;
let font2;
let graphic;

function preload() {
  font1 = loadFont('fonts/spacegrotesk-medium.otf')
  font2 = loadFont('fonts/inter-var.woff2')
}
const g1 = function (graphic) {
  graphic.setup = function() {
    // font = loadFont('fonts/spacegrotesk-medium.otf')
    let canvas1 = graphic.createCanvas(200, 200, graphic.WEBGL);
    canvas1.position(0,0);
    // graphic = createGraphics(200, 200)
    
    graphic.fill('#fff')
    graphic.textFont(font1)
    graphic.textAlign(CENTER, CENTER)
    graphic.textSize(200)
    graphic.text('a', 100, 100)
    const container = document.querySelector('.eight');
    
    const canvas1 = document.getElementById('defaultCanvas0');
    container.appendChild(canvas1);//not working
    }
  graphic.draw = function() {
    background("#000")
    const tileSize = 25
    for (let x = 0; x < 12; x = x + 1) {
      for (let y = 0; y < 12; y = y + 1) {
        const distortion = sin(frameCount * 0.05 + x * 0.5 + y * 0.3) * 25
        //source
        const sx = x * tileSize + distortion
        const sy = y * tileSize
        const sw = tileSize
        const sh = tileSize
        
        //destination
        const dx =  x * tileSize
        const dy = y * tileSize
        const dw = tileSize
        const dh = tileSize
        image(graphic,dx, dy, dw, dh, sx, sy, sw, sh)
      }
    }
  }
};
// create a new instance of p5 and pass in the function for graphic 1
new p5(g1);


// good morning - canvas2
const g2 = function (graphic) {
  graphic.setup = function(){
    let canvas2 = graphic.createCanvas(200, 100, graphic.WEBGL);
    canvas2.position(0,0);

    graphic.fill("#004d9d")
    graphic.textSize(16)
    graphic.textAlign(CENTER, CENTER)
    graphic.textLeading(200)
    graphic.textFont(font2)
    graphic.text("Good\nMorning", 100, 50)
  
  // const container2 = document.querySelector('.twelve');
    
  //   const canvas2 = document.getElementById('defaultCanvas0');
  //   container.appendChild(canvas1);//not working
  // // const canvas2 = document.getElementById('defaultCanvas1');
  // // container.appendChild(canvas2);
}

graphic.draw = function() {
  //for canvas 2
  background("#e23f12")
  
  const tileSize = 10
  for (let x = 0; x < 20; x = x + 1) {
    for (let y = 0 ; y < 10; y = y + 1) {  
    }
  }
  image(graphic, frameCount, 0, 200, 100)
}
};
// create the second instance of p5 and pass in the function for sketch 2
new p5(g2);