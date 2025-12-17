export const projects = [
  {
    title: "Divia",
    desc: [
      "Plataforma de gestión empresarial que conecta proveedores con tiendas e-commerce.",
      "Construida originalmente con Laravel 11 y migrada parcialmente a FastAPI para mejorar el rendimiento asíncrono.",
      "Implementa sincronización de catálogo, listas de precios y comunicación con proveedores mediante APIs estructuradas.",
      "Integra APIs de WooCommerce y Shopify para actualizar inventario, sincronizar precios y hacer seguimiento de pedidos.",
    ],
    tech: [
      "Laravel",
      "FastAPI",
      "MySQL",
      "WooCommerce API",
      "Shopify API",
      "Axios",
    ],
    images: [
      "/images/divia1.png",
    ],
  },
  {
    title: "OperisOne",
    desc: [
      "Sistema ERP diseñado para gestionar clientes, proveedores, productos y módulos contables.",
      "Backend en Python (FastAPI) con SQLAlchemy async y esquemas Pydantic para mapeo eficiente de consultas.",
      "Incluye integraciones SOAP y endpoints REST para conectividad con sistemas externos.",
      "Frontend con Laravel Blade + Alpine.js para dashboards interactivos y filtros dinámicos.",
    ],
    tech: [
      "FastAPI",
      "Laravel",
      "SQLAlchemy",
      "MySQL",
      "SOAP",
      "Alpine.js",
    ]
  },
];
