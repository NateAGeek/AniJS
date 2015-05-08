document.addEventListener("DOMContentLoaded", AniJS_init, false);

function AniJS_init(){
  console.log("Inited AniJS and the DOM is loaded");

  test_AniJS();
}

function test_AniJS(){
  ball = document.getElementById("inline-anijs-test");
  console.log("Got the ball here are its stuff:");
  console.log(ball);

  if(ball.getAttribute("ajs-tween") == "slide"){
    var i = 0;
    setInterval(function(){
      ball.style.left = i + "px";
      i++;
    }, 16);
  }
}

function tween(object, callback) {



  callback();
}