document.addEventListener('DOMContentLoaded', (event) => {
    const popup = document.getElementById('gui-popup');
    const header = document.getElementById('gui-header');
    
    let isDragging = false;
    let offsetX, offsetY;

    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - popup.getBoundingClientRect().left;
        offsetY = e.clientY - popup.getBoundingClientRect().top;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            popup.style.left = `${e.clientX - offsetX}px`;
            popup.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
});

// Function to change the primary color of the GUI
function changePrimaryColor(color) {
    document.documentElement.style.setProperty('--primary-color', color);
    document.documentElement.style.setProperty('--neon-glow', `0 0 10px ${color}, 0 0 20px ${color}`);
}

// Function to change the secondary color of the GUI
function changeSecondaryColor(color)
