
$(document).ready(function(){
// front page code
var str1 = "<h1>Hello! My name is Nicholas Alex</h1>";
var str2 = "<p>I am a Full Stack Web Developer!</p>";
var str3 = "<button>Enter</button>";
var newArr = str1.split("");
var number = 0;
var isElement = false;
var typing;
var completedHeading = false;
var completedParagraph = false;


frontPage();

function frontPage(){
  var building = "go"
  var website= sessionStorage.getItem("visited");
  // if(website === null)
  // if(building === "go")
  if(website === null){
    console.log("typing");
    document.getElementById("front-page").style.display = "block";
    setTimeout(typer, 500);
    setTimeout(loadContent, 100)
  }
  else {
    document.getElementById("content").style.visibility = "visible";
    document.getElementById("main-header").style.visibility = "visible";
    document.getElementById("forest-image").style.display = "block";
    document.getElementById("content").style.display = "block";
    document.getElementById("wrapper").style.backgroundColor = "white";
    document.getElementById("butterfly").style.animationPlayState = "running";
    document.getElementById("frame-1").style.animationPlayState = "running";
    document.getElementById("frame-2").style.animationPlayState = "running";
    document.getElementById("grass").style.animationPlayState = "running";
    document.getElementById("grass2").style.animationPlayState = "running";
  }
}

function typer(){
  
  document.getElementById("content-here").innerHTML = "";
 typing = setInterval(checkItem, 60);
}

function checkItem() {
  if (number <= newArr.length) {
    if (newArr[number] === "<") {
      isElement = true;
      myFunction2();
    }
    if (newArr[number] === ">") {
      $("#content-here").append("<span>" + newArr[number]);
      isElement = false;
      number++;
    }
    else {
      myFunction2();
    }
  } else {
    if (completedHeading === false && completedParagraph === false) {
      clearInterval(typing);
      $("#content-here").append("<br>");
      newArr = str2.split("");
      number = 0;
      typing = setInterval(checkItem, 60);
      completedHeading = true;
    } 
    else if(completedHeading === true && completedParagraph === false){
      clearInterval(typing);
      $("#content-here").append("<br>");
      newArr = str3.split("");
      number = 0;
      typing = setInterval(checkItem, 60);
      completedParagraph = true;
    }
    
    else {
      clearInterval(typing);
      document.getElementById("run-button").style.display = "block";
    }

  }
}

function myFunction2() {
  if (isElement === true) {
    $("#content-here").append("<span>" + newArr[number]);
    number++;
  } else {
    $("#content-here").append(newArr[number]);
    number++;
  }

}


function loadContent(){
  document.getElementById("forest-image").style.display = "block";
  document.getElementById("content").style.display = "block";
  document.getElementById("wrapper").style.backgroundColor = "white";
}
// end of front page code
});

function runButton(){
  document.getElementById("run-button").style.display = "none";
  document.getElementById("content-here").style.display = "none";
  document.getElementById("content-here2").style.display = "block";
}

function enterSite() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth;
  if(screenWidth > 700){
  document.getElementById("content-here").style.display = "none";
  // document.getElementById("content-here2").style.display = "none";
  document.getElementById("content").style.visibility = "visible";
  document.getElementById("content-here2").style.animationPlayState = "running";
  document.getElementById("heading-gone").style.visibility = "hidden";
  document.getElementById("paragraph-gone").style.visibility = "hidden";
  document.getElementById("enter-button").style.display = "none";
  document.getElementById("content-here-header").style.animationPlayState = "running";
  document.getElementById("content-here-par").style.animationPlayState = "running";
  // document.getElementById("front-page-main-heading").style.display = "block";
  // document.getElementById("front-page-main-heading").style.animationPlayState = "running";
  // document.getElementById("heading-first").style.animationPlayState = "running";
  // document.getElementById("paragraph-first").style.animationPlayState = "running";
  document.getElementById("bottom-border").style.animationPlayState = "running";
  document.getElementById("front-page").style.animation = "fadeOut 1s linear 2s forwards";
  setTimeout(pageStart, 2500);
  }
  else{
    document.getElementById("content-here").style.display = "none";
    document.getElementById("content-here2").style.display = "none";
    document.getElementById("enter-button").style.display = "none";
    document.getElementById("main-header").style.visibility = "visible";
    document.getElementById("front-page").style.animation = "fadeOut 1s linear forwards";
    setTimeout(pageStart, 1000);
  }
}

function pageStart() {
  document.getElementById("content-here2").style.animation = "turnToBlack .5s linear forwards";
  document.getElementById("butterfly").style.animationPlayState = "running";
  document.getElementById("frame-1").style.animationPlayState = "running";
  document.getElementById("frame-2").style.animationPlayState = "running";
  document.getElementById("grass").style.animationPlayState = "running";
  document.getElementById("grass2").style.animationPlayState = "running";
  sessionStorage.setItem("visited", "yes")
  document.getElementById("front-page").style.display = "none";
}

var pagePosition = "Main";
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
var originalWidth = 0;
var screenSizeCheck = false;




