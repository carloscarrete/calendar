# Calenova

¡Bienvenido a la **Calenova**! Esta es una aplicación de calendario interactiva y dinámica construida con **React**, **Vite**, **Redux Toolkit**, y otras tecnologías modernas. La aplicación permite a los usuarios gestionar eventos, autenticarse, y visualizar eventos en un calendario interactivo.

## Características Principales

- **Autenticación de Usuarios**: Registro y inicio de sesión con validación de credenciales.
- **Gestión de Eventos**: Crear, editar, eliminar y visualizar eventos en un calendario interactivo.
- **Interfaz de Usuario Amigable**: Diseño moderno y responsive, con modales y botones flotantes para una experiencia de usuario óptima.
- **Persistencia de Datos**: Los eventos se gestionan a través de una API y se almacenan en el servidor.
- **Localización**: Soporte para idioma español en el calendario y formatos de fecha.
- **Notificaciones**: Uso de SweetAlert2 para notificaciones y alertas visuales.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir la interfaz de usuario.
- **Vite**: Herramienta de construcción rápida para desarrollo moderno.
- **Redux Toolkit**: Gestión del estado global de la aplicación.
- **React Router**: Navegación y enrutamiento dentro de la aplicación.
- **React Big Calendar**: Componente de calendario interactivo.
- **Axios**: Cliente HTTP para realizar peticiones a la API.
- **SweetAlert2**: Alertas y notificaciones visuales.
- **Bootstrap**: Framework de CSS para estilos y diseño responsive.
- **Date-fns**: Librería para manipulación de fechas.

## Estructura del Proyecto

```plaintext
carloscarrete-calendar/
├── README.md
├── index.html
├── package.json
├── vite.config.js
├── .env-template
├── .eslintrc.cjs
├── public/
└── src/
    ├── CalendarApp.jsx
    ├── index.css
    ├── main.jsx
    ├── api/
    │   ├── calendarApi.js
    │   └── index.js
    ├── assets/
    ├── auth/
    │   ├── index.js
    │   └── pages/
    │       ├── LoginPage.css
    │       └── LoginPage.jsx
    ├── calendar/
    │   ├── index.js
    │   ├── components/
    │   │   ├── CalendarEvent.jsx
    │   │   ├── CalendarModal.jsx
    │   │   ├── FabAddNew.jsx
    │   │   ├── FabDelete.jsx
    │   │   └── Navbar.jsx
    │   └── pages/
    │       └── CalendarPage.jsx
    ├── helpers/
    │   ├── calendarLocalizer.js
    │   ├── convertEventToDate.js
    │   ├── getEnv.js
    │   ├── getMessages.js
    │   └── index.js
    ├── hooks/
    │   ├── index.js
    │   ├── useAuthStore.js
    │   ├── useCalendarStore.js
    │   ├── useForm.js
    │   └── useUiStore.js
    ├── router/
    │   ├── AppRouter.jsx
    │   └── index.js
    └── store/
        ├── index.js
        ├── store.js
        ├── auth/
        │   └── authSlice.js
        ├── calendar/
        │   └── calendarSlice.js
        └── ui/
            └── uiSlice.js
```

## Instalación

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/carloscarrete/calendar.git
   cd calendar
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Configura el entorno**:
   - Crea un archivo `.env` basado en `.env-template` y configura la variable `VITE_API_URL` con la URL de tu API.

4. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

5. **Abre la aplicación**:
   - La aplicación estará disponible en `http://localhost:5173`.

## Scripts Disponibles

- **`npm run dev`**: Inicia el servidor de desarrollo.
- **`npm run build`**: Compila la aplicación para producción.
- **`npm run lint`**: Ejecuta ESLint para verificar el código.
- **`npm run preview`**: Previsualiza la aplicación compilada.

## Capturas
### Pantalla principal
![Calendario Principal](https://github.com/carloscarrete/calendar/blob/main/captures/c1.png?raw=true)

### Agregar nuevo evento
![Agregar nuevo evento](https://github.com/carloscarrete/calendar/blob/main/captures/c2.png?raw=true)

### Vista de varios eventos
![Eventos](https://github.com/carloscarrete/calendar/blob/main/captures/c3.png?raw=true)

### Vista varios eventos (día)
![Eventos vista de día](https://github.com/carloscarrete/calendar/blob/main/captures/c4.png?raw=true)

## Backend
Puedes visitar el backend de este proyecto en el siguiente enlace https://github.com/carloscarrete/calendar-backend

## Contribución

¡Las contribuciones son bienvenidas! Si deseas mejorar esta aplicación, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añade nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

¡Gracias por usar la **Calendar App**! Esperamos que disfrutes gestionando tus eventos de manera eficiente y organizada. Si tienes alguna pregunta o sugerencia, no dudes en contactarnos. 😊