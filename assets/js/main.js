



/*Time line Animation for navigation and the main content*/
  var tm = gsap.timeline();
  tm.from(".navAnime", {
    x : -100,
    duration:.6,
    ease:"bounce",
  }); 
  tm.fromTo('#main',{
    opacity:0,  
    duration:.1,
},{opacity:1});



/*Arrow to up:::*/
const arrow = document.getElementById('arrowDiv');
const arrowLink = document.getElementById('arrLink');
window.onscroll = () => {
    
    if(window.scrollY>700) {

        arrow.style.display="block";
        gsap.fromTo('#arrowDiv',{
            duration:.1,
            rotation: 30,

        }, 
        {
            rotation:-30
        });
        
    } else {
        arrow.style.display="none";

    }
};

arrowLink.onclick = function(){

    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    
}







// Nav Responsive

const navArrow = document.querySelector(".navButton");
const navR  = document.querySelector(".navAnime");
const navUL = document.querySelector(".navAnime ul");
navArrow.onclick = function() {
    
     navR.classList.toggle("active");
     setTimeout(function(){
        navUL.classList.toggle("active");
     },500)
}



//brain click

function clickedBrain(em) {
  em.classList.toggle("clicked");
}