checkScreenSize();

function checkScreenSize() {
  if (screenSizeCheck === false) {
    originalWidth = window.innerWidth || document.documentElement.clientWidth;
    screenSizeCheck = true;
  }
}

function navButton(x) {
  var p = pagePosition;
  var goTo = new Function('a', 'b', 'return a + "To" + b');
  var navigate = goTo(p, x);







  // Screen size large




  // From main page ==================

  if (navigate === "MainToBlog") {
    alert("Blog Coming Soon!")
  }
  if (navigate === "MainToAboutMe") {

    mainToAboutMe();

  }
  if (navigate === "MainToMyWork") {
    mainToMyWork();
  }
  if (navigate === "MainToContact") {
    mainToContact();
  }



  // From My Work page ==================
  if (navigate === "MyWorkToBlog") {
    alert("Blog Coming Soon!")

  }
  if (navigate === "MyWorkToAboutMe") {
    myWorkToAboutMe();
  }
  if (navigate === "MyWorkToContact") {
    myWorkToContact();
  }
  // From About Me page ==================

  if (navigate === "AboutMeToBlog") {
    alert("Blog Coming Soon!")

  }
  if (navigate === "AboutMeToContact") {
    aboutMeToContacts();
  }
  if (navigate === "AboutMeToMyWork") {
    aboutMeToMyWork();
  }

  // **insert code here**

  // From Contact page ==================
  if (navigate === "ContactToBlog") {
    alert("Blog Coming Soon!")

  }
  if (navigate === "ContactToAboutMe") {
    contactToAboutMe();
  }
  if (navigate === "ContactToMyWork") {
    contactToMyWork();
  }


}

function mainToMyWork() {

  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  pagePosition = "MyWork";
  document.getElementById("content-here2").style.display = "none";
  document.getElementById("main-header").style.zIndex = "-10";
  document.getElementById("nav").style.border = "none";
  document.getElementById("main-header").style.animation = "fadeOut .3s linear forwards";
  document.getElementById("nav").style.borderLeft = "8px solid black";
  document.getElementById("butterfly").style.display = "none";
  document.getElementById("grass3").style.animation = "fadeOut .2s linear forwards";
  document.getElementById("forest-image").style.animation = "fadeOut 1s linear forwards";
  document.getElementById("tree-bark").style.display = "none";
  document.getElementById("nav-mywork").style.color = "yellow";
  document.getElementById("wrapper").style.backgroundColor = "#B1F2F2";
  // document.getElementById ("nav").style.animation = "fadeOut .5s ease-in-out forwards";
  document.getElementById("portfolio").style.display = "block";
  document.getElementById("portfolio").style.animation = "fadeIn 2s linear 2s forwards";
  document.getElementById("grass").style.animation = "grassShrinkMoveOut 1s forwards running";
  document.getElementById("grass2").style.animation = "grassShrinkMoveOut2 1s forwards running";
  document.getElementById("portfolio-header").style.animation = "fadeIn 2s linear 2s forwards";
  document.getElementById("cloud1").style.animation = "floatRight1 120s linear 1s forwards";
  document.getElementById("cloud2").style.animation = "floatRight1 220s linear 1s forwards";
  document.getElementById("cloud3").style.animation = "floatRight1 150s linear 1s forwards";
  document.getElementById("cloud4").style.animation = "floatRight1 220s linear 1s forwards";
  document.getElementById("cloud5").style.animation = "floatRight1 200s linear 1s forwards";
  var ele = document.getElementsByClassName('nav-button');

  if (viewportWidth > 1250) {
    for (var i = 0; i < ele.length; i++) {
      ele[i].style.animation = "paddingChange 2s forwards";
    }
    document.getElementById("nav").style.animation = "navShrink 1s ease-in forwards";
    document.getElementById("tree").style.animation = "treeMainToMyWork 2s ease-out normal forwards";

  }
  if (viewportWidth <= 1250 && viewportWidth > 1060) {
    for (var i = 0; i < ele.length; i++) {
      ele[i].style.animation = "paddingChange 2s forwards";
    }
    document.getElementById("nav").style.animation = "navShrink2 1s ease-in forwards";
    document.getElementById("tree").style.animation = "treeMainToMyWork2 2s ease-out normal forwards";

  }
  if (viewportWidth <= 1060 && viewportWidth > 950) {
    for (var i = 0; i < ele.length; i++) {
      ele[i].style.animation = "paddingChange 2s forwards";
    }
    document.getElementById("nav").style.animation = "navShrink3 1s ease-in forwards";
    document.getElementById("tree").style.animation = "treeMainToMyWork3 2s ease-out normal forwards";
    document.getElementById("forest-ground").style.animation = "groundPosition 2s ease-out normal forwards";
  }

  if (viewportWidth <= 950 && viewportWidth > 599) {
    for (var i = 0; i < ele.length; i++) {
      ele[i].style.animation = "paddingChange 2s forwards";
    }
    document.getElementById("nav").style.animation = "navShrink4 1s ease-in forwards";
    document.getElementById("tree").style.animation = "treeMainToMyWork4 2s ease-out normal forwards";
    document.getElementById("nav").style.borderLeft = "none";
    document.getElementById("nav-list").style.animation = "shrinkHeight2 1s ease-in-out forwards";
    document.getElementById("forest-ground").style.animation = "groundPosition2 2s ease-out normal forwards";
  }
  if (viewportWidth <= 500) {
    for (var i = 0; i < ele.length; i++) {
      ele[i].style.animation = "paddingChange2 2s forwards";
    }
    document.getElementById("nav").style.animation = "navShrinkMobile 2s ease-in forwards";
    document.getElementById("tree").style.animation = "treeMainToMyWork5 2s ease-out normal forwards";
    document.getElementById("nav").style.borderLeft = "none";
    document.getElementById("nav").style.textAlign = "center";
    document.getElementById("forest-ground").style.animation = "groundPosition2 2s ease-out normal forwards";
  }
}

