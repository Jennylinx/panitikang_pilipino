let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');

listVideo.forEach(video =>{
   video.onclick = () =>{
       listVideo.forEach(vid => vid.classList.remove('active'));
       video.classList.add('active');
       if(video.classList.contains('active')){
           let src = video.children[0].getAttribute('src');
           mainVideo.src = src;
           let text = video.children[1].innerHTML;
           title.innerHTML = text;
       };
   
   };
});
document.addEventListener("DOMContentLoaded", function () {
    const mainVideo = document.getElementById("main-video");
    const videoItems = document.querySelectorAll(".vid video");
    const uploadBtn = document.getElementById("upload-btn");
    const videoUploadInput = document.getElementById("video-upload");
    const videoList = document.querySelector(".video-list");
    videoItems.forEach((video) => {
        video.addEventListener("click", function () {
            mainVideo.src = this.src;
            mainVideo.play();
        });
    });

    uploadBtn.addEventListener("click", function () {
        videoUploadInput.click();
    });
    videoUploadInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const videoURL = URL.createObjectURL(file);
            const newVid = document.createElement("div");
            newVid.classList.add("vid");
            newVid.innerHTML = `
                <video src="${videoURL}" controls muted></video>
                <h3 class="title">${file.name}</h3>
            `;
            videoList.appendChild(newVid);
            newVid.querySelector("video").addEventListener("click", function () {
                mainVideo.src = this.src;
                mainVideo.play();
            });
        }
    });
});

