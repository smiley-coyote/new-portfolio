var pagePosition = "Main";
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
console.log(viewportWidth)
/* 

---------------------


*******TO DO********


Page animations:

For screen size larger than 1250
    main -> My work ✓
    main -> About me ✓
    main -> Contact ✓

    My Work -> About me ✓
    My Work -> Contact ✓

    About me -> Contact ✓
    About me -> My Work ✓

    Contact -> My Work ✓
    Contact ->  About Me ✓

For screen size less then or equal to 1250 && greater than 1130
    
    main -> My work ✓
    main -> About me ✓
    main -> Contact ✓
   
    My Work -> About me ✓
    My Work -> Contact ✓

    About me -> Contact ✓
    About me -> My Work ✓

    Contact -> My Work ✓
    Contact ->  About Me ✓



For screen size less then or equal to 1060 && greater than 950
    
    main -> My work ✓
    main -> About me ✓
    main -> Contact ✓

    My Work -> About me ✓
    My Work -> Contact ✓

    About me -> Contact ✓
    About me -> My Work ✓

    Contact -> My Work ✓
    Contact ->  About Me ✓

For screen size less then or equal to 920 && greater than 420
    
    main -> My work ✓
    main -> About me ✓
    main -> Contact ✓

    My Work -> About me
    My Work -> Contact

    About me -> Contact
    About me -> My Work

    Contact -> My Work
    Contact ->  About Me

For screen size less then or equal to 420
    
    main -> My work 
    main -> About me
    main -> Contact

    My Work -> About me
    My Work -> Contact

    About me -> Contact
    About me -> My Work

    Contact -> My Work
    Contact ->  About Me


===========================

Create Front Page

ideas: 

1. The following letters types onto the screen

Hello! My name is Nicholas Alex and I am a Full Stack Web Developer

ENTER






--------------------


*/

function navButton(x) {
  var p = pagePosition;
  var goTo = new Function('a', 'b', 'return a + "To" + b');
  var navigate = goTo(p, x);
  var nav = document.getElementById("nav");






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
  document.getElementById("nav").style.border = "none";
  document.getElementById("main-header").style.animation = "fadeOut .3s linear forwards";
  document.getElementById("nav").style.borderLeft = "8px solid black";
  document.getElementById("butterfly").style.display = "none";
  document.getElementById("grass3").style.animation = "fadeOut .2s linear forwards";
  document.getElementById("forest-image").style.animation = "fadeOut 1s linear forwards";
  document.getElementById("tree-bark").style.display = "none";
  document.getElementById("nav-mywork").style.color = "yellow";
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
  for (var i = 0; i < ele.length; i++) {
    ele[i].style.animation = "paddingChange 2s forwards";
  }
  if (viewportWidth > 1250) {
    document.getElementById("nav").style.animation = "navShrink 1s ease-in forwards";
    document.getElementById("tree").style.animation = "treeMainToMyWork 2s ease-out normal forwards";

  }
  if (viewportWidth <= 1250 && viewportWidth > 1060) {
    nav.classList.add("med-large-nav");
    document.getElementById("nav").style.animation = "navShrink2 1s ease-in forwards";
    document.getElementById("tree").style.animation = "treeMainToMyWork2 2s ease-out normal forwards";

  }
  if (viewportWidth <= 1060 && viewportWidth > 950) {
    document.getElementById("nav").style.animation = "navShrink3 1s ease-in forwards";
    document.getElementById("tree").style.animation = "treeMainToMyWork3 2s ease-out normal forwards";
    document.getElementById("forest-ground").style.animation = "groundPosition 2s ease-out normal forwards";
  }

  if (viewportWidth <= 950 && viewportWidth > 599) {
    for (var i = 0; i < ele.length; i++) {
      ele[i].style.animation = "paddingChange 1.5s forwards";
    }
    document.getElementById("nav").style.animation = "navShrink4 1s ease-in forwards";
    document.getElementById("tree").style.animation = "treeMainToMyWork4 2s ease-out normal forwards";
    document.getElementById("nav").style.borderLeft = "none";
    document.getElementById("nav-list").style.animation = "shrinkHeight2 1s ease-in-out forwards";
  
  }
  if (viewportWidth <= 620) {
    // code here
  }
}

