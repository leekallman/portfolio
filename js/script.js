// videos
const vid = document.getElementsByTagName("video");
[].forEach.call(vid, function (item) {
  item.addEventListener('mouseover', hoverVideo, false);
  item.addEventListener('mouseout', hideVideo, false); });
  
  function hoverVideo(e) {
    this.play();
  }
  function hideVideo(e) {
    this.pause();
  }
  
  // book
  const five = document.querySelector('.five');
  five.addEventListener('mousemove', function(event) {
    const x = event.pageX;
    const y = event.pageY;
    const midX = x - window.innerWidth / 2;
    const midY = y - window.innerHeight / 2;
    
    const book = document.querySelector('.book')
    book.style.left = x + 'px';
    book.style.bottom = y + 'px';
    
    book.style.transform = 'rotateX(' + midY + 'deg)rotateY(' + midX + 'deg)';
  });
  
  // typing
  document.querySelector("textarea").addEventListener("keyup", function() {
    const typing = document.querySelector(".typing")
    if(this.value !=""){
      typing.innerHTML = this.value
    } else {
      typing.innerHTML = "start typing"
    };
  });
  
  // letters
  const letterBox = document.querySelector('.nine');
  const letters = ['F', 'R', 'I', 'D', 'A', 'Y', 'F', 'R', 'I', 'D', 'A', 'Y', 
  'F', 'R', 'I', 'D', 'A', 'Y', 'F', 'R', 'I', 'D', 'A', 'Y','F', 'R', 'I', 'D', 
  'A', 'Y', 'F', 'R', 'I', 'D', 'A', 'Y','F', 'R', 'I', 'D', 'A', 'Y','F', 'R', 
  'I', 'D', 'A', 'Y','F', 'R', 'I', 'D', 'A', 'Y','F', 'R', 'I', 'D', 'A', 'Y',
  'F', 'R', 'I', 'D', 'A', 'Y', 'F', 'R', 'I', 'D'];
  
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
      const score = Math.exp(dist * -0.01);
      // convert the distance to a "score" between 0 - 1 through an exponential-curve
      
      // div.innerHTML = score.toFixed(2)
      div.style.transform ="scale(" + 2*score + ")";
      div.style.fontWeight = (200 * Math.round(8 * score));
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
  };
  runClock();
  
  
  // who I am
  let phrases = [
    'I’m a digital creative and Frontend Developer..',
    'I’m a digital creative and Frontend Developer based in Stockholm.',
    'I’m a digital creative and Frontend Developer based in Stockholm. I’m a disguised nerd..',
    'I’m a digital creative and Frontend Developer based in Stockholm. I’m a nerd. So, I had to learn code.',
    'I’m a digital creative and Frontend Developer based in Stockholm. I’m a nerd. So, I had to learn code. I started self-studying web design and code in the spring of 2020.',
    'I’m a digital creative and Frontend Developer based in Stockholm. I started self-studying web design and code in the spring of 2019.',
    'I’m a digital creative and Frontend Developer based in Stockholm. I started self-studying web design and code in the spring of 2019. Currently, I’m studying Frontend Developer at Hyper Island.',
    'I’m a digital creative and Frontend Developer based in Stockholm. I started self-studying web design and code in the spring of 2019. Currently, I’m studying Frontend Developer at Hyper Island. I work in the fields of web design and graphic design.',
    'I’m a digital creative and Frontend Developer based in Stockholm. I started self-studying web design and code in the spring of 2019. Currently, I’m studying Frontend Developer at Hyper Island. I work in the fields of responsive web design, graphic design and art direction.',
    'I’m a digital creative and Frontend Developer based in Stockholm. I started self-studying web design and code in the spring of 2019. Currently, I’m studying Frontend Developer at Hyper Island. I work in the fields of responsive web design, graphic design and art direction. I come from the field of urban planning and architecture.',
    'I’m a digital creative and Frontend Developer based in Stockholm. I started self-studying web design and code in the spring of 2019. Currently, I’m studying Frontend Developer at Hyper Island. I work in the fields of responsive web design, graphic design and art direction. I recently transitioned from the field of urban planning and sustainable architecture.',
    'I’m a digital creative and Frontend Developer based in Stockholm. I started self-studying web design and code in the spring of 2019. Currently, I’m studying Frontend Developer at Hyper Island. I work in the fields of responsive web design, graphic design and art direction. I recently transitioned from the field of urban planning and sustainable architecture. I have a strong conviction that inclusion and diversity are key for qualitative and sustainable design.',
    'I’m a digital creative and Frontend Developer based in Stockholm. I started self-studying web design and code in the spring of 2019. Currently, I’m studying Frontend Developer at Hyper Island. I work in the fields of responsive web design, graphic design and art direction. I recently transitioned from the field of urban planning and sustainable architecture. I have a strong conviction that inclusion and diversity, throughout the process, are key for qualitative design, leading to both business growth, societal prosperity and indivudual growth.'
  ]
  $("input").on("input", function() {
    let value = $(this).val();
    let phrase = phrases[value];
    $("div.phrase").html(phrase);
  });
  
  // contacts
  'use strict'
  
  // create spans for every letter in contacts div
  function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr) }
  
  function makeSpans(selector) {
    var _document$querySelect = document.querySelectorAll(selector);
    var _document$querySelect2 = _toArray(_document$querySelect);
    var elements = _document$querySelect2.slice(0);
    
    return elements.map(function (element) {
      var text = element.innerText.split('');
      var spans = text.map(function (letter) {
        return '<span>' + letter + '</span>'
      }).join('');
      return element.innerHTML = spans
    });
  };
  
  // usage with single selector
  makeSpans('.contacts');
  
  
  
  