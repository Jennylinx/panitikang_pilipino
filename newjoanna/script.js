document.addEventListener("DOMContentLoaded", () => {
    const documentsSection = document.getElementById("documents-section");
    const uploadSection = document.getElementById("upload-section");
    const container = document.querySelector(".container");
    documentsSection.addEventListener("click", () => {
    uploadSection.style.display = "block";
    container.style.display = "none";
    });
    const backButton = document.createElement("button");
    backButton.textContent = "Back";
    backButton.style.marginTop = "20px";
    uploadSection.appendChild(backButton);
    backButton.addEventListener("click", () => {
        container.style.display = "flex";
        uploadSection.style.display = "none";
    });
}); 
