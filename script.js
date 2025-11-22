
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
const UMBRAL_ACTIVAR = 140; 
const UMBRAL_DESACTIVAR = 110;
let bannerEncogido = false;
function updateBanner() {
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;

 if (!bannerEncogido && scrollY > UMBRAL_ACTIVAR) {
    // Activar solo si NO está encogido y pasamos umbral superior
    banner.classList.add("shrink");
    bannerEncogido = true;
  } else if (bannerEncogido && scrollY < UMBRAL_DESACTIVAR) {
    // Desactivar solo si ESTÁ encogido y bajamos del umbral inferior
    banner.classList.remove("shrink");
    bannerEncogido = false;
  }
  // Entre 60-100px: zona muerta, no hacer nada

  ticking = false; 
}


window.addEventListener("scroll", function() {
  if (!ticking) {
    window.requestAnimationFrame(updateBanner);
    ticking = true; 
  }
}, { passive: true }); 


document.addEventListener('DOMContentLoaded', function() {
  if (scrollY > UMBRAL_ACTIVAR) {
    banner.classList.add("shrink");
    bannerEncogido = true;
  }
});


document.addEventListener("click", function(e) {
  
  if (window.innerWidth <= 768) {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.querySelector(".toggle-btn");

    if (!sidebar.contains(e.target) && 
        !toggleBtn.contains(e.target) && 
        !sidebar.classList.contains("closed")) {
      toggleSidebar();
    }
  }
});


document.addEventListener('DOMContentLoaded', (event) => {
  

  const kukulkanLink = document.querySelector('[data-tippy-template="info-kukulkan"]');
  if (kukulkanLink) {
    kukulkanLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = './html_web/info_kukulkan.html';
    });
  }


  const escrituraLink = document.querySelector('[data-tippy-template="info-escritura"]');
  if (escrituraLink) {
    escrituraLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.open('./html_web/info_escritura.html', '_blank');
    });
  }

  
  if (typeof tippy !== 'undefined') {
    tippy('.palabra-interactiva', {
      content(reference) {
        const id = reference.getAttribute('data-tippy-template');
        const template = document.getElementById(id);
        return template ? template.innerHTML : 'Contenido no encontrado.';
      },
      allowHTML: true,
      interactive: true,
      theme: 'maya',
      placement: 'auto',
      animation: 'scale-subtle',
      delay: [100, 100],
    });
  } else {
    console.error("Tippy.js no está definido.");
  }

  //MODO CLARO / OSCURO
  const themeToggle = document.getElementById("theme-toggle");

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
});
