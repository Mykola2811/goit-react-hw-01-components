
window.addEventListener('load', () => {
  setTimeout(function() {
    const bgColor = document.querySelectorAll(".bg__color");
    for (const bgr of bgColor) {
        function getRandomHexColor() {
          return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        }

        const hexColor = getRandomHexColor();
        bgr.style.backgroundColor = `${hexColor}`;
    }
  }, 0); 
})


