// Function to change the primary color of the GUI
function changePrimaryColor(color) {
    document.documentElement.style.setProperty('--primary-color', color);
    document.documentElement.style.setProperty('--neon-glow', `0 0 10px ${color}, 0 0 20px ${color}`);
}

// Function to change the secondary color of the GUI
function changeSecondaryColor(color) {
    document.documentElement.style.setProperty('--secondary-color', color);
}