function mainToAboutMe() {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  pagePosition = "AboutMe";
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
  document.getElementById("wrapper").style.animation = "toSkyBlue 2s linear 2s forwards";
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
  for (var i = 0; i < ele.length; i++) {
    ele[i].style.animation = "paddingChange 1.5s forwards";
  }
  if (viewportWidth > 1250) {
    document.getElementById("nav").style.animation = "navShrink 1s ease-in-out forwards";
    document.getElementById("tree").style.animation = "treeMainToAboutMe 3.5s ease-out normal forwards";
  }
  if (viewportWidth <= 1250 && viewportWidth > 1060) {
    nav.classList.add("med-large-nav");
    document.getElementById("nav").style.animation = "navShrink2 1s ease-in-out forwards";
    document.getElementById("tree").style.animation = "treeMainToAboutMe2 3.5s ease-out normal forwards";
  }
  if (viewportWidth <= 1060 && viewportWidth > 950) {
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
}

function mainToContact() {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  pagePosition = "Contact";
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
  for (var i = 0; i < ele.length; i++) {
    ele[i].style.animation = "paddingChange 1.5s forwards";
  }

  if (viewportWidth > 1250) {
    document.getElementById("nav").style.animation = "navShrinkContacts 2s ease-in-out forwards";
    document.getElementById("tree").style.animation = "treeMainToContact 2s ease-out normal forwards";
    document.getElementById("nav-list").style.animation = "shrinkHeight .5s ease-in-out forwards";
    document.getElementById("forest-ground").style.animation = "groundUp 2s ease-out normal forwards";
  }
  if (viewportWidth <= 1250 && viewportWidth > 1060) {
    nav.classList.add("med-large-nav");
    document.getElementById("nav").style.animation = "navShrinkContacts1250 2s ease-in-out forwards";
    document.getElementById("tree").style.animation = "treeMainToContact2 2s ease-out normal forwards";
    document.getElementById("nav-list").style.animation = "shrinkHeight .5s ease-in-out forwards";
    document.getElementById("forest-ground").style.animation = "groundUp 2s ease-out normal forwards";
  }
  if (viewportWidth <= 1060 && viewportWidth > 950) {
    document.getElementById("nav").style.animation = "navShrinkContacts1060 2s ease-in-out forwards";
    document.getElementById("tree").style.animation = "treeMainToContact3 2s ease-out normal forwards";
    document.getElementById("nav-list").style.animation = "shrinkHeight .5s ease-in-out forwards";
    document.getElementById("forest-ground").style.animation = "groundUp 2s ease-out normal forwards";
  }
  if (viewportWidth <= 950 && viewportWidth > 600) {
    document.getElementById("nav").style.animation = "navShrink4 2s ease-in-out forwards";
    document.getElementById("tree").style.animation = "treeMainToContact4 2s ease-out normal forwards";
    document.getElementById("nav-list").style.animation = "shrinkHeight2 .5s ease-in-out forwards";
    document.getElementById("forest-ground").style.animation = "groundUp4 2s ease-out normal forwards";
  }
  if (viewportWidth <= 600) {
    // code here
  }
}

// from My Work Section

function myWorkToAboutMe() {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  pagePosition = "AboutMe";



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
    // code here
  }
  if (viewportWidth <= 620) {
    // code here
  }
}

function myWorkToContact() {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  pagePosition = "Contact";
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
  document.getElementById("nav-list").style.animation = "shrinkHeight .5s ease-in-out forwards";

  document.getElementById("nav").style.borderLeft = "none";
  var ele = document.getElementsByClassName('nav-button');
  for (var i = 0; i < ele.length; i++) {
    ele[i].style.animation = "paddingChange 1.5s forwards";
  }
  if (viewportWidth > 1250) {
    document.getElementById("tree").style.animation = "treeMyWorkToContact 2s ease-in-out forwards";
    document.getElementById("nav").style.animation = "navShrinkContacts2 2s ease-in-out forwards";
    document.getElementById("forest-ground").style.animation = "groundUp 2s ease-in-out normal forwards";
  }
  if (viewportWidth <= 1250 && viewportWidth > 1060) {
    nav.classList.add("med-large-nav");
    document.getElementById("tree").style.animation = "treeMyWorkToContact2 2s ease-in-out forwards";
    document.getElementById("nav").style.animation = "navShrinkContacts3 2s ease-in-out forwards";
    document.getElementById("forest-ground").style.animation = "groundUp 2s ease-in-out normal forwards";
  }
  if (viewportWidth <= 1060 && viewportWidth > 950) {
    document.getElementById("tree").style.animation = "treeMyWorkToContact3 2s ease-in-out forwards";
    document.getElementById("nav").style.animation = "navShrinkContacts4 2s ease-in-out forwards";
    document.getElementById("forest-ground").style.animation = "groundUp3 2s ease-in-out normal forwards";
  }
  if (viewportWidth <= 950 && viewportWidth > 620) {
    // code here
  }
  if (viewportWidth <= 620) {
    // code here
  }
}

// from Contact page

function contactToAboutMe() {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  pagePosition = "AboutMe";

  document.getElementById("nav-aboutme").style.color = "yellow";
  document.getElementById("nav-contact").style.color = "black";
  document.getElementById("nav-mywork").style.color = "black";
  document.getElementById("forest-ground").style.animation = "groundDown 1s linear forwards";
  document.getElementById("forest-image").style.animation = "fadeOut 1s linear forwards";

  document.getElementById("contact").style.display = "none";

  document.getElementById("nav-list").style.animation = "shrinkHeight .5s ease-in-out reverse forwards";
  document.getElementById("nav").style.borderLeft = "8px solid black";
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
    document.getElementById("tree").style.animation = "treeContactToAboutMe 1s linear forwards";
    document.getElementById("nav").style.animation = "navShrinkContacts3 1s linear reverse forwards";
  }
  if (viewportWidth <= 1250 && viewportWidth > 1060) {
    nav.classList.add("med-large-nav");
    document.getElementById("tree").style.animation = "treeContactToAboutMe2 1s linear forwards";
    document.getElementById("nav").style.animation = "navShrinkContacts3 1s linear reverse forwards";
  }
  if (viewportWidth <= 1060 && viewportWidth > 950) {
    document.getElementById("tree").style.animation = "treeContactToAboutMe3 1s linear forwards";
    document.getElementById("nav").style.animation = "navShrinkContacts4 1s linear reverse forwards";
  }
  if (viewportWidth <= 950 && viewportWidth > 620) {
    // code here
  }
  if (viewportWidth <= 620) {
    // code here
  }
  for (var i = 0; i < ele.length; i++) {
    ele[i].style.animation = "paddingChange 1.5s reverse forwards";
  }



}