function mainToAboutMe() {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  pagePosition = "AboutMe";
  document.getElementById("front-page-main-heading").style.display = "none";
  document.getElementById("main-header").style.zIndex = "-10";
  document.getElementById("butterfly").style.display = "none";
  document.getElementById("grass3").style.animation = "fadeOut .5s linear forwards";
  document.getElementById("main-header").style.animation = "fadeOut .3s linear forwards";
  document.getElementById("nav").style.border = "none";
  document.getElementById("nav").style.borderLeft = "8px solid black";
  document.getElementById("forest-image").style.animation = "fadeOut 1s linear forwards";
  document.getElementById("tree-bark").style.display = "none";
  document.getElementById("nav-aboutme").style.color = "yellow";
  document.getElementById("about-me").style.display = "block";
  document.getElementById("about-me").style.animation = "fadeIn 2s linear 4s forwards";
  document.getElementById("find-me").style.display = "block";
  document.getElementById("findme-card-1").style.animation = "PlopIn .5s linear 4.7s forwards";
  document.getElementById("findme-card-2").style.animation = "PlopIn .5s linear 4.8s forwards";
  document.getElementById("wrapper").style.animation = "toSkyBlue 4s linear forwards";
  document.getElementById("clouds-layer1").style.animation = "allcloudsmovedown 2s linear 1.5s forwards";
  document.getElementById("clouds-layer2").style.animation = "allcloudsmovedown 3s linear 1.5s forwards";
  document.getElementById("clouds-layer3").style.animation = "allcloudsmovedown 4s linear 1.5s forwards";
  document.getElementById("nav").style.animation = "fadeOut .5s ease-in-out forwards";
  document.getElementById("grass").style.animation = "grassMoveOut .5s forwards running";
  document.getElementById("grass2").style.animation = "grassMoveOut2 .5s forwards running";
  document.getElementById("cloud1").style.animation = "floatRight1 120s linear 4s forwards";
  document.getElementById("cloud2").style.animation = "floatRight1 220s linear 4s forwards";
  document.getElementById("cloud3").style.animation = "floatRight1 150s linear 4s forwards";
  document.getElementById("cloud4").style.animation = "floatRight1 220s linear 4s forwards";
  document.getElementById("cloud5").style.animation = "floatRight1 200s linear 4s forwards";
  var ele = document.getElementsByClassName('nav-button');

  if (viewportWidth > 1250) {
    for (var i = 0; i < ele.length; i++) {
      ele[i].style.animation = "paddingChange 1.5s forwards";
    }
    document.getElementById("nav").style.animation = "navShrink 1s ease-in-out forwards";
    document.getElementById("tree").style.animation = "treeMainToAboutMe 1.5s linear normal forwards";
  }
  if (viewportWidth <= 1250 && viewportWidth > 1060) {
    for (var i = 0; i < ele.length; i++) {
      ele[i].style.animation = "paddingChange 1.5s forwards";
    }
    nav.classList.add("med-large-nav");
    document.getElementById("nav").style.animation = "navShrink2 1s ease-in-out forwards";
    document.getElementById("tree").style.animation = "treeMainToAboutMe2 3.5s ease-out normal forwards";
  }
  if (viewportWidth <= 1060 && viewportWidth > 950) {
    for (var i = 0; i < ele.length; i++) {
      ele[i].style.animation = "paddingChange 1.5s forwards";
    }
    document.getElementById("nav").style.animation = "navShrink3 1s ease-in-out forwards";
    document.getElementById("tree").style.animation = "treeMainToAboutMe3 3.5s ease-out normal forwards";
  }
  if (viewportWidth <= 950 && viewportWidth > 620) {
    for (var i = 0; i < ele.length; i++) {
      ele[i].style.animation = "paddingChange 1.5s forwards";
    }
    document.getElementById("nav").style.animation = "navShrink4 1s ease-in forwards";

    document.getElementById("nav").style.borderLeft = "none";
    document.getElementById("nav-list").style.animation = "shrinkHeight2 1s ease-in-out forwards";
    document.getElementById("tree").style.animation = "treeMainToAboutMe4 3.5s ease-out normal forwards";
  }
  if (viewportWidth <= 500) {
    for (var i = 0; i < ele.length; i++) {
      ele[i].style.animation = "paddingChange2 2s forwards";
    }
    document.getElementById("nav").style.animation = "navShrinkMobile 2s ease-in forwards";
    document.getElementById("tree").style.animation = "treeMainToAboutMe5 3.5s ease-out normal forwards";
    document.getElementById("nav").style.borderLeft = "none";
    document.getElementById("nav").style.textAlign = "center";

  }
}

