# Plan de Acción Simplificado para el Sitio Web de CAÑAS AUDITORES Y CONSULTORES

## 1. Resumen del Proyecto

Desarrollaremos un sitio web informativo y moderno para CAÑAS AUDITORES Y CONSULTORES con una paleta de colores en escala de grises. Utilizaremos Strapi como CMS headless para permitir que el cliente gestione contenidos como noticias/artículos. El frontend será desarrollado con Next.js para optimización SEO.

## 2. Stack Tecnológico Simplificado

### Frontend:
- **Next.js**: Framework basado en React para renderizado y optimización SEO
    - Next.js utiliza React internamente, no son tecnologías separadas
    - Next.js añade funcionalidades como SSR, SSG y optimización de rutas
- **Tailwind CSS**: Para estilización con tema en escala de grises
- **Axios**: Para comunicación con la API de Strapi

### CMS:
- **Strapi**: CMS headless para gestión de contenido
    - Strapi ya incluye su propia base de datos SQLite por defecto (no necesitamos configurar PostgreSQL para un proyecto inicial)
    - Funciona como backend y panel de administración en un solo paquete

### Despliegue:
- **Hosting con cPanel**: Ya que cuentas con un servicio de hosting pagado con cPanel, lo utilizaremos para desplegar tanto el frontend (Next.js) como Strapi
- **Alternativa**: Si el hosting actual presenta limitaciones, podríamos considerar servicios como Vercel (para Next.js) o Heroku/Render (para Strapi)

## 3. Estructura de Archivos Simplificada

```
/
├── frontend/                  # Proyecto Next.js
│   ├── public/                # Archivos estáticos (imágenes, etc.)
│   ├── src/
│   │   ├── components/        # Componentes React
│   │   │   ├── layout/        # Header, Footer, etc.
│   │   │   └── ui/            # Componentes reutilizables
│   │   ├── pages/             # Rutas y páginas de Next.js
│   │   │   ├── index.js       # Página principal
│   │   │   ├── quienes-somos.js
│   │   │   ├── servicios.js
│   │   │   ├── noticias/      # Sección de noticias
│   │   │   ├── empleos.js     # Página simple con formulario
│   │   │   └── contacto.js
│   │   ├── styles/            # Estilos globales
│   │   └── lib/               # Utilidades y configuración API
│   ├── next.config.js
│   └── tailwind.config.js
│
└── strapi/                    # Proyecto Strapi (se genera automáticamente)
```

## 4. Modelos de Contenido en Strapi (Simplificados)

### Noticias/Artículos
- Título
- Contenido (editor de texto enriquecido)
- Imagen destacada
- Fecha de publicación
- Resumen corto

### Páginas Básicas
- Título
- Contenido (editor de texto enriquecido)
- Slug

### Mensajes de Contacto (para almacenar formularios enviados)
- Nombre
- Email
- Mensaje
- Fecha

### Aplicaciones de Empleo
- Nombre
- Email
- Mensaje
- Archivo CV (PDF)
- Fecha

## 5. Componentes Principales

### Componentes de Layout
- **Header**: Logo y navegación principal
- **Footer**: Información de contacto
- **Layout**: Estructura general

### Componentes Básicos
- **Button**: Botón reutilizable
- **Card**: Para mostrar servicios o noticias
- **Section**: Contenedor de sección con título

### Formularios
- **ContactForm**: Formulario simple de contacto
- **CVForm**: Formulario para enviar CV (nombre, email, mensaje, archivo)

## 6. Páginas a Desarrollar

1. **Home**: Presentación de la empresa, servicios destacados
2. **Quiénes Somos**: Información sobre la empresa y equipo
3. **Servicios**: Listado de servicios ofrecidos
4. **Noticias**: Artículos/noticias con paginación simple
5. **Noticias/[slug]**: Página individual para cada artículo
6. **Empleos**: Página simple con descripción de la cultura e información sobre trabajar en la empresa y formulario para enviar CV
7. **Contacto**: Información de contacto y formulario

## 7. Integración con Strapi (Simplificada)

1. Instalar y configurar Strapi (versión predeterminada con SQLite)
2. Crear los tipos de contenido básicos mencionados
3. Configurar permisos para acceso público a contenidos publicados
4. Configurar API para permitir subida de archivos PDF (CVs)
5. Conectar Next.js con la API de Strapi mediante Axios o fetch

## 8. Optimización SEO Básica

1. Metadatos para cada página
2. Generación de sitemap.xml automático
3. Configuración de robots.txt

## 9. Diseño

1. Escala de grises como solicitado
2. Diseño limpio y profesional
3. Totalmente responsive

## 10. Cronograma Simplificado

1. **Fase 1**:
    - Configuración de Next.js y Strapi
    - Desarrollo de componentes básicos y layout

2. **Fase 2**:
    - Desarrollo de páginas estáticas principales
    - Integración con Strapi para noticias

3. **Fase 3**:
    - Implementación de formularios (contacto, CV)
    - Pruebas y ajustes

4. **Fase 4**:
    - Optimización y despliegue

## 11. Próximos Pasos

1. Confirmar este enfoque simplificado con el cliente
2. Solicitar material gráfico necesario (logo, imágenes)
3. Definir paleta exacta de grises a utilizar
4. Crear repositorio en GitHub
5. Iniciar con la configuración de Strapi y Next.js