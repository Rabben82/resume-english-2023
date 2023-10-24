/* const showInfoButtons = document.querySelectorAll('.showInfoButton');
const infoOverlays = document.querySelectorAll('.infoOverlay');
let openOverlayIndex = -1; // Track the index of the open overlay, initially set to -1

showInfoButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (openOverlayIndex !== -1) {
            // Close the currently open overlay
            infoOverlays[openOverlayIndex].style.display = 'none';
        }

        if (openOverlayIndex === index) {
            // If the clicked card was already open, close it and reset the openOverlayIndex
            openOverlayIndex = -1;
        } else {
            // Open the clicked card's overlay and update openOverlayIndex
            infoOverlays[index].style.display = 'block';
            openOverlayIndex = index;
        }
    });
}); */