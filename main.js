// import JSConfetti from 'js-confetti'

// const jsConfetti = new JSConfetti()

// jsConfetti.addConfetti()


onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};


// document.getElementsByClassName("confetti")[0].addEventListener("click", () => {
//   let canvas = document.createElement("canvas");
//   let container = document.getElementsByClassName("button-wrapper")[0];
//   canvas.width = 600;
//   canvas.height = 600;
//   container.appendChild(canvas);

//   let confetti_button = confetti.create(canvas);
//   confetti_button().then(() => container.removeChild(canvas));
// });

function handleconfetti() {

  const jsConfetti = new JSConfetti();

  jsConfetti.addConfetti({
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
 });

 jsConfetti.addConfetti({
  confettiColors: [
    '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
  ],
});

jsConfetti.addConfetti({
  confettiRadius: 6,
});

jsConfetti.addConfetti({
  confettiRadius: 6,
  confettiNumber: 500,
});

  jsConfetti.addConfetti()


  var box = document.getElementById("wishes");
  let maintext = document.getElementById("main-text");
  if(box.className == "heart"){
    box.className = "wish-box"
    let text = document.getElementById("text");
    text.className = "hide";
    maintext.className = "" ;
  }else {
    box.className == "heart"
    maintext = "hide";
  }
  // if (box.style.display === "none" || box.style.display === "") {
  //     box.style.display = "block";
  //     // For a sliding effect, you might want to use a CSS transition or a library for animations
  // } else {
  //     box.style.display = "none";
  // }
}