let keyboard = ''
const sky = document.getElementById('sky')
const mountains = document.getElementById('mountains')
const trees2 = document.getElementById('trees2')
const trees1 = document.getElementById('trees1')
const para = document.getElementById('ara')

/******** Back to Top ********/

// const scrollup = document.querySelector("#btt");

// scrollup.addEventListener("click", function () {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth"
//     });
// });

/******** animation typing texte ********/

let glowInTexts = document.querySelectorAll(".glowIn");
glowInTexts.forEach(glowInText => {
  let letters = glowInText.textContent.split("");
  glowInText.textContent = "";
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i * 0.05}s`;
    glowInText.append(span);
  });
});


document.querySelectorAll('a[href="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

document.addEventListener('keydown', function (event) {
  keyboard += event.key;
  if (keyboard.endsWith('huy')) {
      console.log('blanc')
      sky.classList.add('sky2')
      mountains.classList.add('mountains2')
      trees2.classList.add('trees22')
      trees1.classList.add('trees12')
      keyboard = ''
  } if (keyboard.endsWith('cel')) {
    sky.classList.remove('sky2')
    mountains.classList.remove('mountains2')
    trees2.classList.remove('trees22')
    trees1.classList.remove('trees12')
    keyboard = ''
  }
});