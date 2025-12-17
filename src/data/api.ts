export const projects = [
  {
    title: "Divia API Layer",
    desc: [
      "Middleware REST entre proveedores y tiendas cliente usando FastAPI.",
      "Implementa sincronización dinámica de productos, actualización de stock y reglas de precio mediante endpoints modulares.",
      "Integra WooCommerce, Shopify y sistemas de proveedores vía SOAP con adaptadores unificados.",
      "Cada cliente corre aislado mediante configuración por entorno y autenticación por token.",
    ],
    tech: [
      "FastAPI",
      "MySQL",
      "Pydantic",
      "WooCommerce API",
      "Shopify API",
      "SOAP",
      "OAuth2",
    ],
  },
  {
    title: "OperisOne Connect",
    desc: [
      "Hub de integración que conecta el ERP OperisOne con sistemas externos de contabilidad y logística.",
      "Conectores SOAP y REST con validación y transformación a esquemas internos.",
      "Tareas asíncronas en segundo plano para colas de sincronización, reintentos y notificaciones por Telegram ante errores.",
      "Endpoints documentados con OpenAPI/Swagger para uso interno de desarrolladores y partners.",
    ],
    tech: [
      "FastAPI",
      "SQLAlchemy",
      "Celery",
      "Redis",
      "SOAP",
      "OpenAPI",
      "Telegram API",
    ],
  },
  {
    title: "Telegram Automation API",
    desc: [
      "Servicio interno para reportes automáticos de errores y notificaciones de estado vía bots de Telegram.",
      "Integración directa con servicios Laravel y FastAPI mediante webhooks.",
      "Procesamiento en segundo plano de logs, errores de API y resultados de importación en tiempo real.",
      "Plantillas dinámicas y ruteo modular para uso multi-cliente.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "Telegram API",
      "AsyncIO",
      "Redis",
      "Webhooks",
    ],
  },
];
