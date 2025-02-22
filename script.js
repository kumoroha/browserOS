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

// Update clock
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    clockElement.textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();

// File management functions
function createFile() {
    const fileName = prompt('Enter file name:');
    if (fileName) {
        localStorage.setItem(fileName, '');
        alert('File created!');
    }
}

function loadFile() {
    const fileName = prompt('Enter file name to load:');
    if (fileName) {
        const fileContent = localStorage.getItem(fileName);
        if (fileContent !== null) {
            document.getElementById('file-content').value = fileContent;
            alert('File loaded!');
        } else {
            alert('File not found!');
        }
    }
}

function saveFile() {
    const fileName = prompt('Enter file name to save:');
    if (fileName) {
        const fileContent = document.getElementById('file-content').value;
        localStorage.setItem(fileName, fileContent);
        alert('File saved!');
    }
}

function editFile() {
    const fileName = prompt('Enter file name to edit:');
    if (fileName) {
        const fileContent = localStorage.getItem(fileName);
        if (fileContent !== null) {
            document.getElementById('file-content').value = fileContent;
            alert('File loaded for editing!');
        } else {
            alert('File not found!');
        }
    }
}
