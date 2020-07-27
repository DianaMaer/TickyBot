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


