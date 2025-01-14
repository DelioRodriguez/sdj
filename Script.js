document.addEventListener('DOMContentLoaded', () => {
    const careerOptions = document.getElementById('career-options');
    const numberOfSubjectsInput = document.getElementById('number-of-subjects');
    const subjectsDiv = document.getElementById('subjects-div');
    const subjectsForm = document.getElementById('subjects-form');
    const resultContainer = document.getElementById('result');
    const continueButton = document.getElementById('continue-button');
    const alertContainer = document.getElementById('alert-container');

    // Datos de ejemplo para materias por carrera
    const subjectsByCareer = {
        "Software": {
            "Fundamentos del computador": 4,
            "Introducción a la elaboración de algoritmos": 4,
            "Historia Universal": 3,
            "Redacción Castellana": 4,
            "Orientacion Institucional ": 1,
            "Pre-Cálculo": 5,
            "Ética 1": 3,
            "Historia Dominicana": 3,
            "Cálculo Diferencial": 5,
            "Contabilidad Financiera": 4,
            "Fundamentos de Programación": 4,
            "Ética 2": 3,
            "Introducción a las bases de datos": 4,
            "Probabilidad y Estadística": 3,
            "Programación 1": 4,
            "Análisis y Diseño de sistemas": 4,
            "Cálculo Integral": 5,
            "Física General": 4,
            "Laboratorio Física General": 1,
            "Ética 3": 3,
            "Diseño Centrado en el usuario": 4,
            "Metodología de la Investigación": 3,
            "Base de datos Avanzada": 4,
            "Programación 2": 4,
            "Inteligencia Artificial": 4,
            "Auditoría Informática": 4,
            "Programación 3": 4,
            "Minería de Datos e Inteligencia de Negocios": 4,
            "Fundamentos de Electrónica": 4,
            "Laboratorio Fundamentos de Electrónica": 1,
            "Programación Web": 4,
            "Electiva 1": 3,
            "Programación Paralela": 4,
            "Introducción a la ingeniería de software": 3,
            "Electiva 2": 3,
            "Desarrollo de Emprendedores": 3,
            "Inglés Técnico": 4,
            "Estructura de Datos": 4,
            "Administración de Proyectos de Software": 4,
            "Introducción al desarrollo de aplicaciones móviles": 4,
            "Plan de Negocios": 3,
            "Proyecto Final TDS": 3
        },
        "Ciber": {
            "Fundamentos del computador": 4,
            "Sistemas Operativos": 3,
            "Redaccion Castellana": 4,
            "Pre-calculo": 5,
            "Orientacion Institucional": 1,
            "Introduccion a la Ciberseguridad": 3,
            "Calculo Diferencial": 5,
            "Fundamentos de Redes": 4,
            "Etica 1": 3,
            "Sistema operativo 2": 3,
            "Introduccion a la elaboracion de algoritmos": 4,
            "Sistema Operativo 3": 3,
            "Fundamentos de Enrutamiento": 4,
            "Laboratorio Fundamentos de Enrutamiento": 1,
            "Fundamentos de programacion": 4,
            "Calculo Integral": 5,
            "Fundamentos de Seguridad": 3,
            "Conmutacion y Enrutamiento": 4,
            "Laboratorio Conmutacion y Enrutamiento": 1,
            "Introduccion a las Bases de Datos": 4,
            "Seguridad de sistemas operativos": 4,
            "Aspectos legales de la Ciberseguridad": 3,
            "Fundamentos de Criptografia": 4,
            "Hacker Erico 1": 4,
            "Seguridad en aplicaciones": 3,
            "Gestion de Riesgos Tecnologicos y Ciberneticos": 3,
            "Desarrollo de politicas y procedimientos de seguridad": 3,
            "Hacker etico 2": 3,
            "Seguridad de redes": 4,
            "Informatica forense": 4,
            "Introduccion a la gerencia de proyectos": 3,
            "Auditoria de seguridad informatica": 3,
            "Proyecto final TSI": 4,
            "Seguridad en la nube": 3,
            "Gestion de la continuidad del negocio": 3,
            "Desarrollo de emprendedores": 3
        },
        "Analitica": {
            "Introduccion a la Ciencia de los Datos": 3,
            "Introduccion a la estadistica": 3,
            "Redaccion Castellana": 4,
            "Pre-calculo": 5,
            "Orientacion Institucional": 1,
            "Introduccion a la analitica de datos": 3,
            "Introduccion a los sistemas de representacion": 3,
            "Programacion 1": 3,
            "Historia Universal": 3,
            "Introduccion a las Base de datos": 3,
            "Etica 1": 3,
            "Base de datos 1": 5,
            "Introduccion a los sistemas de computacion 1": 3,
            "Analitica Descriptiva 1": 3,
            "Procesadores de textos y tecnicas de informes": 3,
            "Introduccion a los sistemas de computacion 2": 3,
            "Programacion 2": 3,
            "Analitica Descriptiva 2": 3,
            "Etica 2": 3,
            "Historia Domninicana": 3,
            "Base de datos 2": 3,
            "Analisis de datos con Excel": 3,
            "Base de datos 2": 3,
            "Analitica descriptiva 3": 3,
            "Analitica prescriptiva 1": 3,
            "Programacion 4": 3,
            "Analitica predictiva": 3,
            "Base de datos 3": 3,
            "Desarrollo de emprendedores": 3,
            "Analitica predictiva 2": 3,
            "Procesamiento de imagenes (Optativa 1)": 3,
            "Analitica de datos para finanzas (Optativa 2)": 3,
            "Plan de negocio": 3,
            "Proyecto final TCD": 3
        },
        "multimedia": {
            "Etica 1": 3,
            "Redaccion Castellana": 4,
            "Historia Universal": 3,
            "Orientacion Institucional": 1,
            "Introduccion a la Multimedia": 3,
            "Dibujo e Ilustracion": 3,
            "Fundamentos del Computador": 4,
            "Historia Dominicana": 3,
            "Matematica Aplicada para Multimedia": 5,
            "Razonamiento Critico": 3,
            "Introduccion a la Comunicacion Visual": 3,
            "Graficos de Mapa de Bits": 3,
            "Etica 2": 3,
            "Estadistica Basica": 3,
            "Introduccion a la Elaboracion de Algoritmos": 4,
            "Graficos Vectoriales": 3,
            "Comunicacion Visual Avanzada": 3,
            "Fotografia": 3,
            "Marketing": 3,
            "Metodologia de la Investigacion": 3,
            "Introduccion a Desktop Publishing": 3,
            "Ilustracion Digital": 3,
            "Animacion 2D": 3,
            "Laboratorio de Animacion 2D": 1,
            "3D Modelado y Renderizado": 3,
            "HTML y Creacion de Web Sites": 3,
            "Audio Digital": 3,
            "Produccion Audiovisual": 3,
            "Desarrollo de Emprendedores": 3,
            "Desktop Publishing Avanzado": 3,
            "Interactividad": 3,
            "3D Luces y Texturas": 3,
            "Laboratorio de 3D Luces y Texturas": 1,
            "Programacion Web": 3,
            "Audio Digital Avanzado": 3,
            "Edicion y Post-Produccion de Video": 3,
            "Ingles Tecnico": 4,
            "3D Creacion de Personajes y Animacion": 3,
            "Laboratorio de 3D Creacion de Personajes y Animacion": 1,
            "Diseno y Maquetacion de Interfaz": 3,
            "Motion Graphics y Efectos Visuales": 3,
            "Publicidad": 3,
            "Gestion Empresarial Publicitaria": 3,
            "Electiva 1": 3,
            "Plan de Negocios": 3,
            "Etica 3": 3,
            "Diseno de Empaques": 3,
            "Identidad Corporativa": 3,
            "Redaccion de Textos Publicitarios": 3,
            "Proyecto Final TMM": 3,
            "Electiva 2": 3
        },
        "Videojuegos": {
            "Fundamentos del Computador": 4,
            "Introduccion a la Multimedia": 3,
            "Etica 1": 3,
            "Introduccion a la Elaboracion de Algoritmos": 4,
            "Pre-calculo": 5,
            "Orientacion Institucional": 1,
            "Ingles Nivel 1-3": 0,
            "Introduccion a la Produccion Digital": 2,
            "Calculo Diferencial": 5,
            "Educacion Fisica": 0,
            "Ingles Nivel 4-6": 0,
            "Graficos de Mapa Bits": 3,
            "Redaccion Castellana": 4,
            "Diseno de Interfaz de Usuario": 2,
            "Fundamentos de Programacion": 3,
            "Ingles Nivel 7-9": 0,
            "Diseno de Sprites y Graficos 2D": 3,
            "Estudio del Diseno de Videojuegos": 3,
            "Diseno de Niveles I - 3D": 3,
            "Estadistica Basica": 4,
            "Metodologia de la Investigacion": 3,
            "Diseno de Niveles II - 2D": 3,
            "Fundamentos de Musica y Diseno de Sonido": 2,
            "Presentacion Creativa de Proyectos": 4,
            "Segmentacion de Usuarios": 3,
            "Programacion de Simulaciones": 3,
            "Pretotipo y Prototipo en la Creacion de Ideas": 3,
            "Programacion de Videojuegos I - 3D": 3,
            "Desarrollo de Simulaciones Interactivas": 3,
            "Ingles Nivel 10-12": 0,
            "Propiedad Intelectual y Derechos de Autor": 3,
            "Programacion de Videojuegos II - 2D": 4,
            "Publicacion en Plataformas Moviles": 3,
            "Publicacion en Plataformas Modernas": 3,
            "Inteligencia Artificial para Simulaciones": 3,
            "Desarrollo de Emprendedores": 3,
            "Plan de Negocios": 3,
            "Introduccion a la Gerencia de Proyectos": 3,
            "Proyecto Final": 3
        },
        "IA": {
            "Introducción a la Inteligencia Artificial": 3,
            "Fundamentos del Computador": 4,
            "Redacción Castellana": 4,
            "Pre-cálculo": 5,
            "Ética": 3,
            "Orientación Institucional": 1,
            "Bases de Datos: Diseño e Implementación": 3,
            "Álgebra Matricial": 3,
            "Fundamentos de Programación": 4,
            "Lógica Matemática": 3,
            "Probabilidad y Estadística": 3,
            "Python": 3,
            "Estadística Avanzada": 3,
            "Lenguajes de Programación para IA": 3,
            "Matemáticas Discretas": 3,
            "Modelado de Agentes Inteligentes": 4,
            "Metodología de la Investigación": 3,
            "Procesamiento del Lenguaje Natural": 4,
            "Modelos de Representación del Conocimiento y el Razonamiento": 3,
            "Seminario I": 2,
            "Aprendizaje Automático": 4,
            "Planificación Inteligente": 3,
            "Reconocimiento de Escenas": 4,
            "Inteligencia Artificial Distribuida": 3,
            "Desarrollo de Emprendedores": 4,
            "Seminario II": 2,
            "Aprendizaje Profundo": 3,
            "IA e IoT": 3,
            "Juegos Inteligentes": 3,
            "Robótica Inteligente": 3,
            "Plan de Negocios": 3,
            "Proyecto Final TIA": 4
        },
        "Renovable": {
            "Introducción a las Energías Renovables": 2,
            "Orientación Institucional": 1,
            "Precálculo": 5,
            "Redacción Castellana": 4,
            "Fundamentos del Computador": 4,
            "Ética I": 3,
            "Cálculo Diferencial": 5,
            "Física General": 4,
            "Laboratorio Física General": 1,
            "Fundamentos de CAD": 4,
            "Historia Dominicana": 3,
            "Seguridad Industrial y Salud Ocupacional": 3,
            "Programación para Mecatrónicos": 4,
            "Física Mecánica": 4,
            "Laboratorio Física Mecánica": 1,
            "Circuitos Eléctricos I": 4,
            "Laboratorio Circuitos Eléctricos I": 1,
            "Física Eléctrica": 4,
            "Laboratorio Física Eléctrica": 1,
            "Circuitos Eléctricos II": 4,
            "Laboratorio Circuitos Eléctricos II": 1,
            "Electrónica I": 4,
            "Laboratorio Electrónica I": 1,
            "Energía Minihidráulica": 3,
            "Electrónica II": 4,
            "Laboratorio Electrónica II": 1,
            "Controles Automáticos I": 4,
            "Energía Eólica": 3,
            "Energía Solar": 3,
            "Eficiencia Energética": 3,
            "Administración de Proyectos": 2,
            "Electrónica de Potencia": 3,
            "Laboratorio Electrónica de Potencia": 1,
            "Controles Automáticos II": 4,
            "Transporte y Distribución de la EE": 3,
            "Desarrollo de Emprendedores": 3,
            "Microcontroladores": 4,
            "Mercado Energético": 3,
            "Proyecto Final": 3,
            "Energía de la Biomasa": 3,
            "Sistemas de Control": 3,
            "Electiva 1": 3,
            "Electiva 2": 3
        },
        "redesInformacion": {
            "Fundamentos del Computador": 4,
            "Sistemas Operativos": 3,
            "Historia Universal": 3,
            "Redacción Castellana": 4,
            "Pre-cálculo": 5,
            "Orientación Institucional": 1,
            "Ética 1": 3,
            "Inglés Nivel 1-3": 0,
            "Historia Dominicana": 3,
            "Cálculo Diferencial": 5,
            "Educación Física": 0,
            "Inglés Nivel 4-6": 0,
            "Fundamentos de Redes": 4,
            "Sistema Operativo II": 3,
            "Introducción a la Elaboración de Algoritmos": 4,
            "Sistema Operativo III": 3,
            "Fundamentos de Enrutamiento": 4,
            "Laboratorio Fundamentos de Enrutamiento": 1,
            "Fundamentos de Programación": 4,
            "Cálculo Integral": 5,
            "Contabilidad Financiera": 4,
            "Física General": 4,
            "Laboratorio Física General": 1,
            "Conmutación y Enrutamiento": 4,
            "Laboratorio Conmutación y Enrutamiento": 1,
            "Probabilidad y Estadística": 4,
            "Introducción a las Bases de Datos": 3,
            "Administración I": 4,
            "Fundamentos de Seguridad": 3,
            "Ética 2": 3,
            "Metodología de Investigación": 3,
            "Instalación de Redes": 3,
            "Laboratorio Instalación de Redes": 1,
            "Tecnologías WAN": 4,
            "Electiva": 3,
            "Redes Inalámbricas": 4,
            "Fundamentos de Electrónica": 4,
            "Laboratorio Fundamentos de Electrónica": 1,
            "Desarrollo de Emprendedores": 3,
            "Ética 3": 3,
            "Inglés Técnico": 4,
            "Electiva": 3,
            "Introducción a la Gerencia de Proyectos": 3,
            "Enrutamiento Avanzado": 4,
            "Plan de Negocios": 3,
            "Proyecto Final TRI": 3,
            "Introducción al Diseño de Redes": 3
        },
        "Mecatrónica": {
            "Historia Universal": 3,
            "Dibujo Técnico": 4,
            "Orientación Institucional": 1,
            "Precálculo": 5,
            "Redacción Castellana": 4,
            "Fundamentos del Computador": 4,
            "Ética I": 3,
            "Cálculo Diferencial": 5,
            "Física General": 4,
            "Laboratorio Física General": 1,
            "Historia Dominicana": 3,
            "Fundamentos de CAD": 4,
            "Programación para Mecatrónicos": 3,
            "Educación Física": 0,
            "Ingeniería De Los Materiales Aplicada": 3,
            "Ética II": 3,
            "Cálculo Integral": 5,
            "Física Mecánica": 4,
            "Laboratorio Física Mecánica": 1,
            "Circuitos Eléctricos I": 4,
            "Laboratorio Circuitos Eléctricos I": 1,
            "Seguridad Industrial y Salud Ocupacional": 3,
            "Ética 3": 3,
            "Probabilidad y Estadística": 3,
            "Metrología": 3,
            "Circuitos Eléctricos II": 4,
            "Laboratorio Circuitos Eléctricos II": 1,
            "Electrónica I": 4,
            "Laboratorio Electrónica I": 1,
            "Electrónica Digital": 3,
            "Laboratorio Electrónica Digital": 1,
            "Estática y Dinámica Aplicada": 3,
            "Física Eléctrica": 4,
            "Laboratorio Física Eléctrica": 1,
            "Electrónica II": 4,
            "Laboratorio Electrónica II": 1,
            "Sistemas Digitales": 4,
            "Controles Automáticos I": 4,
            "Instrumentación Industrial": 3,
            "Metodología de la Investigación": 3,
            "Administración de Proyectos": 3,
            "CAD Avanzado": 4,
            "Electrónica Industrial": 3,
            "Laboratorio Electrónica Industrial": 1,
            "Fundamentos de Máquinas Eléctricas": 5,
            "Controles Automáticos II": 4,
            "Microcontroladores": 4,
            "Procesos de Manufactura": 5,
            "Desarrollo de Emprendedores": 3,
            "Sistemas de Control": 5,
            "Integración de Sistemas Mecatrónicos": 3,
            "Robótica": 4,
            "Redes de Comunicación Industrial": 4,
            "Proyecto Final": 3,
            "Programación Básica CNC": 4,
            "Plan de Negocios": 3,
            "Electiva": 3
        },
        "manofactura": {
            "Historia Universal": 3,
            "Dibujo Técnico": 4,
            "Orientación Institucional": 1,
            "Precálculo": 5,
            "Redacción Castellana": 4,
            "Fundamentos del Computador": 4,
            "Ética I": 3,
            "Cálculo Diferencial": 5,
            "Física General": 4,
            "Laboratorio Física General": 1,
            "Fundamentos de CAD": 4,
            "Química Aplicada": 4,
            "Laboratorio Química Aplicada": 1,
            "Metrología": 3,
            "Cálculo Integral": 5,
            "Física Mecánica": 4,
            "Laboratorio Física Mecánica": 1,
            "Seguridad Industrial y Salud Ocupacional": 3,
            "Mecánica Básica": 4,
            "Ética II": 3,
            "Aplicaciones de Torno": 4,
            "Taller de Torno": 2,
            "Ciencia de los Materiales": 4,
            "CAD Avanzado": 4,
            "Mantenimiento Electromecánico": 3,
            "Probabilidad y Estadística": 3,
            "Ética III": 3,
            "Aplicaciones de Fresadora": 4,
            "Taller de Fresadora": 2,
            "Historia Dominicana": 3,
            "Controles Automáticos I": 4,
            "Metodología de la Investigación": 3,
            "Tratamiento Térmico": 3,
            "Administración de Proyectos": 2,
            "Controles Automáticos II": 4,
            "Máquinas de Electro-Descargas": 3,
            "Programación Básica CNC": 4,
            "Desarrollo de Emprendedores": 3,
            "Herramientas de Calidad": 3,
            "CAD/CAM Básico": 4,
            "Inglés Técnico": 4,
            "Programación Avanzada en CNC": 4,
            "CAD/CAM Avanzado": 4,
            "Control de Calidad": 4,
            "Proyecto Final": 3,
            "Diseño de Moldes de Inyección para Plásticos": 3,
            "Plan de Negocios": 3,
            "Electiva 1": 4,
            "Electiva 2": 4
        },
        "Médicos": {
            "Introducción a la Manufactura de Dispositivos Médicos": 2,
            "Dibujo Técnico": 4,
            "Historia Universal": 3,
            "Orientación Institucional": 1,
            "Precálculo": 5,
            "Redacción Castellana": 4,
            "Fundamentos del Computador": 4,
            "Ética I": 3,
            "Fundamentos de la Ingeniería de Dispositivos Médicos": 3,
            "Cálculo Diferencial": 5,
            "Física General": 4,
            "Laboratorio Física General": 1,
            "Metrología": 3,
            "Ética II": 3,
            "Historia Dominicana": 3,
            "Procesos de Manufactura I": 3,
            "Manufactura de Dispositivos Médicos: Procesos, Equipos y Técnicas": 3,
            "Introducción a la Logística y Cadena de Suministros": 3,
            "Física Mecánica": 4,
            "Laboratorio Física Mecánica": 1,
            "Fundamentos de CAD": 4,
            "Seguridad Industrial y Salud Ocupacional": 3,
            "Fundamentos de Electrónica": 3,
            "Regulaciones para la Manufactura de Dispositivos Médicos": 2,
            "Biomateriales y Biocompatibilidad": 3,
            "Procesos de Manufactura II": 3,
            "Prototipado de Dispositivos Médicos con Impresión 3D": 3,
            "CAD Avanzado": 4,
            "Probabilidad y Estadística": 3,
            "Administración 1": 2,
            "Validación para MDM": 3,
            "Diseño de Facilidades para MDM": 3,
            "Procesos de Moldeo por Inyección": 3,
            "Métodos Estadísticos para MDM": 3,
            "Controles Automáticos I": 3,
            "Metodología de la Investigación": 3,
            "Herramientas de Calidad": 3,
            "Administración de Proyectos": 2,
            "Validación de Sistemas Computarizados": 3,
            "Desarrollo de Procesos y Sistemas de Calidad para Dispositivos Médicos": 3,
            "Desarrollo de Emprendedores": 3,
            "Programación Básica CNC": 4,
            "CAD/CAM Básico": 4,
            "Controles Automáticos II": 4,
            "Diseño de Dispositivos Médicos": 3,
            "Proyecto Final": 3,
            "Plan de Negocios": 3,
            "Electiva": 3,
            "Inglés Técnico": 4
        },
        "industrial": {
            "Historia Universal": 3,
            "Historia del Diseño Industrial": 2,
            "Orientación Institucional": 1,
            "Precálculo": 5,
            "Redacción Castellana": 4,
            "Fundamentos del Computador": 4,
            "Ética I": 3,
            "Cálculo Diferencial": 5,
            "Física General": 4,
            "Laboratorio Física General": 1,
            "Química Aplicada": 4,
            "Laboratorio Química Aplicada": 1,
            "Dibujo Técnico": 4,
            "Ética II": 3,
            "Seguridad Industrial y Salud Ocupacional": 3,
            "Ciencia de los Materiales": 4,
            "Metrología": 3,
            "Fundamentos del Diseño Bidimensional": 4,
            "Procesos Industriales I": 4,
            "Fundamentos de CAD": 4,
            "Dibujo y Composición": 4,
            "Historia Dominicana": 3,
            "Fundamentos del Diseño Tridimensional": 4,
            "Procesos Industriales II": 4,
            "Física Mecánica": 4,
            "Laboratorio Física Mecánica": 1,
            "Probabilidad y Estadística": 3,
            "CAD Avanzado": 4,
            "Modelos y Prototipos": 3,
            "Ergonomía": 4,
            "Diseño Industrial I": 4,
            "Fundamentos de CAD/CAM": 3,
            "Metodología de la Investigación": 3,
            "Ilustración Digital": 2,
            "Electiva": 3,
            "Técnicas Multimedia": 2,
            "Diseño Industrial II": 4,
            "Procesos Industriales III": 4,
            "Fundamentos de CAE": 5,
            "Desarrollo de Emprendedores": 3,
            "Administración de Proyectos": 2,
            "Ética III": 3,
            "Inglés Técnico": 4,
            "Diseño Industrial III": 4,
            "Proyecto Final": 5,
            "Aplicación de materiales en el Diseño": 4,
            "Plan de Negocios": 3
        },
        "sonido": {
            "Fundamentos del Computador": 3,
            "Introducción a la Música": 3,
            "Redacción Castellana": 4,
            "Teoría del Sonido": 3,
            "Orientación Institucional": 1,
            "Introducción al DAW": 2,
            "Laboratorio Introducción al DAW": 1,
            "Matemática Aplicada para Multimedia": 5,
            "Electrónica del Audio": 3,
            "Procesamiento de Señal": 3,
            "Teoría Musical I": 3,
            "Procesamiento de Señal": 4,
            "Mesa de Mezcla 1": 4,
            "Psicoacústica": 3,
            "Sonido Para Audiovisuales": 3,
            "Teoría Musical 2": 3,
            "Electiva Ciclo Profesional 1": 3,
            "Electiva Ciclo Formativo": 2,
            "Microfonía": 4,
            "Grabación en Estudio": 4,
            "MIDI": 3,
            "Taller de Entrenamiento Auditivo 2": 2,
            "DAW Avanzado": 3,
            "Comunicación y Expresión Sonora": 4,
            "Electiva Ciclo Profesional 2": 3,
            "Sonido para Cine y Televisión 1": 3,
            "Metodología de la Investigación": 3,
            "Acústica Arquitectónica": 3,
            "Mesa de Mezcla 2": 3,
            "Ética 2": 3,
            "Sonido para Cine": 4,
            "Acústica Arquitectónica": 4,
            "Masterización de Sonido": 3,
            "Sonido en Vivo": 3,
            "Desarrollo de Emprendedores": 4,
            "Ética Profesional": 2,
            "Locución Comercial": 2,
            "Industria de la Música": 3,
            "Proyecto Final TSO": 4,
            "Mesa de Mezcla I": 3,
            "Microfonía": 3,
            "Teoría Musical II": 3,
            "Entrenamiento Auditivo Musical": 3,
            "Introducción al Piano": 3,
            "Sonido para Audiovisuales": 3,
            "Entrenamiento Auditivo Frecuencial": 3,
            "Producción Musical": 3,
            "Grabación en Estudio": 3,
            "Laboratorio de Grabación en Estudio": 3,
            "MIDI": 3,
            "DAW Avanzado": 3,
            "Marketing": 3,
            "Apreciación Musical": 4,
            "Sonido para Radio y TV": 2,
            "Mesa de Mezcla II": 4,
            "Psicoacústica": 4,
            "Masterización de Sonido": 3,
            "Sonido en Vivo 1": 3,
            "Desarrollo de Emprendedores": 2,
            "Sonido Envolvente": 2,
            "Sonido para Cine y Televisión 2": 2,
            "Inglés Técnico": 3,
            "Ética 3": 2,
            "Sonido en Vivo 2": 3,
            "Proyecto Final": 3,
            "Aspectos Legales Industria": 3,
            "Electiva Ciclo Profesional 3": 3,
            "Preparación para el TOEIC": 2
        },
        "forense": {
                    "Fundamentos del Computador": 4,
                    "Sistemas Operativos": 3,
                    "Redacción Castellana": 4,
                    "Pre-cálculo": 5,
                    "Orientación Institucional": 3,
                    "Introducción a la Ciberseguridad": 3,
                    "Introducción a la Ciencia Forense": 3,
                    "Marco Legal y Normativa Forense": 4,
                    "Educación Física": 3,
                    "Fundamentos de Redes": 4,
                    "Ética I": 3,
                    "Introducción a la elaboración de Algoritmos": 4,
                    "Sistema Operativo II": 3,
                    "Sistema Operativo III": 3,
                    "Fundamentos de Enrutamiento": 4,
                    "Laboratorio Fundamentos de Enrutamiento": 4,
                    "Fundamentos de Programación": 4,
                    "Procesos de Informática Forense": 3,
                    "Conmutación y Enrutamiento": 4,
                    "Laboratorio Conmutación y Enrutamiento": 4,
                    "Introducción a las Bases de Datos": 4,
                    "Seguridad de Sistemas Operativos": 4,
                    "Gestión de Evidencia Digital I": 4,
                    "Laboratorio Gestión de Evidencia Digital I": 4,
                    "Hacker Ético I": 4,
                    "Seguridad en Aplicaciones": 3,
                    "Gestión de Evidencia Digital II": 4,
                    "Laboratorio Gestión de Evidencia Digital II": 4,
                    "Introducción a la Gerencia de Proyectos": 3,
                    "Análisis Forense Digital I": 4,
                    "Laboratorio Análisis Forense Digital I": 4,
                    "Forensia en Vivo": 3,
                    "Desarrollo de Emprendedores": 3,
                    "Métodos y Herramientas Anti-Forense": 3,
                    "Análisis Forense Digital II": 4,
                    "Laboratorio Análisis Forense Digital II": 4,
                    "Informe Técnico Pericial": 3,
                    "Análisis Forense de Malware": 3,
                    "Proyecto Final TIF": 3
        },
        "telecomunicaciones": {
            "Fundamentos de Programación I": 3,
            "Introducción a las Telecomunicaciones": 2,
            "Orientación Institucional": 1,
            "Pre-cálculo": 5,
            "Redacción Castellana": 4,
            "Fundamentos del Computador": 4,
            "Ética I": 3,
            "Inglés Nivel 1-3": 3,
            "Cálculo Diferencial": 5,
            "Marco Regulatorio Telecomunicaciones": 2,
            "Redes de Comunicaciones I": 3,
            "Fundamentos de Programación II": 3,
            "Historia Dominicana": 3,
            "Educación Física": 2,
            "Inglés Nivel 4-6": 3,
            "Redes de Comunicaciones II": 3,
            "Introducción a la Seguridad Informática": 3,
            "Teoría de Comunicaciones I": 3,
            "Circuitos Eléctricos I": 4,
            "Laboratorio Circuitos Eléctricos I": 1,
            "Física General": 4,
            "Laboratorio Física General": 1,
            "Inglés Nivel 7-9": 3,
            "Teoría de Comunicaciones II": 3,
            "Circuitos Eléctricos II": 4,
            "Laboratorio Circuitos Eléctricos II": 1,
            "Electrónica I": 4,
            "Laboratorio Electrónica I": 1,
            "Electrónica Digital": 3,
            "Laboratorio Electrónica Digital": 1,
            "Inglés Nivel 10-12": 3,
            "Electrónica II": 3,
            "Laboratorio Electrónica II": 1,
            "Electromagnetismo y Antenas": 3,
            "Sistemas de Comunicación de Datos": 3,
            "Telefonía Analógica y Digital": 3,
            "Desarrollo de Emprendedores": 3,
            "Inglés Técnico": 4,
            "Electrónica de Telecomunicaciones": 3,
            "Laboratorio Electrónica de Telecomunicaciones": 1,
            "Sistemas de Comunicaciones Digitales": 3,
            "Comunicaciones Móviles I": 3,
            "Tecnologías Inalámbricas Emergentes": 3,
            "Administración de Proyectos": 2,
            "Electiva": 3,
            "Comunicaciones Móviles II": 3,
            "Proyecto Final": 3,
            "Comunicaciones por Fibra Óptica": 3,
            "Inteligencia Artificial y Machine Learning": 3,
            "Microcontroladores": 4
        }
    };

    // Función para actualizar las materias en función de la carrera seleccionada
    function updateSubjects() {
        const selectedCareer = careerOptions.value;
        const numSubjects = parseInt(numberOfSubjectsInput.value) || 0;

        subjectsForm.innerHTML = ''; // Limpiar materias anteriores

        if (selectedCareer && subjectsByCareer[selectedCareer]) {
            const subjects = subjectsByCareer[selectedCareer];
            const subjectNames = Object.keys(subjects);

            for (let i = 0; i < numSubjects; i++) {
                const subjectDiv = document.createElement('div');
                subjectDiv.classList.add('subject-selection');

                // Selección de la materia
                const subjectSelect = document.createElement('select');
                subjectSelect.classList.add('form-control');
                subjectSelect.id = `subject-${i}`;
                subjectSelect.innerHTML = `
                    <option value="" disabled selected>Selecciona la materia</option>
                    ${subjectNames.map(subject => `<option value="${subject}">${subject}</option>`).join('')}
                `;
                subjectDiv.appendChild(subjectSelect);

                // Selección de la calificación
                const gradeSelect = document.createElement('select');
                gradeSelect.classList.add('form-control');
                gradeSelect.id = `grade-${i}`;
                gradeSelect.innerHTML = `
                    <option value="" disabled selected>Selecciona la calificación</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="F">F</option>
                `;
                subjectDiv.appendChild(gradeSelect);

                subjectsForm.appendChild(subjectDiv);
            }
            subjectsDiv.style.display = 'block'; // Mostrar div de materias
        }
    }

    // Función para mostrar el div de materias y deshabilitar selección
    window.showSubjectsDiv = function(event) {
        event.preventDefault(); // Evitar el comportamiento por defecto del botón

        if (!careerOptions.value) {
            alertContainer.style.display = 'block'; // Mostrar mensaje de advertencia
            return;
        }

        updateSubjects();
        careerOptions.disabled = true;
        numberOfSubjectsInput.disabled = true;
        continueButton.disabled = true;
        alertContainer.style.display = 'none'; // Ocultar mensaje de advertencia
    };

    // Función para calcular el índice
    window.calculateIndex = function() {
        const selectedCareer = careerOptions.value;
        const numSubjects = parseInt(numberOfSubjectsInput.value) || 0;
        const subjects = subjectsByCareer[selectedCareer] || {};

        let totalCredits = 0;
        let totalPoints = 0;

        for (let i = 0; i < numSubjects; i++) {
            const subjectSelect = document.getElementById(`subject-${i}`);
            const gradeSelect = document.getElementById(`grade-${i}`);

            if (!subjectSelect || !gradeSelect) continue;

            const subjectName = subjectSelect.value;
            const grade = gradeSelect.value;

            if (!subjectName || !grade) continue;

            const subjectCredits = subjects[subjectName];
            let gradePoints;

            switch (grade) {
                case 'A':
                    gradePoints = 4;
                    break;
                case 'B':
                    gradePoints = 3;
                    break;
                case 'C':
                    gradePoints = 2;
                    break;
                case 'F':
                    gradePoints = 0;
                    break;
                default:
                    gradePoints = 0;
            }

            totalCredits += subjectCredits;
            totalPoints += gradePoints * subjectCredits;
        }

        const index = totalCredits > 0 ? totalPoints / totalCredits : 0;
        resultContainer.innerHTML = `Índice Académico: ${index.toFixed(2)}`;
    };

    // Función para reiniciar el formulario
    window.resetForm = function() {
        careerOptions.disabled = false;
        numberOfSubjectsInput.disabled = false;
        continueButton.disabled = false;

        careerOptions.value = '';
        numberOfSubjectsInput.value = 1;
        subjectsDiv.style.display = 'none';
        subjectsForm.innerHTML = '';
        resultContainer.innerHTML = '';
        alertContainer.style.display = 'none';
    };
});