function mainToContact() {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  pagePosition = "Contact";
  document.getElementById("front-page-main-heading").style.display = "none";
  document.getElementById("main-header").style.zIndex = "-10";
  document.getElementById("butterfly").style.display = "none";
  document.getElementById("grass3").style.visibility = "hidden";
  document.getElementById("forest-image").style.animation = "forestImageBlurMore 2s linear forwards";
  document.getElementById("main-header").style.animation = "fadeOut .3s linear forwards";
  document.getElementById("nav").style.border = "none";
  document.getElementById("tree-bark").style.display = "none";
  document.getElementById("nav-contact").style.color = "yellow";


  document.getElementById("nav").style.animation = "fadeOut .5s ease-in-out forwards";


  document.getElementById("grass").style.visibility = "hidden";
  document.getElementById("grass2").style.visibility = "hidden";
  document.getElementById("contact").style.animation = "fadeIn 2s forwards 2s running";
  document.getElementById("contact").style.display = "block";
  var ele = document.getElementsByClassName('nav-button');


  if (viewportWidth > 1250) {
    for (var i = 0; i < ele.length; i++) {
      ele[i].style.animation = "paddingChange 1.5s forwards";
    }
    document.getElementById("nav").style.animation = "navShrinkContacts 2s ease-in-out forwards";
    document.getElementById("tree").style.animation = "treeMainToContact 2s ease-out normal forwards";
    document.getElementById("nav-list").style.animation = "shrinkHeight .5s ease-in-out forwards";
    document.getElementById("forest-ground").style.animation = "groundUp 2s ease-out normal forwards";
  }
  if (viewportWidth <= 1250 && viewportWidth > 1060) {
    for (var i = 0; i < ele.length; i++) {
      ele[i].style.animation = "paddingChange 1.5s forwards";
    }
    document.getElementById("nav").style.animation = "navShrinkContacts1250 2s ease-in-out forwards";
    document.getElementById("tree").style.animation = "treeMainToContact2 2s ease-out normal forwards";
    document.getElementById("nav-list").style.animation = "shrinkHeight .5s ease-in-out forwards";
    document.getElementById("forest-ground").style.animation = "groundUp 2s ease-out normal forwards";
  }
  if (viewportWidth <= 1060 && viewportWidth > 950) {
    for (var i = 0; i < ele.length; i++) {
      ele[i].style.animation = "paddingChange 1.5s forwards";
    }
    document.getElementById("nav").style.animation = "navShrinkContacts1060 2s ease-in-out forwards";
    document.getElementById("tree").style.animation = "treeMainToContact3 2s ease-out normal forwards";
    document.getElementById("nav-list").style.animation = "shrinkHeight .5s ease-in-out forwards";
    document.getElementById("forest-ground").style.animation = "groundUp 2s ease-out normal forwards";
  }
  if (viewportWidth <= 950 && viewportWidth > 600) {
    for (var i = 0; i < ele.length; i++) {
      ele[i].style.animation = "paddingChange 1.5s forwards";
    }
    document.getElementById("nav").style.animation = "navShrink4 2s ease-in-out forwards";
    document.getElementById("tree").style.animation = "treeMainToContact4 2s ease-out normal forwards";
    document.getElementById("nav-list").style.animation = "shrinkHeight2 .5s ease-in-out forwards";
    document.getElementById("forest-ground").style.animation = "groundUp4 2s ease-out normal forwards";
  }
  if (viewportWidth <= 500) {
    for (var i = 0; i < ele.length; i++) {
      ele[i].style.animation = "paddingChange2 2s forwards";
    }
    document.getElementById("nav").style.animation = "navShrinkMobile 2s ease-in forwards";
    document.getElementById("forest-ground").style.animation = "groundUp4 2s ease-out normal forwards";
    document.getElementById("tree").style.animation = "treeMainToContact5 2s ease-out normal forwards";
    document.getElementById("nav").style.textAlign = "center";
  }
}

// from My Work Section

