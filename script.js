// Make the DIV element draggable
dragElement(document.getElementById("gui"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("titleBar")) {
    // Move the DIV from the title bar
    document.getElementById("titleBar").onmousedown = dragMouseDown;
  } else {
    // Move the DIV from anywhere inside the DIV
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Close the GUI when the close button is clicked
document.getElementById('closeBtn').onclick = function() {
    document.getElementById('overlay').style.display = 'none';
};

// Optionally, add more interactive features and effects here
