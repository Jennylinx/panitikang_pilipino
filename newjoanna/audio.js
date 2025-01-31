document.getElementById('audioUpload').addEventListener('change', function(event) {
    const files = event.target.files;
    const preview = document.getElementById('audioPreview');
    preview.innerHTML = ''; 
  
    Array.from(files).forEach(file => {
      if (file.type.startsWith('audio/')) {
        const audioContainer = document.createElement('div');
        audioContainer.classList.add('audio-item');
        const audioElement = document.createElement('audio');
        audioElement.controls = true;
        audioElement.src = URL.createObjectURL(file);
        const fileName = document.createElement('p');
        fileName.textContent = file.name;
        audioContainer.appendChild(audioElement);
        audioContainer.appendChild(fileName);
        document.getElementById("back-btn").addEventListener("click", () => {
            window.location.href = "index.html#menu"; 
        });
  
        preview.appendChild(audioContainer);
      } else {
        alert(`${file.name} is not a valid audio file.`);
      }
    });
  });
  