function myWorkToAboutMe() {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  pagePosition = "AboutMe";


  document.getElementById("main-header").style.zIndex = "-10";
  document.getElementById("portfolio").style.display = "none";

  document.getElementById("nav-mywork").style.color = "black";
  document.getElementById("nav-aboutme").style.color = "yellow";
  document.getElementById("clouds-layer1").style.animation = "allcloudsmovedown 2s linear .5s forwards";
  document.getElementById("clouds-layer2").style.animation = "allcloudsmovedown 3s linear .5s forwards";
  document.getElementById("clouds-layer3").style.animation = "allcloudsmovedown 4s linear .5s forwards";
  document.getElementById("clouds").style.animation = "allcloudsFadeOutandIn 5s linear forwards";
  document.getElementById("find-me").style.display = "block";
  document.getElementById("findme-card-1").style.animation = "PlopIn .5s linear 3.7s forwards";
  document.getElementById("findme-card-2").style.animation = "PlopIn .5s linear 3.8s forwards";
  // document.getElementById("cloud1").style.animation = "floatRight1 120s linear 5.5s forwards";
  // document.getElementById("cloud2").style.animation = "floatRight1 220s linear 5.5s forwards";
  // document.getElementById("cloud3").style.animation = "floatRight1 150s linear 5.5s forwards";
  // document.getElementById("cloud4").style.animation = "floatRight1 220s linear 5.5s forwards";
  // document.getElementById("cloud5").style.animation = "floatRight1 200s linear 5.5s forwards";
  document.getElementById("about-me").style.display = "block";
  document.getElementById("about-me").style.animation = "fadeIn 2s linear 3s forwards";
  document.getElementById("wrapper").style.animation = "toSkyBlue 2s linear 2s forwards";
  if (viewportWidth > 1250) {
    document.getElementById("tree").style.animation = "treeMyWorkToAboutMe .6s ease-in forwards";
  }
  if (viewportWidth <= 1250 && viewportWidth > 1060) {
    nav.classList.add("med-large-nav");
    document.getElementById("tree").style.animation = "treeMyWorkToAboutMe2 .6s ease-in forwards";
  }
  if (viewportWidth <= 1060 && viewportWidth > 950) {

    document.getElementById("tree").style.animation = "treeMyWorkToAboutMe3 .6s ease-in forwards";
  }
  if (viewportWidth <= 950 && viewportWidth > 620) {
    document.getElementById("tree").style.animation = "treeMyWorkToAboutMe4 .6s ease-in forwards";
    document.getElementById("forest-ground").style.animation = "fadeOut .1s normal forwards";
  }
  if (viewportWidth <= 500) {
    document.getElementById("tree").style.animation = "treeMyWorkToAboutMe5 .6s ease-in forwards";
    document.getElementById("forest-ground").style.animation = "fadeOut .1s normal forwards";
  }
}

function myWorkToContact() {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  pagePosition = "Contact";
  document.getElementById("main-header").style.zIndex = "-10";
  document.getElementById("nav-aboutme").style.color = "black";
  document.getElementById("nav-contact").style.color = "yellow";
  document.getElementById("nav-mywork").style.color = "black";
  document.getElementById("forest-image").style.animation = "forestFromMyWorkToContact 2s linear forwards";
  document.getElementById("portfolio").style.display = "none";


  document.getElementById("about-me").style.animation = "fadeOut .5s linear forwards";
  document.getElementById("cloud1").style.animation = "fadeOut2 1s linear forwards";
  document.getElementById("cloud2").style.animation = "fadeOut2 1s linear forwards";
  document.getElementById("cloud3").style.animation = "fadeOut2 1s linear forwards";
  document.getElementById("cloud4").style.animation = "fadeOut2 1s linear forwards";
  document.getElementById("cloud5").style.animation = "fadeOut2 1s linear forwards";


  document.getElementById("contact").style.animation = "fadeIn 2s forwards 2s running";
  document.getElementById("contact").style.display = "block";



  var ele = document.getElementsByClassName('nav-button');

  if (viewportWidth > 1250) {
    for (var i = 0; i < ele.length; i++) {
      ele[i].style.animation = "paddingChange 1.5s forwards";
    }
    document.getElementById("nav").style.borderLeft = "none";
    document.getElementById("nav-list").style.animation = "shrinkHeight .5s ease-in-out forwards";
    document.getElementById("tree").style.animation = "treeMyWorkToContact 2s ease-in-out forwards";
    document.getElementById("nav").style.animation = "navShrinkContacts2 2s ease-in-out forwards";
    document.getElementById("forest-ground").style.animation = "groundUp 2s ease-in-out normal forwards";

  }
  if (viewportWidth <= 1250 && viewportWidth > 1060) {
    for (var i = 0; i < ele.length; i++) {
      ele[i].style.animation = "paddingChange 1.5s forwards";
    }
    document.getElementById("nav").style.borderLeft = "none";
    document.getElementById("nav-list").style.animation = "shrinkHeight .5s ease-in-out forwards";
    nav.classList.add("med-large-nav");
    document.getElementById("tree").style.animation = "treeMyWorkToContact2 2s ease-in-out forwards";
    document.getElementById("nav").style.animation = "navShrinkContacts3 2s ease-in-out forwards";
    document.getElementById("forest-ground").style.animation = "groundUp 2s ease-in-out normal forwards";
  }
  if (viewportWidth <= 1060 && viewportWidth > 950) {
    for (var i = 0; i < ele.length; i++) {
      ele[i].style.animation = "paddingChange 1.5s forwards";
    }
    document.getElementById("nav").style.borderLeft = "none";
    document.getElementById("nav-list").style.animation = "shrinkHeight .5s ease-in-out forwards";
    document.getElementById("tree").style.animation = "treeMyWorkToContact3 2s ease-in-out forwards";
    document.getElementById("nav").style.animation = "navShrinkContacts4 2s ease-in-out forwards";
    document.getElementById("forest-ground").style.animation = "groundUp3 2s ease-in-out normal forwards";
  }
  if (viewportWidth <= 950 && viewportWidth > 620) {
    for (var i = 0; i < ele.length; i++) {
      ele[i].style.animation = "paddingChange 1.5s forwards";
    }
    document.getElementById("tree").style.animation = "treeMyWorkToContact4 2s ease-in-out forwards";

    document.getElementById("forest-ground").style.animation = "groundUp5 2s ease-in-out normal forwards";
  }
  if (viewportWidth <= 500) {
    document.getElementById("tree").style.animation = "treeMyWorkToContact5 2s ease-in-out forwards";

    document.getElementById("forest-ground").style.animation = "groundUp5 2s ease-in-out normal forwards";
  }
}

