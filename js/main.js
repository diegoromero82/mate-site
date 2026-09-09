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
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        const icon = mobileMenuBtn.querySelector('.material-icons');
        const setMobileMenuState = (isOpen) => {
            mobileMenu.classList.toggle('hidden', !isOpen);
            mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
            if (icon) icon.textContent = isOpen ? 'close' : 'menu';
        };

        mobileMenuBtn.addEventListener('click', () => {
            setMobileMenuState(mobileMenu.classList.contains('hidden'));
        });

        mobileMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => setMobileMenuState(false));
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
                setMobileMenuState(false);
                mobileMenuBtn.focus();
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
window.switchTab = function (index) {
    const buttons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    if (buttons.length === 0 || contents.length === 0) return;

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
window.moveService = function (step) {
    const services = document.querySelectorAll('.service-slide');
    if (services.length === 0) return;

    services[window.currentService].classList.add('hidden');
    services[window.currentService].classList.remove('block');

    window.currentService = (window.currentService + step + services.length) % services.length;

    services[window.currentService].classList.remove('hidden');
    services[window.currentService].classList.add('block', 'animate-fadeIn');
};

document.addEventListener('DOMContentLoaded', () => {
    // === 1. INICIALIZACIÓN DEL SELECTOR DE TELÉFONO ===
    const phoneInput = document.querySelector("#telefono");
    let iti;

    if (phoneInput) {
        iti = window.intlTelInput(phoneInput, {
            preferredCountries: ["co", "cl", "mx", "us"],
            separateDialCode: true,
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
        });
    }

    // === 2. LÓGICA DEL CAPTCHA MATEMÁTICO ===
    const captchaQuestion = document.getElementById('captcha-question');
    const captchaInput = document.getElementById('captcha-input');
    
    let num1, num2, captchaSum;

    function generateCaptcha() {
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        captchaSum = num1 + num2;
        if (captchaQuestion) {
            captchaQuestion.innerText = `${num1} + ${num2}`;
        }
    }
    
    generateCaptcha();

    // === 3. MANEJO DEL FORMULARIO Y SEGURIDAD ===
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Validación del Captcha
            if (parseInt(captchaInput.value) !== captchaSum) {
                const errorMsg = window.i18next ? i18next.t('captcha_error') : "La respuesta de seguridad es incorrecta.";
                alert(errorMsg);
                captchaInput.focus();
                return;
            }

            const form = e.target;
            const btn = document.getElementById('submit-btn');
            const originalBtnText = btn.innerHTML;

            // --- FUNCIÓN DE SEGURIDAD (Sanitización XSS) ---
            const sanitizeInput = (text) => {
                if (!text) return "";
                const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;', "/": '&#x2F;' };
                const reg = /[&<>"'/]/ig;
                // Elimina etiquetas script y HTML
                let clean = text.toString().replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gim, "");
                clean = clean.replace(/<\/?[^>]+(>|$)/g, ""); 
                return clean.replace(reg, (match) => (map[match])).trim();
            };

            // Preparar datos para enviar
            const formData = new FormData(form);
            const cleanData = new URLSearchParams();

            for (let [key, value] of formData.entries()) {
                if (key === 'telefono') {
                    // Extrae el número con el código de área (ej: +57300...)
                    cleanData.append(key, iti ? iti.getNumber() : sanitizeInput(value));
                } else if (key !== 'captcha_user_answer') { // No enviamos el captcha a la base de datos
                    cleanData.append(key, sanitizeInput(value));
                }
            }

            try {
                btn.disabled = true;
                const translate = (key, fallback) => window.i18next ? i18next.t(key) : fallback;
                btn.innerHTML = `${translate('form_sending', 'Enviando...')} <span class="material-icons animate-spin text-sm">sync</span>`;

                // Google Apps Script recibe el envío, pero no expone una respuesta CORS
                // que el navegador pueda leer desde este sitio estático.
                await fetch(form.action, {
                    method: 'POST',
                    body: cleanData,
                    mode: 'no-cors'
                });

                alert(translate('form_success', 'Gracias. Tu mensaje fue enviado para procesamiento. Nos comunicaremos contigo pronto.'));
                form.reset();
                generateCaptcha(); // Refrescar captcha para el siguiente envío

            } catch (error) {
                console.error("Error de envío:", error);
                const translate = (key, fallback) => window.i18next ? i18next.t(key) : fallback;
                alert(translate('form_error', 'No fue posible enviar el mensaje. Por favor, verifica tu conexión e intenta de nuevo más tarde.'));
            } finally {
                btn.disabled = false;
                btn.innerHTML = originalBtnText;
            }
        });
    }
});
