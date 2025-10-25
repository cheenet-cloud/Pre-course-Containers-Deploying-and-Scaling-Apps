# Workshop01 - Server-Based Web Application

A Node.js Express server that serves a dynamic landing page with server-side rendering.

## 📋 **Project Overview**

This is a **server-based web application** (not client-side) that generates dynamic content on the server for each request.

### ✨ **Features**

1. **🖼️ Image Display**: Shows `thumbs-up-gif-6.gif` 
2. **🔗 Repository Link**: Direct link to the GitHub repository
3. **🎲 Dynamic Quotes**: Random quote selection on each page refresh (server-side)
4. **🖥️ Server-Side Rendering**: Complete HTML generation on the server using EJS templates

## 📦 **Dependencies**

See `package.json` for complete dependency list:

- **Express.js** (^4.18.2) - Web application framework
- **EJS** (^3.1.9) - Server-side templating engine

For detailed dependency information, see [DEPENDENCIES.md](DEPENDENCIES.md)

## 🚀 **Quick Start**

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Access the application:**
   - Landing page: http://localhost:3000
   - Health check: http://localhost:3000/health

## 📁 **Project Structure**

```
workshop01/
├── app.js                 # Express server application
├── package.json          # Node.js dependencies & scripts
├── package-lock.json     # Exact dependency versions
├── DEPENDENCIES.md       # Detailed dependency documentation
├── README.md            # This file
├── views/
│   └── index.ejs        # Server-side HTML template
├── public/              # Static files served by Express
│   └── thumbs-up-gif-6.gif
└── node_modules/        # Installed packages (auto-generated)
```

## 🔧 **Technical Details**

- **Framework**: Node.js with Express.js
- **Template Engine**: EJS (Embedded JavaScript)
- **Port**: 3000 (configurable via PORT environment variable)
- **Static Files**: Served from `/public` directory via `/static` URL path

## 🎯 **Key Differentiators**

✅ **Server-Side Application** - Not a client-side framework like Angular/React/Vue  
✅ **True Server-Side Rendering** - HTML generated on the server for each request  
✅ **Dynamic Content** - Random quotes selected on the server, not in browser JavaScript  
✅ **Professional Architecture** - Uses industry-standard Node.js/Express stack  

## 🛠️ **Development**

- **Start Development Server**: `npm run dev`
- **Production Server**: `npm start`
- **Check Dependencies**: `npm audit`
- **Update Dependencies**: `npm update`

## 📊 **Health Check**

The application includes a health check endpoint at `/health` that returns server status.