const dynamicText = document.querySelector("h1 span");
const words = ["a UX designer.", "research-driven.", "a UX intern at BCLC."];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1000);
    }
}

typeEffect();

// click to enlarge cursor
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('largeCursor');
    });
  });
  


// change project section to bold when in the project section
  const projectSection = document.getElementById("project");

  function checkActiveSection() {
    const rect = projectSection.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      document.querySelector(".nav-link[href='#project']").classList.add("active");
    } else {
      document.querySelector(".nav-link[href='#project']").classList.remove("active");
    }
  }

  window.addEventListener("scroll", checkActiveSection);
  window.addEventListener("load", checkActiveSection);

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
  
  