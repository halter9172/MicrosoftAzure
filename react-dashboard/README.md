# Binary Notes Dashboard

Un dashboard interactivo para el seguimiento de la práctica técnica musical, construido con React y Vite. Permite gestionar fragmentos de práctica, metas semanales, métricas de precisión y consistencia de tempo.

## Características

- **Tabla de Fragmentos**: Visualiza y filtra fragmentos musicales con notas, etiquetas y estado de progreso.
- **Búsqueda en Tiempo Real**: Busca fragmentos por nombre, referencia, etiquetas, estado o notas.
- **Widgets de Métricas**:
  - Mapa de Calor: Visualización de actividad de práctica.
  - Tarjeta de Enfoque: Indicadores de concentración.
  - Metas: Horas semanales objetivo vs. actual.
  - Precisión: Porcentaje de precisión en sesiones.
  - Tempo: Consistencia de BPM objetivo.
- **Interfaz Responsiva**: Diseño moderno con sidebar y layout adaptable.

## Tecnologías Utilizadas

- **React 18**: Framework para la interfaz de usuario.
- **Vite**: Herramienta de construcción rápida para desarrollo.
- **CSS**: Estilos personalizados para el diseño del dashboard.

## Instalación y Uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio y navega al directorio del proyecto:
   ```bash
   cd react-dashboard
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

### Ejecución en Desarrollo

Inicia el servidor de desarrollo:
```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación.

### Construcción para Producción

Construye la aplicación para producción:
```bash
npm run build
```

Previsualiza la construcción:
```bash
npm run preview
```

## Estructura del Proyecto

```
src/
├── App.jsx              # Componente principal del dashboard
├── data.js              # Datos de ejemplo para fragmentos y métricas
├── main.jsx             # Punto de entrada de React
├── styles.css           # Estilos globales
└── components/
    ├── index.js         # Exportaciones de componentes
    ├── Sidebar.jsx      # Barra lateral de navegación
    ├── Header.jsx       # Cabecera con título y acciones
    ├── HeatmapCard.jsx  # Widget de mapa de calor
    ├── FocusCard.jsx    # Widget de enfoque
    ├── GoalsCard.jsx    # Widget de metas
    ├── SnippetTable.jsx # Tabla de fragmentos con búsqueda
    └── BottomWidgets.jsx # Widgets inferiores (precisión y tempo)
```

## Datos de Ejemplo

La aplicación incluye datos de ejemplo para:
- Fragmentos musicales (Beethoven, Kreutzer, Rachmaninoff)
- Metas semanales de práctica
- Métricas de precisión y tempo

## Próximos Pasos

- Reemplazar iconos de fuente por SVG reales
- Extraer componentes adicionales y agregar rutas
- Conectar con una API o `localStorage` para persistencia de datos
- Agregar funcionalidad para registrar nuevas sesiones de práctica

## Contribución

Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto es privado y no tiene licencia específica.
