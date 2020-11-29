// the following lines of code enables the responsive toggling of the nav bar
const navBar = document.querySelector(".nav-bar")
const burger = document.querySelector(".burger");
const navigation = document.querySelector(".navigation");
const [...navLinks] = document.querySelectorAll(".nav-link");
// this function uses transition to smoothly animate the nav links when the burger is clicked by the user
// it takes a links parameter
function animateLinks(links){
  links.forEach((link,index)=>{
    if(link.style.animation){
      link.style.animation = "";
    }else{
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 9 + 0.3}s`;
    }
  });
}
// this function helps to close the nav after the user clicks on any nav link
function toggleNavFromLink(navLinks){
  navLinks.forEach(link =>{
    link.addEventListener("click",()=>{
      navigation.classList.toggle("nav-active");
      // animate links
      animateLinks(navLinks);
      burger.classList.toggle("toggle");
    })
  })
}
// this function toggles the burger and animates the links
const navSlide = ()=>{
  burger.addEventListener("click", ()=>{
    navigation.classList.toggle("nav-active");
    animateLinks(navLinks);
    burger.classList.toggle("toggle");
  })
  toggleNavFromLink(navLinks);
}
navSlide();
// end of responsive script

// scritp fot the sticky tab
// when the user scrolls the page execute stickyNav()
// window.addEventListener("scroll", ()=>{
//   stickyTabs()
// });
// // this function adds the sticky class to the tabsNav when the user reaches its scroll position. and removes the sticky class when the user leaves the scroll position
// function stickyTabs(){
//   // this is the tabs navigation bar
//   let tabsNav = document.querySelector(".tabs-navigation-bar");
//   // this line gets the position of the tabsNav
//   let tabsOffsetTop = tabsNav.offsetTop;
//   if(window.pageYOffset > tabsOffsetTop){
//     tabsNav.classList.add("sticky");
//   }else{
//     tabsNav.classList.remove("sticky");
//   }
// }
var screenwidth =  screen.width;
if(screen.width >= 768){
  window.addEventListener("scroll", () => {
    let tabsNav = document.querySelector(".tabs-navigation-bar");
    let tabsOffsetTop = tabsNav.offsetTop;
    tabsNav.classList.toggle("sticky", window.pageYOffset > tabsOffsetTop);
  });
}
else{
  window.onscroll = function(){navigationTabs()};
  var tabsNav = document.querySelector(".tabs-navigation-bar");
  var sticky = tabsNav.offsetTop;

  function navigationTabs(){
    if(window.pageYOffset >= sticky){
      tabsNav.classList.add("sticky");
    }else{
      tabsNav.classList.remove("sticky");
    }
  }
}


let repoStarBtn = document.querySelector(".repo-stars");
let starIcon = document.querySelector(".star");
repoStarBtn.addEventListener("click",()=>{
  console.log(repoStarBtn.innerHTML);
  console.log(starIcon.classList)
  let fullStar = `<svg class="fullStar" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815l4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97l.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z" fill="#626262"/></svg>`;
  let cleanStar = `
    <svg class="star" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false"
                    width="1em" height="1em"
                    style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815l4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97l.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45l2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084l2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456l-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183l-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694v.001z"
                      fill="#626262" /></svg>
  `;
  if(starIcon.classList.contains("star")){
    // repoStarBtn.textContent = `${ fullStar} Unstar`;
    repoStarBtn.innerHTML = `${fullStar} Unstar`;
    // repoStarBtn.classList.add("repo-stars-style");
    // starIcon.classList.add("star-style");
  }else{
    repoStarBtn.innerHTML = `${cleanStar}Star`;
  }

});


