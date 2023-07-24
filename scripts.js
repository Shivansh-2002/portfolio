function toggleHeaderVisibility() {
    const header = document.getElementById('header');
    const scrollY = window.scrollY;
    const cursorY = event.clientY;
    const windowHeight = window.innerHeight;
    const showHeaderThreshold = windowHeight * 0.1; // 10% of the window height
    console.log(cursorY);
    if (scrollY > showHeaderThreshold) {
        if(cursorY <= showHeaderThreshold){
            header.style.display = 'block';    
        }
        else{
            header.style.display = 'none';
        }
    } else {
        header.style.display = 'block';
    }
}

// Initially show the header on page load
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    header.style.display = 'block';
});

// Add an event listener for scrolling
window.addEventListener('scroll', toggleHeaderVisibility);

// Add an event listener for mouse movement
window.addEventListener('mousemove', toggleHeaderVisibility);