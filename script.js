// Make the window draggable
let draggedElement = null;
let offsetX = 0;
let offsetY = 0;

document.querySelectorAll('.title-bar').forEach(bar => {
    bar.addEventListener('mousedown', (e) => {
        draggedElement = e.target.parentElement;
        offsetX = e.clientX - draggedElement.getBoundingClientRect().left;
        offsetY = e.clientY - draggedElement.getBoundingClientRect().top;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
});

function onMouseMove(e) {
    if (draggedElement) {
        draggedElement.style.left = `${e.clientX - offsetX}px`;
        draggedElement.style.top = `${e.clientY - offsetY}px`;
    }
}

function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    draggedElement = null;
}

function closeWindow(id) {
    const windowElement = document.getElementById(id);
    if (windowElement) {
        windowElement.style.display = 'none';
    }
}
