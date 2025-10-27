
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const body = document.body;
  
  sidebar.classList.toggle("closed");
  
  if (!sidebar.classList.contains("closed")) {
    body.classList.add("sidebar-opened");
  } else {
    body.classList.remove("sidebar-opened");
  }
}

let ticking = false;
const banner = document.getElementById("banner");
const SCROLL_THRESHOLD = 80;

function updateBanner() {
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollY > SCROLL_THRESHOLD) {
    if (!banner.classList.contains("shrink")) {
      banner.classList.add("shrink");
    }
  } else {
    if (banner.classList.contains("shrink")) {
      banner.classList.remove("shrink");
    }
  }
  ticking = false;
}

window.addEventListener("scroll", function() {
  if (!ticking) {
    window.requestAnimationFrame(updateBanner);
    ticking = true;
  }
}, { passive: true });



const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  // Carga el estado al iniciar
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "🌙";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      themeToggle.textContent = "🌙";
      localStorage.setItem("theme", "dark");
    } else {
      themeToggle.textContent = "☀️";
      localStorage.setItem("theme", "light");
    }
  });
}



document.addEventListener('DOMContentLoaded', (event) => {
  
  const isMobile = window.innerWidth <= 768; 
  if (typeof tippy !== 'undefined') {
    
    const interactiveWords = document.querySelectorAll('.palabra-interactiva');

    interactiveWords.forEach(word => {
        const id = word.getAttribute('data-tippy-template');
        let targetPage = '';

      
        if (id === 'info-kukulkan') {
            targetPage = '../html_web/info_kukulkan.html';
        } 
  

        if (isMobile) {
            
            if (targetPage) {
               
                if (word._tippy) {
                    word._tippy.destroy(); 
                }
                
                
                word.addEventListener('click', (e) => {
                    e.preventDefault(); 
                    window.location.href = targetPage;
                });
                
                word.style.cursor = 'pointer'; 
            }

        } else {
          
            tippy(word, {
                content() {
                    const template = document.getElementById(id);
                    return template ? template.innerHTML : 'Contenido no encontrado.';
                },
                allowHTML: true, interactive: true, theme: 'maya', placement: 'auto', 
                animation: 'scale-subtle', delay: [100, 100],
            });
        }
    });
    
  } else {
    console.error("Tippy.js no está definido. Asegúrate de que los scripts estén cargados.");
  }
});