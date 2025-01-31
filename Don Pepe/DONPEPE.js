document.getElementById("input-box").addEventListener("keyup", function() {
  let query = this.value.toLowerCase();
  let works = document.querySelectorAll(".work-list");

  works.forEach(work => {
      let title = work.querySelector("h3").textContent.toLowerCase();
      if (title.includes(query)) {
          work.classList.remove("hidden");
      } else {
          work.classList.add("hidden");
      }
  });
});



const allWorks = document.querySelectorAll(".work-box .work-list ");
const img = document.getElementById("ey");

console.log(img);
let active = 0;

allWorks.forEach((work, index) => {
  const img = work.querySelector("img"); // Get the image within the current work item
  const closeButton = work.querySelector(".close-btn");
  const modal = work.querySelector('.modal');
  const overlay = work.querySelector('.overlay');

  // Add click event listener to each image
  img.onclick = function () {
    console.log("Clicked on image:", img);
    console.log("Hello");

    // Hide any previously displayed modals
    allWorks.forEach((item) => {
      const modal = item.querySelector('.modal');
      const overlay = item.querySelector('.overlay');
      if (modal) modal.style.display = "none";
      if (overlay) overlay.style.display = "none";
    });

    // Show the modal for the clicked image
    const modal = work.querySelector('.modal');
    const overlay = work.querySelector('.overlay');
    if (modal) modal.style.display = "block";
    if (overlay) overlay.style.display = "block";

    // Update the active index if necessary
    active = index;
  };


  if (closeButton) {
    closeButton.onclick = function () {
      if (modal,overlay) {

       modal.style.display = "none"; // Hide the modal
       overlay.style.display = "none"; 
      }
    };
  }
});

