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
window.onscroll = function (){
  stickyNav()
};
// this is the tabs navigation bar
let tabsNav = document.querySelector(".tabs-container");
console.log(tabsNav);
// this line gets the position of the tabsNav
let sticky = tabsNav.offsetTop;

// this function adds the sticky class to the tabsNav when the user reaches its scroll position. and removes the sticky class when the user leaves the scroll position
function stickyNav(){
  if(window.pageYOffset >= sticky ){
    tabsNav.classList.add("sticky");
  }else{
    tabsNav.classList.remove("sticky");
  }
}

