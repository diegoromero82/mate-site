// main.js
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
    const navMenu = document.querySelector('nav'); // Selecciona la barra de navegación oculta en móvil

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            // Alternar clases de Tailwind para mostrar/ocultar el menú
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

            // Cambiar icono de menú a cerrar
            const icon = mobileMenuBtn.querySelector('.material-icons');
            if (icon.textContent === 'menu') {
                icon.textContent = 'close';
            } else {
                icon.textContent = 'menu';
            }
        });
    }
});