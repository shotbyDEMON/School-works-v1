document.addEventListener('DOMContentLoaded', () => {
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
            popup.style.top = `${e.clientY -Here's the continuation and completion of the enhanced JavaScript (`scripts.js`) for the draggable popup:

```javascript
            popup.style.left = `${e.clientX - offsetX}px`;
            popup.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    const changePrimaryColor = (color) => {
        document.documentElement.style.setProperty('--primary-color', color);
        document.documentElement.style.setProperty('--neon-glow', `0 0 10px ${color}, 0 0 20px ${color}`);
    }

    const changeSecondaryColor = (color) => {
        document.documentElement.style.setProperty('--secondary-color', color);
    }

    const closePopup = () => {
        popup.style.transform = 'translate(-50%, -50%) scale(0)';
        popup.style.opacity = '0';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300);
    }
});
