// script.js

// Function to handle video upload
function uploadVideo() {
    const videoInput = document.getElementById('videoInput');
    const videoTitle = document.getElementById('videoTitle').value;

    if (videoInput.files.length > 0 && videoTitle.trim() !== "") {
        const file = videoInput.files[0];
        const videoURL = URL.createObjectURL(file);

        const videoGallery = document.getElementById('videoGallery');

        // Create video element
        const videoContainer = document.createElement('div');
        videoContainer.classList.add('video-container');

        const videoElement = document.createElement('video');
        videoElement.src = videoURL;
        videoElement.controls = true;
        videoContainer.appendChild(videoElement);

        // Create title element
        const titleElement = document.createElement('p');
        titleElement.classList.add('video-title');
        titleElement.textContent = videoTitle;
        videoContainer.appendChild(titleElement);

        // Append video container to the gallery
        videoGallery.appendChild(videoContainer);

        // Clear form inputs
        videoInput.value = '';
        document.getElementById('videoTitle').value = '';
    } else {
        alert("Please select a video and enter a title.");
    }
}

// Attach the uploadVideo function to the button click event
document.getElementById('uploadButton').addEventListener('click', uploadVideo);