function contactToMyWork() {
  pagePosition = "MyWork"
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  document.getElementById("nav-aboutme").style.color = "black";
  document.getElementById("nav-contact").style.color = "black";
  document.getElementById("nav-mywork").style.color = "yellow";
  document.getElementById("forest-image").style.animation = "forestContactToMyWork 1s linear forwards";

  document.getElementById("forest-ground").style.animation = "groundDown2 2s ease-in-out forwards";
  document.getElementById("contact").style.display = "none";
  document.getElementById("portfolio-header").style.animation = "fadeIn 2s linear 2s forwards";
  document.getElementById("cloud1").style.animation = "floatRight1 120s linear 1s forwards";
  document.getElementById("cloud2").style.animation = "floatRight1 220s linear 1s forwards";
  document.getElementById("cloud3").style.animation = "floatRight1 150s linear 1s forwards";
  document.getElementById("cloud4").style.animation = "floatRight1 220s linear 1s forwards";
  document.getElementById("cloud5").style.animation = "floatRight1 200s linear 1s forwards";

  document.getElementById("nav-list").style.animation = "shrinkHeight .5s ease-in-out reverse forwards";
  document.getElementById("nav").style.borderLeft = "8px solid black";
  document.getElementById("portfolio").style.display = "block";
  document.getElementById("portfolio").style.animation = "fadeIn 2s linear 2s forwards";
  if (viewportWidth > 1250) {
    document.getElementById("tree").style.animation = "treeContactToMyWork 2s ease-in-out forwards";
    document.getElementById("nav").style.animation = "navShrinkContacts3 1s linear reverse forwards";
  }
  if (viewportWidth <= 1250 && viewportWidth > 1060) {
    nav.classList.add("med-large-nav");
    document.getElementById("tree").style.animation = "treeContactToMyWork2 2s ease-in-out forwards";
    document.getElementById("nav").style.animation = "navShrinkContacts3 1s linear reverse forwards";
  }
  if (viewportWidth <= 1060 && viewportWidth > 950) {
    document.getElementById("tree").style.animation = "treeContactToMyWork3 2s ease-in-out forwards";
    document.getElementById("nav").style.animation = "navShrinkContacts4 1s linear reverse forwards";
  }
  if (viewportWidth <= 950 && viewportWidth > 620) {
    // code here
  }
  if (viewportWidth <= 620) {
    // code here
  }
}


// From About Me Section

function aboutMeToMyWork() {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  pagePosition = "MyWork"
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
    // code here
  }
  if (viewportWidth <= 620) {
    // code here
  }
}

function aboutMeToContacts() {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  pagePosition = "Contact";
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

  document.getElementById("forest-ground").style.animation = "groundUp2 6s ease-out forwards";
  document.getElementById("contact").style.animation = "fadeIn 2s forwards 6s running";
  document.getElementById("contact").style.display = "block";
  document.getElementById("nav-list").style.animation = "shrinkHeight .5s ease-in-out forwards";

  document.getElementById("nav").style.borderLeft = "none";
  document.getElementById("wrapper").style.animation = "toLighterBlue 4.5s linear forwards";
  document.getElementById("forest-image").style.animation = "forestFromAboutMeToContact 6s linear forwards";
  var ele = document.getElementsByClassName('nav-button');
  for (var i = 0; i < ele.length; i++) {
    ele[i].style.animationPlayState = "running";
  }
  if (viewportWidth > 1250) {
    document.getElementById("tree").style.animation = "treeAboutMeToContacts 6s ease-out forwards";
    document.getElementById("nav").style.animation = "navShrinkContacts 4s ease-in-out forwards";
  }
  if (viewportWidth <= 1250 && viewportWidth > 1060) {
    nav.classList.add("med-large-nav");
    document.getElementById("tree").style.animation = "treeAboutMeToContacts2 6s ease-out forwards";
    document.getElementById("nav").style.animation = "navShrinkContacts3 4s ease-in-out forwards";
  }
  if (viewportWidth <= 1060 && viewportWidth > 950) {
    document.getElementById("tree").style.animation = "treeAboutMeToContacts3 6s ease-out forwards";
    document.getElementById("nav").style.animation = "navShrinkContacts4 4s ease-in-out forwards";
  }
  if (viewportWidth <= 950 && viewportWidth > 620) {
    // code here
  } if (viewportWidth <= 620) {
    // code here
  }

}