// from Contact page

function contactToAboutMe() {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  pagePosition = "AboutMe";
  document.getElementById("main-header").style.zIndex = "-10";
  document.getElementById("nav-aboutme").style.color = "yellow";
  document.getElementById("nav-contact").style.color = "black";
  document.getElementById("nav-mywork").style.color = "black";

  document.getElementById("forest-image").style.animation = "fadeOut 1s linear forwards";

  document.getElementById("contact").style.display = "none";


  document.getElementById("clouds-layer1").style.animation = "allcloudsmovedown 2s linear .5s forwards";
  document.getElementById("clouds-layer2").style.animation = "allcloudsmovedown 3s linear .5s forwards";
  document.getElementById("clouds-layer3").style.animation = "allcloudsmovedown 4s linear .5s forwards";
  document.getElementById("find-me").style.display = "block";
  document.getElementById("findme-card-1").style.animation = "PlopIn .5s linear 3.7s forwards";
  document.getElementById("findme-card-2").style.animation = "PlopIn .5s linear 3.8s forwards";
  document.getElementById("cloud1").style.animation = "floatRight1 120s linear 3s forwards";
  document.getElementById("cloud2").style.animation = "floatRight1 220s linear 3s forwards";
  document.getElementById("cloud3").style.animation = "floatRight1 150s linear 3s forwards";
  document.getElementById("cloud4").style.animation = "floatRight1 220s linear 3s forwards";
  document.getElementById("cloud5").style.animation = "floatRight1 200s linear 3s forwards";
  document.getElementById("about-me").style.display = "block";
  document.getElementById("about-me").style.animation = "fadeIn 2s linear 3s forwards";
  document.getElementById("wrapper").style.animation = "toSkyBlue 2s linear 2s forwards";

  if (viewportWidth > 1250) {

    document.getElementById("nav-list").style.animation = "shrinkHeight .5s ease-in-out reverse forwards";
    document.getElementById("nav").style.borderLeft = "8px solid black";
    document.getElementById("tree").style.animation = "treeContactToAboutMe 1s linear forwards";
    document.getElementById("nav").style.animation = "navShrinkContacts3 1s linear reverse forwards";
    document.getElementById("forest-ground").style.animation = "groundDown 1s linear forwards";
  }
  if (viewportWidth <= 1250 && viewportWidth > 1060) {
    document.getElementById("nav-list").style.animation = "shrinkHeight .5s ease-in-out reverse forwards";
    document.getElementById("nav").style.borderLeft = "8px solid black";
    document.getElementById("tree").style.animation = "treeContactToAboutMe2 1s linear forwards";
    document.getElementById("nav").style.animation = "navShrinkContacts3 1s linear reverse forwards";
    document.getElementById("forest-ground").style.animation = "groundDown 1s linear forwards";
  }
  if (viewportWidth <= 1060 && viewportWidth > 950) {
    document.getElementById("nav-list").style.animation = "shrinkHeight .5s ease-in-out reverse forwards";
    document.getElementById("nav").style.borderLeft = "8px solid black";
    document.getElementById("tree").style.animation = "treeContactToAboutMe3 1s linear forwards";
    document.getElementById("nav").style.animation = "navShrinkContacts4 1s linear reverse forwards";
    document.getElementById("forest-ground").style.animation = "groundDown 1s linear forwards";
  }
  if (viewportWidth <= 950 && viewportWidth > 620) {
    document.getElementById("tree").style.animation = "treeContactToAboutMe4 1s linear forwards";
    document.getElementById("forest-ground").style.animation = "groundDown4 1s linear forwards";
  }
  if (viewportWidth <= 500) {
    document.getElementById("tree").style.animation = "treeContactToAboutMe5 1s linear forwards";
    document.getElementById("forest-ground").style.animation = "groundDown4 1s linear forwards";
  }




}

