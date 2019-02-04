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
  // From main page ==================
  if(navigate === "mainToBlog"){
    alert("Main -> Blog")
  }
  if(navigate === "mainToAboutMe"){
    mainToAboutMe();
  }
  if(navigate === "mainToMyWork"){
    mainToMyWork();
  }
  if(navigate === "mainToContact"){
    mainToContact();
  }


  // From My Work page ==================
  if(navigate === "myWorkToBlog"){
    alert("My Work -> Blog")
  }
  if(navigate === "myWorkToAboutMe"){
    alert("My Work -> About Me")
  }
  if(navigate === "myWorkToContact"){
    alert("My Work -> Contact")
  }
  // From Blog page ==================
  // From Contact page ==================
  
}

function mainToMyWork() {
  pagePosition = "myWork";
  document.getElementById("nav-mywork").style.color = "yellow";
  document.getElementById("tree").style.animation = "treeZoomOut 2s ease-out normal forwards";
  document.getElementById ("nav").style.animation = "fadeOut .5s ease-in-out forwards";
  document.getElementById ("nav").style.animation = "navShrink 1s ease-in forwards";
  document.getElementById ("portfolio").style.display = "block";
  document.getElementById ("portfolio").style.animation = "fadeIn 2s linear 2s forwards";
  document.getElementById("grass").style.animation = "grassShrinkMoveOut 1s forwards running";
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

function mainToAboutMe(){
  pagePosition = "AboutMe";
  document.getElementById("nav-aboutme").style.color = "yellow";
   document.getElementById("about-me").style.display = "block";
   document.getElementById("about-me").style.animation = "fadeIn 2s linear 4s forwards";
  document.getElementById("tree").style.animation = "treeZoomOutMoveDown 3.5s ease-out normal forwards";
  document.body.style.animation="toSkyBlue 5s linear 2s forwards";
  document.getElementById("clouds-layer1").style.animation = "allcloudsmovedown 2s linear 1.5s forwards";
  document.getElementById("clouds-layer2").style.animation = "allcloudsmovedown 3s linear 1.5s forwards";
  document.getElementById("clouds-layer3").style.animation = "allcloudsmovedown 4s linear 1.5s forwards";
  document.getElementById ("nav").style.animation = "fadeOut .5s ease-in-out forwards";
  document.getElementById ("nav").style.animation = "navShrink 1s ease-in-out forwards";
  document.getElementById("grass").style.animation = "grassMoveOut .5s forwards running";
  document.getElementById("cloud1").style.animation = "floatRight1 120s linear 4s forwards";
  document.getElementById("cloud2").style.animation = "floatRight1 220s linear 4s forwards";
  document.getElementById("cloud3").style.animation = "floatRight1 150s linear 4s forwards";
  document.getElementById("cloud4").style.animation = "floatRight1 220s linear 4s forwards";
  document.getElementById("cloud5").style.animation = "floatRight1 200s linear 4s forwards";
  var ele = document.getElementsByClassName('nav-button');
for (var i = 0; i < ele.length; i++ ) {
    ele[i].style.animationPlayState = "running";
}
}

function mainToContact() {
  pagePosition = "blog";
  document.getElementById("nav-contact").style.color = "yellow";
  document.getElementById("tree").style.animation = "treeZoomOutMoveUp 3s ease-out normal forwards";
  document.getElementById("ground").style.animation = "groundUp 3s ease-out normal forwards";
  document.getElementById ("nav").style.animation = "fadeOut .5s ease-in-out forwards";
  document.getElementById ("nav-list").style.animation = "shrinkHeight .5s ease-in-out forwards";
  document.getElementById ("nav").style.animation = "navShrink2 2.5s ease-in-out forwards";

  document.getElementById("grass").style.animation = "fadeOut .5s forwards running";
  document.getElementById("contact").style.animation = "fadeIn 2s forwards 3s running";
  document.getElementById("contact").style.display = "block";
  var ele = document.getElementsByClassName('nav-button');
for (var i = 0; i < ele.length; i++ ) {
    ele[i].style.animationPlayState = "running";
}
}

