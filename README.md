# Production API Framework

> A production-ready Node.js/TypeScript API demonstrating enterprise-level backend development with comprehensive DevOps practices from code to cloud deployment.

[![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-4.x-lightgrey.svg)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Development Phases](#development-phases)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This project showcases a **production-grade backend API** built with modern best practices, including:

- **Clean Architecture** with separation of concerns
- **Type Safety** with TypeScript strict mode
- **Security Best Practices** (Helmet, CORS, input validation)
- **Comprehensive Error Handling** with custom error classes
- **Request Logging** and monitoring
- **Graceful Shutdown** for zero-downtime deployments
- **Environment-based Configuration** management
- **Code Quality Tools** (ESLint, Prettier, EditorConfig)
- **Docker & Kubernetes** ready (Phase 3)
- **CI/CD Pipeline** with GitHub Actions (Phase 4)

## ✨ Features

### Phase 1: Complete Project Foundation ✅

- ✅ Professional project structure with TypeScript
- ✅ Express.js server with security middleware
- ✅ Health check and readiness probe endpoints
- ✅ Comprehensive error handling
- ✅ Request logging with Morgan
- ✅ Environment configuration management
- ✅ Code quality tools (ESLint, Prettier)
- ✅ Development and production build scripts

### Phase 2: Database & Caching (Coming Soon)

- PostgreSQL 15 integration with TypeORM
- Redis 7 for caching and sessions
- Database migrations and seeders
- Repository pattern implementation

### Phase 3: Containerization (Coming Soon)

- Multi-stage Dockerfile
- Docker Compose for local development
- Kubernetes manifests (Deployments, Services, ConfigMaps)
- Helm charts for orchestration

### Phase 4: CI/CD & Automation (Coming Soon)

- GitHub Actions workflows
- Automated testing and linting
- Docker image building and pushing
- Automated deployments

### Phase 5: Monitoring & Observability (Coming Soon)

- Prometheus metrics
- Grafana dashboards
- Logging with ELK stack
- Distributed tracing

## 🛠 Tech Stack

### Core Technologies

- **Runtime:** Node.js 20 LTS
- **Language:** TypeScript 5.x
- **Framework:** Express.js 4.x
- **Database:** PostgreSQL 15 (Phase 2)
- **Caching:** Redis 7 (Phase 2)

### Security & Middleware

- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Compression** - Response compression
- **Morgan** - HTTP request logger
- **Express Validator** - Input validation

### Development Tools

- **TypeScript** - Type safety and modern JavaScript features
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **ts-node-dev** - Development server with hot reload
- **Nodemon** - Process manager

### DevOps (Future Phases)

- Docker & Docker Compose
- Kubernetes & Helm
- GitHub Actions
- Prometheus & Grafana

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 20.0.0 ([Download](https://nodejs.org/))
- **npm** >= 9.0.0 (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))

Optional (for future phases):

- **Docker** >= 24.0.0
- **Docker Compose** >= 2.20.0
- **kubectl** (Kubernetes CLI)

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/production-api-framework.git
cd production-api-framework
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env
```

Edit `.env` file with your configuration (defaults work for development).

### 4. Start development server

```bash
npm run dev
```

The server will start at `http://localhost:3000`

### 5. Verify the server is running

Open your browser or use curl:

```bash
# Health check
curl http://localhost:3000/health

# API info
curl http://localhost:3000/api/v1
```

## 📁 Project Structure

```
production-api-framework/
├── src/
│   ├── config/                 # Configuration files
│   │   └── environment.ts      # Environment variables configuration
│   ├── controllers/            # Route controllers
│   │   ├── apiController.ts    # API info endpoints
│   │   └── healthController.ts # Health check endpoints
│   ├── middlewares/            # Custom middleware
│   │   └── errorHandler.ts     # Error handling middleware
│   ├── models/                 # Data models (Phase 2)
│   ├── routes/                 # API routes
│   │   ├── apiRoutes.ts        # API v1 routes
│   │   ├── healthRoutes.ts     # Health routes
│   │   └── index.ts            # Main router
│   ├── services/               # Business logic (Phase 2)
│   ├── types/                  # TypeScript type definitions
│   │   └── express.d.ts        # Express type extensions
│   ├── utils/                  # Utility functions
│   ├── app.ts                  # Express app setup
│   └── server.ts               # Server entry point
├── dist/                       # Compiled JavaScript (generated)
├── node_modules/               # Dependencies (generated)
├── .env                        # Environment variables (create from .env.example)
├── .env.example                # Environment variables template
├── .eslintrc.json              # ESLint configuration
├── .prettierrc                 # Prettier configuration
├── .editorconfig               # Editor configuration
├── .gitignore                  # Git ignore rules
├── .dockerignore               # Docker ignore rules
├── tsconfig.json               # TypeScript configuration
├── package.json                # Project dependencies and scripts
├── LICENSE                     # MIT License
└── README.md                   # This file
```

## 📜 Available Scripts

```bash
# Development
npm run dev              # Start development server with hot reload
npm run type-check       # Run TypeScript type checking

# Building
npm run build            # Compile TypeScript to JavaScript
npm run clean            # Remove dist folder

# Production
npm start                # Start production server (builds first)

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint errors automatically
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting

# Testing (Phase 5)
npm test                 # Run tests (not yet implemented)
```

## 🌐 API Endpoints

### Health & Monitoring

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check endpoint for monitoring |
| GET | `/ready` | Readiness probe for Kubernetes |

### API Information

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API information and available endpoints |
| GET | `/api/v1` | API v1 information |

### Example Responses

**GET /health**
```json
{
  "success": true,
  "message": "API is running",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "uptime": 123.456,
  "environment": "development",
  "version": "v1"
}
```

**GET /ready**
```json
{
  "success": true,
  "message": "API is ready",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "uptime": 123.456,
  "environment": "development",
  "version": "v1",
  "services": {
    "database": "not_configured",
    "redis": "not_configured"
  }
}
```

## ⚙️ Environment Variables

Create a `.env` file from `.env.example`:

```bash
# Application
NODE_ENV=development
PORT=3000
API_VERSION=v1
APP_NAME=production-api-framework

# Server
HOST=localhost
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001

# Security
HELMET_ENABLED=true
COMPRESSION_ENABLED=true
CORS_ENABLED=true
CORS_CREDENTIALS=true

# Logging
LOG_LEVEL=info
LOG_FORMAT=combined
ENABLE_REQUEST_LOGGING=true
```

See `.env.example` for complete configuration options.

## 🗓 Development Phases

### ✅ Phase 1: Complete Project Foundation (Current)
- Project initialization and structure
- TypeScript configuration
- Express server with middleware
- Health check endpoints
- Error handling
- Code quality tools

### 🔄 Phase 2: Database & Caching (Next)
- PostgreSQL integration with TypeORM
- Redis for caching
- User authentication
- JWT implementation
- Database migrations

### 🔄 Phase 3: Containerization
- Docker multi-stage builds
- Docker Compose setup
- Kubernetes manifests
- Helm charts

### 🔄 Phase 4: CI/CD Pipeline
- GitHub Actions workflows
- Automated testing
- Docker image building
- Deployment automation

### 🔄 Phase 5: Monitoring & Testing
- Unit and integration tests
- Prometheus metrics
- Grafana dashboards
- Logging infrastructure

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Express.js team for the excellent framework
- TypeScript team for making JavaScript safer
- The Node.js community for amazing tools and libraries

---

**Built with ❤️ for production-ready backend development**
