# Workshop01 - Dependencies Documentation

## 📦 **Package Management**

This Node.js application uses `package.json` to manage all dependencies and project configuration.

## 🔧 **Runtime Dependencies**

| Package | Version | Purpose |
|---------|---------|---------|
| `express` | ^4.18.2 | Web application framework for Node.js - handles HTTP requests, routing, and middleware |
| `ejs` | ^3.1.9 | Embedded JavaScript templating engine - enables server-side HTML rendering |

## 📋 **Project Configuration**

- **Name**: workshop01-server
- **Version**: 1.0.0
- **Main Entry Point**: app.js
- **License**: MIT

## 🚀 **Available Scripts**

```bash
npm start    # Start the production server
npm run dev  # Start the development server (same as start for this project)
```

## 📦 **Installation Instructions**

1. **Install all dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

## 🔍 **Dependency Details**

### Express.js (^4.18.2)
- **Purpose**: Core web server framework
- **Features Used**:
  - HTTP routing (`app.get()`)
  - Static file serving (`express.static()`)
  - Template engine integration
  - Middleware support

### EJS (^3.1.9)
- **Purpose**: Server-side templating
- **Features Used**:
  - Dynamic content injection (`<%= variable %>`)
  - Server-side HTML generation
  - Template inheritance and partials support

## 🌟 **Why These Dependencies?**

1. **Express**: Industry-standard Node.js web framework with excellent performance and flexibility
2. **EJS**: Simple templating engine that allows embedding JavaScript in HTML for dynamic content

## 🔒 **Security & Updates**

- All dependencies use semantic versioning (^)
- Regular updates recommended for security patches
- Run `npm audit` to check for vulnerabilities
- Run `npm update` to update to latest compatible versions

## 📁 **Dependency Files**

- `package.json` - Main dependency configuration
- `package-lock.json` - Exact version lock file (auto-generated)
- `node_modules/` - Installed packages directory (auto-generated)