function contactToMyWork() {
  pagePosition = "MyWork"
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  document.getElementById("main-header").style.zIndex = "-10";
  document.getElementById("nav-aboutme").style.color = "black";
  document.getElementById("nav-contact").style.color = "black";
  document.getElementById("nav-mywork").style.color = "yellow";
  document.getElementById("forest-image").style.animation = "forestContactToMyWork 1s linear forwards";
  document.getElementById("contact").style.display = "none";
  document.getElementById("wrapper").style.backgroundColor = "#B4FAFF";
  document.getElementById("portfolio-header").style.animation = "fadeIn 2s linear 2s forwards";
  document.getElementById("cloud1").style.animation = "floatRight1 120s linear 1s forwards";
  document.getElementById("cloud2").style.animation = "floatRight1 220s linear 1s forwards";
  document.getElementById("cloud3").style.animation = "floatRight1 150s linear 1s forwards";
  document.getElementById("cloud4").style.animation = "floatRight1 220s linear 1s forwards";
  document.getElementById("cloud5").style.animation = "floatRight1 200s linear 1s forwards";


  document.getElementById("portfolio").style.display = "block";
  document.getElementById("portfolio").style.animation = "fadeIn 2s linear 2s forwards";
  if (viewportWidth > 1250) {
    document.getElementById("nav-list").style.animation = "shrinkHeight .5s ease-in-out reverse forwards";
    document.getElementById("nav").style.borderLeft = "8px solid black";
    document.getElementById("tree").style.animation = "treeContactToMyWork 2s ease-in-out forwards";
    document.getElementById("nav").style.animation = "navShrinkContacts3 1s linear reverse forwards";
    document.getElementById("forest-ground").style.animation = "groundDown2 2s ease-in-out forwards";
  }
  if (viewportWidth <= 1250 && viewportWidth > 1060) {
    document.getElementById("nav-list").style.animation = "shrinkHeight .5s ease-in-out reverse forwards";
    document.getElementById("nav").style.borderLeft = "8px solid black";
    document.getElementById("tree").style.animation = "treeContactToMyWork2 2s ease-in-out forwards";
    document.getElementById("nav").style.animation = "navShrinkContacts3 1s linear reverse forwards";
    document.getElementById("forest-ground").style.animation = "groundDown2 2s ease-in-out forwards";
  }
  if (viewportWidth <= 1060 && viewportWidth > 950) {
    document.getElementById("nav-list").style.animation = "shrinkHeight .5s ease-in-out reverse forwards";
    document.getElementById("nav").style.borderLeft = "8px solid black";
    document.getElementById("tree").style.animation = "treeContactToMyWork3 2s ease-in-out forwards";
    document.getElementById("nav").style.animation = "navShrinkContacts4 1s linear reverse forwards";
    document.getElementById("forest-ground").style.animation = "groundDown2 2s ease-in-out forwards";
  }
  if (viewportWidth <= 950 && viewportWidth > 620) {
    document.getElementById("tree").style.animation = "treeContactToMyWork4 2s ease-in-out forwards";
    document.getElementById("forest-ground").style.animation = "groundDown3 2s ease-in-out forwards";
  }
  if (viewportWidth <= 500) {
    document.getElementById("tree").style.animation = "treeContactToMyWork5 2s ease-in-out forwards";
    document.getElementById("forest-ground").style.animation = "groundDown3 2s ease-in-out forwards";
  }
}


// From About Me Section

function aboutMeToMyWork() {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  pagePosition = "MyWork"
  document.getElementById("main-header").style.zIndex = "-10";
  document.getElementById("nav-aboutme").style.color = "black";
  document.getElementById("nav-contact").style.color = "black";
  document.getElementById("nav-mywork").style.color = "yellow";
  document.getElementById("findme-card-1").style.animation = "fadeOut .1s linear forwards";
  document.getElementById("findme-card-2").style.animation = "fadeOut .1s linear forwards";

  document.getElementById("clouds-layer1").style.animation = "allcloudsmoveup 2s linear forwards";
  document.getElementById("clouds-layer2").style.animation = "allcloudsmoveup 3s linear forwards";
  document.getElementById("clouds-layer3").style.animation = "allcloudsmoveup 4s linear forwards";
  document.getElementById("about-me").style.display = "none";
  document.getElementById("portfolio").style.display = "block";
  document.getElementById("portfolio").style.animation = "fadeIn 2s linear 4s forwards";
  document.getElementById("portfolio-header").style.animation = "fadeIn 2s linear 4s forwards";
  document.getElementById("clouds").style.animation = "cloudsMoveUp 1s linear forwards";
  // document.getElementById("cloud1").style.animation = "fadeOut2 1s linear forwards";
  // document.getElementById("cloud2").style.animation = "fadeOut2 1s linear forwards";
  // document.getElementById("cloud3").style.animation = "fadeOut2 1s linear forwards";
  // document.getElementById("cloud4").style.animation = "fadeOut2 1s linear forwards";
  // document.getElementById("cloud5").style.animation = "fadeOut2 1s linear forwards";
  document.getElementById("wrapper").style.animation = "toLighterBlue 4.5s linear forwards";
  if (viewportWidth > 1250) {
    document.getElementById("tree").style.animation = "treeAboutMeToMyWork 4s ease-out forwards";
  }
  if (viewportWidth <= 1250 && viewportWidth > 1060) {
    nav.classList.add("med-large-nav");
    document.getElementById("tree").style.animation = "treeAboutMeToMyWork2 4s ease-out forwards";
  }
  if (viewportWidth <= 1060 && viewportWidth > 950) {
    document.getElementById("tree").style.animation = "treeAboutMeToMyWork3 4s ease-out forwards";
  }
  if (viewportWidth <= 950 && viewportWidth > 620) {
    document.getElementById("tree").style.animation = "treeAboutMeToMyWork4 4s ease-out forwards";
    document.getElementById("forest-ground").style.animation = "groundPosition2 1s ease-out 3s forwards";
  }
  if (viewportWidth <= 620) {
    document.getElementById("tree").style.animation = "treeAboutMeToMyWork5 4s ease-out forwards";
    document.getElementById("forest-ground").style.animation = "groundPosition2 1s ease-out 3s forwards";
  }
}

