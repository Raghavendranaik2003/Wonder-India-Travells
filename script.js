let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
let currentVideoIndex = 0; 
const intervalTime = 15000;
window.onscroll = () => {
 searchBtn.classList.remove('fa-times');
 searchBar.classList.remove('active');
 menu.classList.remove('fa-times');
 navbar.classList.remove('active');
 loginForm.classList.remove('active');
}


menu.addEventListener('click', () => {
 menu.classList.toggle('fa-times');
 navbar.classList.toggle('active');
 });


searchBtn.addEventListener('click', () => {
 searchBtn.classList.toggle('fa-times');
 searchBar.classList.toggle('active');
 });

 formBtn.addEventListener('click', () => {
 loginForm.classList.add('active');
 });

 formClose.addEventListener('click', () => {
 loginForm.classList.remove('active');
 });

videoBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Update current index to the clicked video index
        currentVideoIndex = index;
        
        // Remove the 'active' class from the currently active button
        document.querySelector('.controls .active').classList.remove('active');
        
        // Add the 'active' class to the clicked button
        btn.classList.add('active'); 
        
        // Get the 'data-src' attribute value of the clicked button
        let src = btn.getAttribute('data-src');
        
        // Change the 'src' attribute of the video player to the new video
        document.querySelector('#video-slider').src = src;
    });
});




function changeVideo() {
    // Remove the 'active' class from the currently active button
    document.querySelector('.controls .active').classList.remove('active');
    
    // Add the 'active' class to the current video button
    videoBtn[currentVideoIndex].classList.add('active');
    
    // Change the 'src' attribute of the video player to the new video
    let src = videoBtn[currentVideoIndex].getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
    
    // Increment the index, and reset if it's the last video
    currentVideoIndex = (currentVideoIndex + 1) % videoBtn.length;
}

// Manually change video when a button is clicked
videoBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Update current index to the clicked video index
        currentVideoIndex = index;
        changeVideo();
    });
});

// Automatically change video every 15 seconds
setInterval(changeVideo, intervalTime);






var swiper = new Swiper(".review-slider", {
 spaceBetween: 20,
 loop:true,
 autoplay: {
  delay: 2500,
  disableOnInteraction: false,
 },
 breakpoints: {
  640: {
   slidesPerView: 1,
  },
  768: {
   slidesPerView: 2,
  },
  1024: {
   slidesPerView: 3,
  },
 },
});



var swiper = new Swiper(".brand-slider", {
 spaceBetween: 20,
 loop:true,
 autoplay: {
  delay: 2500,
  disableOnInteraction: false,
 },
 breakpoints: {
  450: {
   slidesPerView: 2,
  },
  768: {
   slidesPerView: 3,
  },
  991: {
   slidesPerView: 4,
  },
  1200: {
   slidesPerView: 5,
  },
 },
});




 // 15 seconds

function changeVideo() {
    // Remove the 'active' class from the currently active button
    document.querySelector('.controls .active').classList.remove('active');
    
    // Add the 'active' class to the current video button
    videoBtn[currentVideoIndex].classList.add('active');
    
    // Change the 'src' attribute of the video player to the new video
    let src = videoBtn[currentVideoIndex].getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
    
    // Increment the index, and reset if it's the last video
    currentVideoIndex = (currentVideoIndex + 1) % videoBtn.length;
}

// Manually change video when a button is clicked
videoBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Update current index to the clicked video index
        currentVideoIndex = index;
        changeVideo();
    });
});

// Automatically change video every 15 seconds
setInterval(changeVideo, intervalTime);








