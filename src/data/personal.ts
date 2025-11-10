export const projects = [
  {
    title: "Scan4All App",
    desc: [
      "Aplicación móvil desarrollada con React Native + Expo para analizar archivos y URLs mediante la API pública de VirusTotal.",
      "Funciona como cliente visual para el backend Scan4All API, mostrando estado, resultado y estadísticas de seguridad de cada análisis.",
      "Permite subir archivos (PDF, JPG, EXE, ZIP, etc.), analizar enlaces web y ver el progreso del análisis en tiempo real.",
      "Ofrece un resumen visual del resultado (seguro, malicioso o no soportado) y muestra los motores antivirus participantes."
    ],
    tech: [
      "React Native (Expo SDK 52)",
      "TypeScript",
      "React Navigation",
      "Ionicons",
      "React Native Stylesheet",
      "FastAPI",
      "VirusTotal API v3",
      "Expo EAS CLI"
    ],
    repo: "https://github.com/tonyslabs/scan4all-app",
    site: "",
    images: [
      "/images/scan/1.png",
      "/images/scan/2.png",
      "/images/scan/3.png"
    ]
  },
  {
    title: "Scan4All API",
    desc: [
      "Backend desarrollado con Python + FastAPI que actúa como intermediario entre la aplicación móvil y la API de VirusTotal.",
      "Evita exponer directamente la clave VT_API_KEY en el cliente y añade control sobre tipos de archivos, tamaño máximo y seguridad básica.",
      "Permite analizar archivos y URLs, devolver el ID del análisis y consultar su estado hasta obtener el resultado final.",
      "Incluye configuración de CORS, manejo de errores y variables de entorno mediante python-dotenv."
    ],
    tech: [
      "Python",
      "FastAPI",
      "httpx",
      "fastapi.middleware.cors",
      "python-dotenv",
      "VirusTotal API v3",
      "Uvicorn"
    ],
    repo: "https://github.com/tonyslabs/scan4all-api",
    site: "",
    images: []
  },
  {
    title: "HiResSpot",
    desc: [
      "Reproductor de música de escritorio enfocado en la biblioteca local del usuario.",
      "Construido con Electron, React y TypeScript, ofrece una interfaz moderna y fluida.",
      "Permite escanear carpetas, leer metadatos y reproducir archivos FLAC y WAV con alta fidelidad.",
      "Incluye controles de reproducción y navegación por álbumes, artistas y pistas."
    ],
    tech: [
      "Electron",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Vite"
    ],
    repo: "https://github.com/Anthonyslabs/hiresspot",
    site: "",
    images: [
      "/images/hires/1.png",
      "/images/hires/2.png",
      "/images/hires/3.png",
      "/images/hires/4.png"
    ]
  },
  {
    title: "Film Society",
    desc: [
      "Frontend web para un addon de Stremio desarrollado con Laravel.",
      "Permite explorar, buscar y reproducir películas y series desde la API del addon.",
      "Diseño responsivo con Tailwind CSS y caché optimizada para alto rendimiento."
    ],
    tech: [
      "Laravel",
      "TailwindCSS",
      "Alpine.js",
      "Vite"
    ],
    repo: "https://github.com/Anthonyslabs/filmsociety",
    site: "https://filmsocialclub.io/",
    images: [
      "/images/film/1.png",
      "/images/film/2.png",
      "/images/film/3.png",
      "/images/film/4.png",
      "/images/film/5.png",
      "/images/film/6.png"
    ]
  }
];
