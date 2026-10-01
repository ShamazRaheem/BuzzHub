function playVideo() {
    // Embed or load the video dynamically (e.g., using an iframe)
    const iframe = document.createElement('iframe');
    iframe.src = "  ";  // Example YouTube URL
    iframe.frameborder = "0";
    iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowfullscreen = true;
  
    const videoWrapper = document.querySelector('.video-wrapper');
    videoWrapper.innerHTML = '';  // Clear the thumbnail and button
    videoWrapper.appendChild(iframe); // Add the video iframe
  
    // Optionally, remove the play button after the video starts
    document.querySelector('.play-button').style.display = 'none';
  }
  

    const mouseCursor = document.querySelector('.mouse-cursor');

    window.addEventListener('mousemove', (e) => {
      mouseCursor.style.left = `${e.pageX}px`;
      mouseCursor.style.top = `${e.pageY}px`;
    });




  ///////////////////DropDown Contact Functionality

  