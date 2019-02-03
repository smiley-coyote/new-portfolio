var pagePosition = "main";


/* 

---------------------
main page animations:
    main -> blog
      1. tree zooms out and floats down off of the screen while fading.
      2. clouds fade in and animate
      3. upper nav, title, and blog windows fade in

    main -> My work
      1. tree zooms out and floats down until all of the branches are visible.
      2. clouds fade in and animate
      3. portfolio cards, title, and upper nav fade in

    main -> About me
      1. profile picture fades in
      2. grass fades out
      3. about me window and title fade in

    main -> Contact
      1. tree zooms out and floats up until roots are visible
      2. ground also floats up
      3. contact cards, title, and upper nav bar fade in

--------------------

blog page animations:
    blog -> My work
      1. tree floats upwards
      2. clouds remain the same
      3. portfolio cards, title, and upper nav fade in

    blog -> About me
      1. tree floats upwards and zooms in to initial size/location
      2. clouds fade out
      3. about me window and title fade in
    
    blog -> Contact
      1. tree floats upwards until roots are exposed and slightly grows in scale
      2. ground floats upwards as well until covering around 3/4 of screen
      3. contact cards, title, and upper nav bar fade in

--------------------

Contact page animations:
    contact -> 

*/

function navButton(x) {
  var p = pagePosition;
  var goTo = new Function('a', 'b', 'return a + "To" + b');
  var navigate = goTo(p, x);
  if(navigate === "mainToBlog"){
    alert("Main -> Blog")
  }
  if(navigate === "mainToMyWork"){
    mainToMyWork();
  }
  if(navigate === "mainToContact"){
    alert("Main -> Contact")
  }
  if(navigate === "mainToAboutMe"){
    alert("Main -> About Me")
  }
}

function mainToMyWork() {
  pagePosition = "my-work";
  document.getElementById("tree").style.animation = "zoomOut 2s ease-out normal forwards";
  document.getElementById ("nav").style.animation = "fadeOut .5s ease-in-out forwards";
  document.getElementById ("nav").style.animation = "navShrink 2s ease-in-out forwards";
  document.getElementById ("portfolio").style.display = "block";
  document.getElementById ("portfolio").style.animation = "fadeIn 2s linear 2s forwards";
  document.getElementById("grass").style.animation = "fadeOut .5s forwards running";
  document.getElementById("portfolio-header").style.animation = "fadeIn 2s linear 2s forwards";
  document.getElementById("cloud1").style.animation = "floatRight1 120s linear 1s forwards";
  document.getElementById("cloud2").style.animation = "floatRight1 220s linear 1s forwards";
  document.getElementById("cloud3").style.animation = "floatRight1 150s linear 1s forwards";
  document.getElementById("cloud4").style.animation = "floatRight1 220s linear 1s forwards";
  document.getElementById("cloud5").style.animation = "floatRight1 200s linear 1s forwards";
  var ele = document.getElementsByClassName('nav-button');
for (var i = 0; i < ele.length; i++ ) {
    ele[i].style.animationPlayState = "running";
}
}

function mainToBlog(){

}

