window.addEventListener("load", () => {
    const input = document.getElementById("upload");
    const filewrapper = document.getElementById("filewrapper");

    input.addEventListener("change", (e) => {
        if (e.target.files.length > 0) {
            let fileName = e.target.files[0].name; 
            let filetype = fileName.split(".").pop(); 
            fileshow(fileName, filetype);
        }
    });
        const fileshow = (fileName, filetype) => {
        const showfileboxElem = document.createElement("div");
        showfileboxElem.classList.add("showfilebox");
        const leftElem = document.createElement("div");
        leftElem.classList.add("left");
        const fileTypeElem = document.createElement("span");
        fileTypeElem.classList.add("filetype");
        fileTypeElem.innerHTML = filetype;
        leftElem.append(fileTypeElem);
        const filetitleElem = document.createElement("h3");
        filetitleElem.innerHTML = fileName;
        leftElem.append(filetitleElem);
        showfileboxElem.append(leftElem);
        const rightElem = document.createElement("div");
        rightElem.classList.add("right");
        const crossElem = document.createElement("span");
        crossElem.innerHTML = "&#215;";
        rightElem.append(crossElem);
        showfileboxElem.append(rightElem);
        filewrapper.append(showfileboxElem);
        crossElem.addEventListener("click", () => {
        filewrapper.removeChild(showfileboxElem);
        });
    };
});
