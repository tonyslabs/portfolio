export const projects = [
  {
    title: "Strivex Deploy Pipeline",
    desc: [
      "Sistema de despliegue automatizado para servicios Laravel y FastAPI en entornos compartidos y VPS.",
      "Usa GitHub Actions con SFTP Deploy y scripts remotos Bash para actualizaciones sin downtime.",
      "Incluye sincronización de staging/producción por rama e inyección de variables de entorno.",
      "Parseo de logs y alertas por Telegram en cada paso del despliegue.",
    ],
    tech: [
      "GitHub Actions",
      "Bash",
      "SFTP Deploy",
      "Linux",
      "Cron",
      "Telegram API",
    ],
  },
  {
    title: "Containerized Local Dev Environment",
    desc: [
      "Stack de desarrollo con Docker para orquestación multi-servicio (Laravel, FastAPI, MySQL, Redis).",
      "Configuración personalizada de Docker Compose para mantener paridad local/producción.",
      "Persistencia de volúmenes, hot-reload automático e inyección de `.env` compartido entre servicios.",
      "Proxy Nginx liviano con SSL para pruebas seguras de APIs.",
    ],
    tech: [
      "Docker",
      "Docker Compose",
      "Nginx",
      "MySQL",
      "Redis",
      "FastAPI",
      "Laravel",
    ],
  },
  {
    title: "Server Management Toolkit",
    desc: [
      "Conjunto de utilidades Bash para monitoreo, backups y limpieza de logs en servidores Linux remotos.",
      "Rutinas semanales automatizadas y chequeos de salud de disco con smartctl y crontab.",
      "Rotación centralizada de logs con notificaciones por Telegram ante umbrales de error.",
      "Diseñado para hosting compartido y VPS administrados bajo la infraestructura de Strivex Labs.",
    ],
    tech: ["Bash", "Linux", "smartctl", "Cron", "SSH", "Telegram API"],
  },
];
