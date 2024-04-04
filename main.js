// load sketch

// header styling
let prevScrollpos = window.scrollY;

const headerDiv = document.querySelector("header")
const headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

window.onscroll = function() {
   let currentScrollPos = window.scrollY;

  /* if we're scrolling up, or we haven't passed the header, show the header */
  if (prevScrollpos > currentScrollPos  || currentScrollPos < headerBottom){  
      headerDiv.style.top = "0";
  }
  else{
      /* otherwise we're scrolling down & have passed the header so hide it */
      headerDiv.style.top = "-5.2rem";
  } 

  prevScrollpos = currentScrollPos;
}
