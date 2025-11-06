export const projects = [
  {
    title: "Divia API Layer",
    desc: [
      "Built a REST API middleware between suppliers and client stores using FastAPI.",
      "Implements dynamic product synchronization, stock updates, and pricing rules through modular endpoints.",
      "Handles WooCommerce, Shopify, and SOAP-based supplier systems via unified data adapters.",
      "Each client runs isolated through environment-based configuration and token authentication.",
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
      "Integration hub that links OperisOne ERP with external accounting and logistics systems.",
      "Implements SOAP and REST connectors, validating and transforming data to internal schemas.",
      "Uses async background tasks for queued syncs, retry logic, and Telegram notifications on error events.",
      "All endpoints documented using OpenAPI/Swagger for internal use by developers and partners.",
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
      "Internal service for automated error reporting and status notifications via Telegram bots.",
      "Integrates directly with Laravel and FastAPI services using webhook event delivery.",
      "Handles background processing of logs, API errors, and data import results in real-time.",
      "Supports dynamic message templates and modular routing for multi-client usage.",
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

