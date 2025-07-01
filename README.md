1. Estructura de carpetas:

📦 /frontend
├── 📁 public
├── 📁 src
│ ├── 📁 assets # Imágenes, logos, íconos, etc.
│ ├── 📁 components # Componentes UI reutilizables (Botones, Inputs, Modal, etc.)
│ ├── 📁 layouts # Layouts según rol (AdminLayout, OperatorLayout)
│ ├── 📁 pages # Páginas por ruta
│ │ ├── 📁 auth # Login/Register
│ │ ├── 📁 dashboard # Dashboards por rol
│ │ ├── 📁 users # Gestión de usuarios
│ │ ├── 📁 roles # Gestión de roles y permisos
│ │ ├── 📁 operators # Gestión de operadores
│ │ └── 📁 reservations # Gestión de reservaciones
│ ├── 📁 services # Llamadas a API (axios instance + servicios por entidad)
│ ├── 📁 hooks # Hooks personalizados (ej: useAuth, useForm)
│ ├── 📁 context # Contextos globales como AuthContext
│ ├── 📁 router # Rutas del sistema (React Router DOM)
│ ├── 📁 utils # Funciones auxiliares, formateadores, validadores
│ ├── 📁 types # Tipado global (TypeScript)
│ ├── 📁 styles # Tailwind config, CSS global si aplica
│ ├── App.tsx
│ └── main.tsx
├── vite.config.ts
└── tsconfig.json
