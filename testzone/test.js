
document.addEventListener("DOMContentLoaded", AniJS_init, false);


function AniJS_init(){
  console.log("Inited AniJS and the DOM is loaded");

  test_AniJS();
}

function test_AniJS(){
  console.log(AniJS("inline-anijs-test0"));
  AniJS("inline-anijs-test0").tween("slide", {
    direction: "left",
    speed: 1,
    distance: 100
  });
  AniJS("inline-anijs-test1").tween("slide", {
    direction: "left",
    speed: 1,
    distance: 200
  });
  AniJS("inline-anijs-test2").tween("slide", {
    direction: "left",
    speed: 1,
    distance: 300
  });
  AniJS("inline-anijs-test0").tween("slide", {
    direction: "left",
    speed: 1,
    distance: 100
  });
}