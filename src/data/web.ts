export const projects = [
  {
    title: "Divia",
    desc: [
      "Business management platform that connects suppliers with e-commerce stores.",
      "Originally built with Laravel 11, now partially migrated to FastAPI for asynchronous API performance.",
      "Implements product catalog synchronization, price lists, and supplier communication through structured APIs.",
      "Integrates WooCommerce and Shopify APIs for inventory updates, price sync, and order tracking.",
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
      "Enterprise Resource Management (ERP) system designed to handle clients, vendors, products, and accounting modules.",
      "Backend written in Python (FastAPI) using async SQLAlchemy and Pydantic schemas for efficient query mapping.",
      "Implements SOAP-based integrations and REST endpoints for external system connectivity.",
      "Frontend powered by Laravel Blade + Alpine.js for interactive dashboards and dynamic data filtering.",
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

