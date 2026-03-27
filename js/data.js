// data.js
const translations = {
    es: {
        // Navegación
        nav_home: "Inicio",
        nav_about: "Somos Mate",
        nav_projects: "Proyectos",
        nav_contact: "Contáctanos",

        // --- PÁGINA: INDEX (HOME) ---
        // Inicio
        meta_title_index: "MATE | Inversiones & Negocios",
        meta_desc_index: "Impulsamos inclusión económica y ciudadanía inclusiva a través de soluciones productivas, financieras, sociales y sostenibles.",
        // 1.1 Hero Section        
        hero_badge_text: "Transformación Social",
        hero_title: "Impulsamos<br>oportunidades para una ciudadanía más inclusiva",
        hero_subtitle: "En MATE articulamos soluciones productivas, financieras, sociales y sostenibles para fortalecer capacidades, generar ingresos y ampliar oportunidades en personas, comunidades y territorios.",
        hero_btn_1: "Conoce nuestras soluciones",
        hero_btn_2: "Hablemos de una alianza",

        // --- PÁGINA: SOMOS MATE ---
        // Somos Mate
        meta_title_somos: "Somos MATE | Inversiones & Negocios",
        meta_desc_somos: "Conoce a MATE, nuestra historia, misión, visión y el equipo interdisciplinario que impulsa la inclusión económica.",
        // Proyectos
        meta_title_proyectos: "Proyectos | MATE Inversiones & Negocios",
        meta_desc_proyectos: "Conoce nuestros proyectos y soluciones en inclusión productiva, financiera, fortalecimiento social y sostenibilidad.",
        // Contacto
        meta_title_contacto: "Contacto | MATE Inversiones & Negocios",
        meta_desc_contacto: "Ponte en contacto con MATE Inversiones & Negocios. Escríbenos para conversar sobre alianzas y proyectos.",

        // Index - Hero
        hero_title: "Impulsamos oportunidades para una ciudadanía más <span class='text-primary italic'>inclusiva</span>",
        hero_subtitle: "En MATE articulamos soluciones productivas, financieras, sociales y sostenibles para fortalecer capacidades, generar ingresos y ampliar oportunidades en personas, comunidades y territorios.",
        hero_btn_1: "Conoce nuestras soluciones",
        hero_btn_2: "Hablemos de una alianza",

        // 1.2 Quiénes Somos (Home)
        home_about_headline: "Somos <span class='text-primary'>MATE</span>, una firma colombiana que impulsa inclusión económica con enfoque territorial, social y diferencial.",
        home_about_subtext: "Trabajamos con entidades públicas, privadas, de cooperación y organizaciones territoriales para diseñar e implementar soluciones que fortalecen capacidades, promueven autonomía económica y conectan a las personas con más y mejores oportunidades.",
        home_about_btn: "Conocernos",

        // 1.3 Diferencia (Home)
        home_diff_title: "Lo que nos hace diferentes",
        home_diff_subtitle: "Construimos rutas integrales que conectan personas, capacidades, servicios, datos y alianzas para generar cambios sostenibles.",
        home_diff_card1_title: "Mirada integral",
        home_diff_card1_desc: "Conectamos inclusión productiva, financiera, social y sostenibilidad en un mismo marco de acción.",
        home_diff_card2_title: "Enfoque territorial y diferencial",
        home_diff_card2_desc: "Adaptamos cada intervención a las realidades, capacidades y oportunidades de cada contexto y de las personas.",
        home_diff_card3_title: "Trabajo colaborativo",
        home_diff_card3_desc: "Articulamos sector público, cooperación, empresas, comunidades y ecosistemas emprendedores.",
        home_diff_card4_title: "Decisiones con evidencia",
        home_diff_card4_desc: "Incorporamos diagnóstico, seguimiento, analítica de datos y herramientas de economía del comportamiento para fortalecer la toma de decisiones.",
        home_diff_card5_title: "Impacto con propósito",
        home_diff_card5_desc: "Buscamos resultados que fortalezcan bienestar, autonomía y oportunidades reales.",

        // 1.4 Iniciativas (Home)

        home_init_title: "Iniciativas que hoy marcan nuestra agenda",
        // Títulos de pestañas
        init_tab_a: "PROPULXORA",
        init_tab_b: "Modelo Étnico",
        init_tab_c: "Fundación MATE",
        init_tab_d: "Finanzas Plateadas",
        init_tab_e: "Gobierno Corporativo",
        // Contenidos
        init_content_a: "Una plataforma y modelo operativo para acompañar emprendimiento popular con diagnóstico, registro simple, alertas y recomendaciones. Alianza con Fundación Pymergia.",
        init_content_b: "Una apuesta que integra asociatividad, fortalecimiento productivo, identidad cultural y canales de comercialización.",
        init_content_c: "Una iniciativa para movilizar alianzas, filantropía y cofinanciación alrededor de inclusión económica y ciudadanía inclusiva.",
        init_content_d: "Una agenda que conecta inclusión financiera, empleabilidad y emprendimiento para personas mayores de 50 años.",
        init_content_e: "Una línea orientada a fortalecer organización interna, toma de decisiones, transparencia y sostenibilidad en organizaciones y alianzas.",
        init_btn: "Ver soluciones",

        // 1.5 Experiencia e Impacto (Home)

        exp_title: "Experiencia e impacto",
        exp_big_num: "+1.000",
        exp_big_label: "personas impactadas en Colombia",
        exp_btn: "Conoce más",
        exp_desc: "Nuestra experiencia combina trabajo en territorio, fortalecimiento de capacidades, inclusión financiera, investigación aplicada y articulación institucional.",
        exp_stat1_num: "+200",
        exp_stat1_label: "emprendimientos",
        exp_stat2_num: "15",
        exp_stat2_label: "comunidades",
        exp_stat3_num: "+30",
        exp_stat3_label: "alianzas",
        // Servicios del Carrusel
        serv_a_title: "Mujer Étnica",
        serv_a_desc: "Fortalecimos negocios liderados por mujeres indígenas, afrocolombianas, raizales y Rrom, integrando diagnóstico, asistencia técnica, acompañamiento comercial y seguimiento con enfoque étnico y de género.",
        serv_b_title: "Banca de las Oportunidades",
        serv_b_desc: "Elaboramos recomendaciones estratégicas para el diseño de programas de ahorro dirigidos a poblaciones de bajos ingresos y/o vulnerables.",
        serv_c_title: "Migración juvenil rural",
        serv_c_desc: "Lideramos una investigación sobre los factores que inciden en la migración de jóvenes rurales, generando insumos para decisiones y políticas con enfoque territorial.",
        serv_d_title: "Familias en su Tierra",
        serv_d_desc: "Acompañamos procesos de retorno de hogares víctima del conflicto con acciones en seguridad alimentaria, vivienda y generación de ingresos.",
        serv_e_title: "Alianza Bancalimentos",
        serv_e_desc: "Desarrollamos y adaptamos productos financieros incluyentes para población vulnerable, articulando canales, incentivos, comunicación y validación en territorio.",
        serv_f_title: "Educación financiera digital",
        serv_f_desc: "Diseñamos y adaptamos un producto digital de educación financiera para mujeres en condición de vulnerabilidad en Chile, con enfoque pedagógico y conductual.",

        // Footer
        footer_desc: "Impulsamos inclusión económica y ciudadanía inclusiva a través de soluciones productivas, financieras, sociales y sostenibles.",
        footer_links_title: "Enlaces",
        footer_contact_title: "Contacto",
        footer_location: "Bogotá D.C. · Montería, Colombia",
        footer_rights: "© 2026 MATE Inversiones & Negocios SAS. Todos los derechos reservados.",
        developed_by: "Desarrollado por",

    },
    en: {
        // Navegación
        nav_home: "Home",
        nav_about: "We're MATE",
        nav_projects: "Projects",
        nav_contact: "Contact Us",

        // --- PÁGINA: INDEX (HOME) ---
        // SEO (Inicio)
        meta_title_index: "MATE | Investments & Business",
        meta_desc_index: "We drive economic inclusion and inclusive citizenship through productive, financial, social, and sustainable solutions.",
        // 1.1 Hero Section
        // Nota: En inglés el título es más corto, no necesita <br>.
        hero_badge_text: "Social Transformation",
        hero_title: "Driving opportunities for a more inclusive citizenship",
        hero_subtitle: "At MATE, we articulate productive, financial, social, and sustainable solutions to strengthen capacities, generate income, and expand opportunities for people, communities, and territories.",
        hero_btn_1: "Discover our solutions",
        hero_btn_2: "Let's talk about an alliance",

        // --- PÁGINA: SOMOS MATE ---

        // Index - Hero
        hero_title: "We drive opportunities for a more <span class='text-primary italic'>inclusive</span> citizenship",
        hero_subtitle: "At MATE, we articulate productive, financial, social, and sustainable solutions to strengthen capacities, generate income, and expand opportunities for people, communities, and territories.",
        hero_btn_1: "Discover our solutions",
        hero_btn_2: "Let's talk about an alliance",

        // 1.2 About Us (Home)
        home_about_headline: "We are <span class='text-primary'>MATE</span>, a Colombian firm driving economic inclusion with a territorial, social, and differential approach.",
        home_about_subtext: "We work with public, private, cooperation entities, and local organizations to design and implement solutions that strengthen capacities, promote economic autonomy, and connect people with more and better opportunities.",
        home_about_btn: "Get to know us",

        // 1.3 Difference (Home)        
        home_diff_title: "What makes us different",
        home_diff_subtitle: "We build comprehensive pathways that connect people, capacities, services, data, and alliances to generate sustainable changes.",
        home_diff_card1_title: "Comprehensive view",
        home_diff_card1_desc: "We connect productive, financial, and social inclusion with sustainability in a single framework of action.",
        home_diff_card2_title: "Territorial and differential focus",
        home_diff_card2_desc: "We adapt each intervention to the realities, capacities, and opportunities of each context and its people.",
        home_diff_card3_title: "Collaborative work",
        home_diff_card3_desc: "We articulate the public sector, international cooperation, companies, communities, and entrepreneurial ecosystems.",
        home_diff_card4_title: "Evidence-based decisions",
        home_diff_card4_desc: "We incorporate diagnostics, monitoring, data analytics, and behavioral economics tools to strengthen decision-making.",
        home_diff_card5_title: "Impact with purpose",
        home_diff_card5_desc: "We seek results that strengthen well-being, autonomy, and real opportunities.",

        // 1.4 Iniciativas (Home)

        home_init_title: "Initiatives marking our agenda today",
        init_tab_a: "PROPULXORA",
        init_tab_b: "Ethnic Model",
        init_tab_c: "MATE Foundation",
        init_tab_d: "Silver Finance",
        init_tab_e: "Corporate Governance",
        init_content_a: "A platform and operating model to support popular entrepreneurship with diagnostics, simple registration, alerts, and recommendations. Alliance with Pymergia Foundation.",
        init_content_b: "A commitment that integrates associativity, productive strengthening, cultural identity, and marketing channels.",
        init_content_c: "An initiative to mobilize alliances, philanthropy, and co-financing around economic inclusion and inclusive citizenship.",
        init_content_d: "An agenda connecting financial inclusion, employability, and entrepreneurship for people over 50.",
        init_content_e: "A line focused on strengthening internal organization, decision-making, transparency, and sustainability in organizations and alliances.",
        init_btn: "See solutions",

        // 1.5 Experience and Impact (Home)

        // 1.6 Experience and Impact
        exp_title: "Experience and impact",
        exp_big_num: "+1,000",
        exp_big_label: "people impacted in Colombia",
        exp_btn: "Learn more",
        exp_desc: "Our experience combines fieldwork, capacity building, financial inclusion, applied research, and institutional articulation.",
        exp_stat1_num: "+200",
        exp_stat1_label: "enterprises",
        exp_stat2_num: "15",
        exp_stat2_label: "communities",
        exp_stat3_num: "+30",
        exp_stat3_label: "partnerships",
        
        // Carousel of Services
        serv_a_title: "Ethnic Woman",
        serv_a_desc: "We strengthened businesses led by Indigenous, Afro-Colombian, Raizal, and Romani women, integrating diagnostics, technical assistance, commercial support, and monitoring with an ethnic and gender focus.",
        serv_b_title: "Bank of Opportunities",
        serv_b_desc: "We developed strategic recommendations for the design of savings programs aimed at low-income and/or vulnerable populations.",
        serv_c_title: "Rural youth migration",
        serv_c_desc: "We led research on the factors affecting the migration of rural youth, generating inputs for decisions and policies with a territorial focus.",
        serv_d_title: "Families in their Land",
        serv_d_desc: "We supported return processes for conflict-victim households with actions in food security, housing, and income generation.",
        serv_e_title: "Bancalimentos Alliance",
        serv_e_desc: "We developed and adapted inclusive financial products for vulnerable populations, articulating channels, incentives, communication, and field validation.",
        serv_f_title: "Digital financial education",
        serv_f_desc: "We designed and adapted a digital financial education product for vulnerable women in Chile, with a pedagogical and behavioral focus.",


        // Footer
        footer_desc: "We drive economic inclusion and inclusive citizenship through productive, financial, social, and sustainable solutions.",
        footer_links_title: "Links",
        footer_contact_title: "Contact",
        footer_location: "Bogota D.C. · Monteria, Colombia",
        footer_rights: "© 2026 MATE Investments & Business SAS. All rights reserved.",
        developed_by: "Developed by",
    }
};