
window.addEventListener("load", function() {
    // get the image container element
    const imageContainer = document.querySelector(".image-container");
  
    // add a delay of 1 second before showing the image
    setTimeout(function() {
      imageContainer.style.opacity = 1;
    }, 500);
});

const subscribeLink = document.querySelector('.annie-about');
subscribeLink.addEventListener('mouseover', () => {
  subscribeLink.style.color = 'orange';
});
subscribeLink.addEventListener('mouseout', () => {
  subscribeLink.style.color = 'black'; // change it back to original!
});

const subscribeLink2 = document.querySelector('.emy-about');
subscribeLink2.addEventListener('mouseover', () => {
  subscribeLink2.style.color = 'green';
});
subscribeLink2.addEventListener('mouseout', () => {
  subscribeLink2.style.color = 'black'; // change it back to original!
});

//DARK MODE 3AM and 7AM
function isDarkModeActive() {
  const currentHour = new Date().getHours();
  return currentHour >= 3 && currentHour < 7;
}
setInterval(() => {
  if (isDarkModeActive()) {
    bodyElement.classList.add('dark-mode');
  } else {
    bodyElement.classList.remove('dark-mode');
  }
}, 60000);
