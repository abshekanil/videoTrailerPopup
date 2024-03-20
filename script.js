let closeBtn = document.querySelector('.closeBtn');
let videoContainerElement = document.querySelector('.videoContainer');
let btn = document.querySelector('.btn');
let video = document.querySelector('video');

btn.addEventListener("click", function(){
    videoContainerElement.classList.remove("active");
});

closeBtn.addEventListener("click", function(){
    videoContainerElement.classList.add("active");
    video.pause();
    video.currentTime = 0;
});
