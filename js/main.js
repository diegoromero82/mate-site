// =========================================================
// main.js - Lógica Global del Frontend (MATE SAS)
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. MODO OSCURO / CLARO
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleBtnMobile = document.getElementById('theme-toggle-mobile');
    const htmlElement = document.documentElement;

    function toggleTheme() {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }

    // Comprobar preferencia previa
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }

    // Asignar eventos a los botones
    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
    if (themeToggleBtnMobile) themeToggleBtnMobile.addEventListener('click', toggleTheme);


    // ==========================================
    // 2. MENÚ MÓVIL (Toggle)
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.querySelector('nav');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('hidden');
            navMenu.classList.toggle('flex');
            navMenu.classList.toggle('flex-col');
            navMenu.classList.toggle('absolute');
            navMenu.classList.toggle('top-20');
            navMenu.classList.toggle('left-0');
            navMenu.classList.toggle('w-full');
            navMenu.classList.toggle('bg-white');
            navMenu.classList.toggle('dark:bg-background-dark');
            navMenu.classList.toggle('p-6');
            navMenu.classList.toggle('shadow-xl');

            const icon = mobileMenuBtn.querySelector('.material-icons');
            if (icon.textContent === 'menu') {
                icon.textContent = 'close';
            } else {
                icon.textContent = 'menu';
            }
        });
    }

    // ==========================================
    // 3. ANIMACIÓN DE CONTADORES (Scroll)
    // ==========================================
    const counters = document.querySelectorAll('.counter-animate');
    
    // Solo ejecutar si hay contadores en la página actual
    if (counters.length > 0) {
        const observerOptions = {
            threshold: 0.5 // Se activa cuando la mitad del contador es visible
        };

        const animateCounter = (counter) => {
            const targetText = counter.getAttribute('data-target') || counter.innerText;
            // Si no habíamos guardado el target original, lo guardamos
            if (!counter.hasAttribute('data-target')) {
                counter.setAttribute('data-target', targetText);
            }

            const targetNumber = parseInt(targetText.replace(/\D/g, ''));
            const hasPlus = targetText.includes('+');
            let count = 0;
            const inc = targetNumber / 80; // Velocidad

            const updateCount = () => {
                count += inc;
                if (count < targetNumber) {
                    let currentDisplay = Math.ceil(count).toLocaleString('es-CO');
                    counter.innerText = (hasPlus ? '+' : '') + currentDisplay;
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = (hasPlus ? '+' : '') + targetNumber.toLocaleString('es-CO');
                }
            };
            
            updateCount();
        };

        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target); // Que anime solo 1 vez
                }
            });
        }, observerOptions);

        counters.forEach(counter => {
            // Guardamos el valor final y ponemos todo en 0 antes de que aparezcan
            const originalText = counter.innerText;
            counter.setAttribute('data-target', originalText);
            const hasPlus = originalText.includes('+');
            counter.innerText = (hasPlus ? '+0' : '0'); 
            counterObserver.observe(counter);
        });
    }

    // ==========================================
    // 4. CARRUSEL DE SERVICIOS
    // ==========================================
    const services = document.querySelectorAll('.service-slide');
    if (services.length > 0) {
        // Inicializar el carrusel (el código moveService está afuera para poder ser llamado desde el HTML)
        setInterval(() => window.moveService(1), 8000); // Auto-play cada 8s
    }
});

// ==========================================
// FUNCIONES GLOBALES (Para botones HTML)
// ==========================================

// Función para cambiar de pestañas en la sección Iniciativas
window.switchTab = function(index) {
    const buttons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    if(buttons.length === 0 || contents.length === 0) return;

    buttons.forEach(btn => btn.classList.remove('active-tab'));
    contents.forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('block');
    });

    buttons[index].classList.add('active-tab');
    contents[index].classList.remove('hidden');
    contents[index].classList.add('block');
};

// Función para mover el carrusel
window.currentService = 0;
window.moveService = function(step) {
    const services = document.querySelectorAll('.service-slide');
    if (services.length === 0) return;

    services[window.currentService].classList.add('hidden');
    services[window.currentService].classList.remove('block');
    
    window.currentService = (window.currentService + step + services.length) % services.length;
    
    services[window.currentService].classList.remove('hidden');
    services[window.currentService].classList.add('block', 'animate-fadeIn');
};