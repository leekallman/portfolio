// re-size text on scroll
// $(document).on("scroll", function() {
//     var pixels = $(document).scrollTop()
//     var font = pixels /100 + 12
//     $(".six").css("font-size", font)

//     $("span").html(font)
// });

// a
let font;
let graphic;

function preload() {
  font = loadFont('fonts/spacegrotesk-medium.otf')
}
function setup() {
  createCanvas(200, 200)
  
  graphic = createGraphics(200, 200)
  
  graphic.fill('#fff')
  graphic.textFont(font)
  graphic.textAlign(CENTER, CENTER)
  graphic.textSize(200)
  graphic.text('a', 100, 100)
  
  const container = document.querySelector('.eight');
  
  const canvas1 = document.getElementById('defaultCanvas0');
  container.appendChild(canvas1);//not working
}

function draw() {
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

// typing
document.querySelector("textarea").addEventListener("keyup", function(){
  const typing = document.querySelector(".typing")
  if(this.value !=""){
    typing.innerHTML = this.value}
    else {
      typing.innerHTML = "start typing"
    }
  })
  
  // // good morning
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
    
  //   // const canvas2 = document.getElementById('defaultCanvas1');
  //   // container.appendChild(canvas2);
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
  const letterBox = document.querySelector('.fourteen');
  const letters = ['F', 'R', 'I', 'D', 'A', 'Y', 'F', 'R', 'I', 'D', 'A', 'Y', 'F', 'R', 'I', 'D', 'A', 'Y', 'F', 'R', 'I', 'D', 'A', 'Y','F', 'R', 'I', 'D', 'A', 'Y', 'F', 'R', 'I', 'D', 'A', 'Y','F', 'R', 'I', 'D', 'A', 'Y','F', 'R', 'I', 'D', 'A', 'Y','F', 'R', 'I', 'D', 'A', 'Y','F', 'R', 'I', 'D', 'A', 'Y']
  
  for (let i = 0; i < letters.length; i++){
    const letter = document.createElement("div");
    letter.innerHTML = letters[i];
    letter.classList.add("letter");
    letterBox.appendChild(letter);
  }
  
  document.addEventListener("mousemove", function (event) {
    
    const x = event.pageX
    const y = event.pageY
    
    document.querySelectorAll(".letter").forEach(div => {
      // find the distance for every letter div
      const dx = div.offsetLeft + 50 - x
      // every div 100x100 (-x is to ignore the cursor)
      const dy = div.offsetTop + 50 - y
      const dist = Math.sqrt(dx * dx + dy * dy)
      // distance(diagonal) is a^2 * b^2 = c^2
      const score = Math.exp(dist * -0.005)
      // convert the distance to a "score" between 0 - 1 through an exponential-curve
      
      // div.innerHTML = score.toFixed(2)
      div.style.transform ="scale(" + score + ")"
      div.style.fontWeight = 100 + (100 * Math.round(8 * score))
    })
  })