function aboutMeToContacts() {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  pagePosition = "Contact";
  document.getElementById("main-header").style.zIndex = "-10";
  document.getElementById("nav-aboutme").style.color = "black";
  document.getElementById("nav-contact").style.color = "yellow";
  document.getElementById("nav-mywork").style.color = "black";
  document.getElementById("findme-card-1").style.animation = "fadeOut .1s linear forwards";
  document.getElementById("findme-card-2").style.animation = "fadeOut .1s linear forwards";
  document.getElementById("clouds").style.animation = "cloudsMoveUp 1s linear forwards";
  document.getElementById("about-me").style.display = "none";
  document.getElementById("clouds-layer1").style.animation = "allcloudsmoveup 2s linear forwards";
  document.getElementById("clouds-layer2").style.animation = "allcloudsmoveup 3s linear forwards";
  document.getElementById("clouds-layer3").style.animation = "allcloudsmoveup 4s linear forwards";


  document.getElementById("contact").style.animation = "fadeIn 2s forwards 6s running";
  document.getElementById("contact").style.display = "block";

  document.getElementById("wrapper").style.animation = "toLighterBlue 4.5s linear forwards";
  document.getElementById("forest-image").style.animation = "forestFromAboutMeToContact 6s linear forwards";
  var ele = document.getElementsByClassName('nav-button');

  if (viewportWidth > 1250) {
    for (var i = 0; i < ele.length; i++) {
      ele[i].style.animationPlayState = "running";
    }
    document.getElementById("nav-list").style.animation = "shrinkHeight .5s ease-in-out forwards";
    document.getElementById("nav").style.borderLeft = "none";
    document.getElementById("tree").style.animation = "treeAboutMeToContacts 6s ease-out forwards";
    document.getElementById("nav").style.animation = "navShrinkContacts 4s ease-in-out forwards";
    document.getElementById("forest-ground").style.animation = "groundUp2 6s ease-out forwards";
  }
  if (viewportWidth <= 1250 && viewportWidth > 1060) {
    for (var i = 0; i < ele.length; i++) {
      ele[i].style.animationPlayState = "running";
    }
    document.getElementById("nav-list").style.animation = "shrinkHeight .5s ease-in-out forwards";
    document.getElementById("nav").style.borderLeft = "none";
    document.getElementById("tree").style.animation = "treeAboutMeToContacts2 6s ease-out forwards";
    document.getElementById("nav").style.animation = "navShrinkContacts3 4s ease-in-out forwards";
    document.getElementById("forest-ground").style.animation = "groundUp2 6s ease-out forwards";
  }
  if (viewportWidth <= 1060 && viewportWidth > 950) {
    for (var i = 0; i < ele.length; i++) {
      ele[i].style.animationPlayState = "running";
    }
    document.getElementById("nav-list").style.animation = "shrinkHeight .5s ease-in-out forwards";
    document.getElementById("nav").style.borderLeft = "none";
    document.getElementById("tree").style.animation = "treeAboutMeToContacts3 6s ease-out forwards";
    document.getElementById("nav").style.animation = "navShrinkContacts4 4s ease-in-out forwards";
    document.getElementById("forest-ground").style.animation = "groundUp2 6s ease-out forwards";
  }
  if (viewportWidth <= 950 && viewportWidth > 620) {
    for (var i = 0; i < ele.length; i++) {
      ele[i].style.animationPlayState = "running";
    }
    document.getElementById("tree").style.animation = "treeAboutMeToContacts4 6s ease-out forwards";
    document.getElementById("forest-ground").style.animation = "groundUp6 6s ease-out forwards";
  } if (viewportWidth <= 500) {
    document.getElementById("tree").style.animation = "treeAboutMeToContacts5 6s ease-out forwards";
    document.getElementById("forest-ground").style.animation = "groundUp6 6s ease-out forwards";
  }

}

function resize() {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (pagePosition !== "Main" && ((viewportWidth > originalWidth + 200) || viewportWidth < originalWidth - 200)) {
    location.reload();
  }

}

