
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



document.addEventListener('DOMContentLoaded', () => {


    if (typeof tippy !== 'undefined') {
        tippy('.planta-link-interactiva, .imagen-galeria', {

            content(reference) {
                const id = reference.getAttribute('data-tippy-template');
                const template = document.getElementById(id);

                return template ? template.innerHTML : 'Contenido no disponible.';
            },
            allowHTML: true,
            interactive: true,
            theme: 'maya',
            placement: 'auto',
            animation: 'scale-subtle',
            delay: [100, 100],
        });
    } else {
        console.error("Tippy.js no está definido. Asegúrate de que los scripts estén cargados en el HTML.");
    }


    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
            themeToggle.textContent = "🌙";
        }
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
                themeToggle.textContent = "🌙";
            } else {
                localStorage.setItem("theme", "light");
                themeToggle.textContent = "☀️";
            }
        });
    }

    // Shrink banner on scroll
    const banner = document.getElementById('banner');
    if (banner) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                banner.classList.add('shrink');
            } else {
                banner.classList.remove('shrink');
            }
        });
    }
});

