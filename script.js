// trying to create create the sooth scroll effect with a tutotial;
// const smoothScroll = (target, duration) => {
//    let targetElem= document.querySelector(target);
//     let targetPosition =  targetElem.getBoundingClientRect().top;
//     let startPosition = window.pageYOffset;
//     let distance = targetPosition - startPosition;
//     let startTime = null;
//     console.log(startPosition);
// }

// smoothScroll('#features', 1000);


// create the sooth scroll effect;
const scrollToView = (idname) => {
  document.getElementById(idname).scrollIntoView({behavior: 'smooth',     });
}


const backToTop = document.getElementById("back-to-top");
// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
  }
