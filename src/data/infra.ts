export const projects = [
  {
    title: "Strivex Deploy Pipeline",
    desc: [
      "Automated deployment system for Laravel and FastAPI services on shared and VPS environments.",
      "Uses GitHub Actions with SFTP Deploy and remote Bash scripts for zero-downtime updates.",
      "Includes branch-based staging and production syncs with environment variable injection.",
      "Implements log parsing and Telegram alerts for each deployment step.",
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
      "Dockerized development stack for multi-service orchestration (Laravel, FastAPI, MySQL, Redis).",
      "Custom Docker Compose setup for consistent local-to-production parity.",
      "Includes volume persistence, automatic hot-reload, and shared .env injection for both services.",
      "Configured lightweight Nginx proxy layer with SSL for secure API testing.",
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
      "Set of Bash utilities for monitoring, backup, and log cleanup across remote Linux servers.",
      "Automated weekly maintenance routines and disk health checks using smartctl and crontab.",
      "Centralized log rotation system with Telegram notifications on error thresholds.",
      "Designed for shared hosting and VPS instances managed under Strivex Labs infrastructure.",
    ],
    tech: ["Bash", "Linux", "smartctl", "Cron", "SSH", "Telegram API"],
  },
];

