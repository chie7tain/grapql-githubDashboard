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

// window.addEventListener("scroll",()=>{
//   let tabsNav = document.querySelector(".tabs-navigation-bar");
//   tabsNav.classList.toggle("sticky",window.scrollY > 0)});


// focus script for search input in nav bar
// let searchInput = document.querySelector(".search-input");
// // let desk = CSSMediaRule("min-width:961")
// searchInput.addEventListener('focus',()=>{
//     navigation.classList.remove("search-navigation");
//   })
//   searchInput.on
//   navigation.classList.add("search-navigation");