# 📝 Team To-Do

Aplicación colaborativa de tareas construida con **React** y **Vite**. Permite a varios usuarios autenticarse y gestionar tareas en equipo, con almacenamiento local o simulación de backend usando JSON Server y una interfaz moderna usando TailwindCSS.

## 🔗 Links de Producción

- **Frontend (Netlify):** [https://guileless-marzipan-39c8a7.netlify.app/](https://guileless-marzipan-39c8a7.netlify.app/)
- **Backend (Railway):** [https://json-server-todo-production.up.railway.app/tasks](https://json-server-todo-production.up.railway.app/tasks)

---

##  Características

- Autenticación de usuarios (usuarios demo: `User1`/`User1Pass` y `User2`/`User2Pass`)
- Añadir, buscar y marcar tareas como completadas
- Filtrado de tareas por autor o texto
- Persistencia de tareas en `localStorage` o en un backend simulado con JSON Server
- Interfaz responsive y moderna con TailwindCSS
- Notificaciones con `react-toastify`
- Rutas protegidas con React Router
- Consumo de API REST usando `fetch` y `axios`

## ️ Stack Tecnológico

- React
- Vite
- TailwindCSS
- React Router DOM
- React Toastify
- JSON Server
- ESLint + Prettier

## 🛠️ Prerrequisitos

Asegúrate de tener instalado Node.js (se recomienda la versión 18 o superior).

## ⚙️ Configuración de Variables de Entorno

Antes de ejecutar el proyecto, necesitas configurar las variables de entorno.

1.  Crea un archivo `.env` en la raíz del proyecto, copiando el contenido de `.env.example`.
2.  Modifica la variable `VITE_API_URL` según sea necesario. Para desarrollo local, el valor por defecto `http://localhost:8000` es correcto.

## 🛠️ Desarrollo Local

1. **Clona el repositorio:**
   ```sh
   git clone <url-del-repo>
   cd team-to-do
   ```

2. **Instala las dependencias:**
   ```sh
   npm install
   ```

3. **Ejecuta el Backend (JSON Server):**
   - Abre una nueva terminal en la raíz del proyecto.
   - Inicia el servidor que vigilará `db.json` en el puerto 8000.
   ```sh
   npm start
   ```

4. **Ejecuta el Frontend (React):**
   - En otra terminal, desde la raíz del proyecto.
   - Inicia el servidor de desarrollo de Vite (se ejecutará en `http://localhost:5173`):
   ```sh
   npm run dev
   ```

## ☁️ Despliegue
 
El frontend de este proyecto está desplegado en **Netlify** y el backend (JSON Server) en **Railway**.
 
Para desplegar tu propia versión, puedes seguir guías similares a las descritas para Vercel/Render, pero aplicando la configuración en Netlify/Railway. Recuerda configurar la variable de entorno `VITE_API_URL` en el servicio de frontend para que apunte a la URL de tu backend desplegado.

## 👤 Usuarios de prueba

- **Usuario 1:**  
  Usuario: `User1`  
  Contraseña: `User1Pass`

- **Usuario 2:**  
  Usuario: `User2`  
  Contraseña: `User2Pass`

## 📂 Estructura de Carpetas

La estructura del proyecto está organizada para separar las responsabilidades y facilitar el mantenimiento:

```
team-to-do/
├── public/              # Archivos estáticos
├── src/                 # Código fuente de la aplicación
│   ├── components/      # Componentes reutilizables de React
│   │   ├── PrivateRoute.jsx
│   │   ├── SearchInput.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskList.jsx
│   ├── context/         # Contexto de React (ej. para autenticación)
│   │   └── authContext.jsx
│   ├── pages/           # Componentes que representan páginas completas
│   │   └── Login.jsx
│   ├── App.jsx          # Componente raíz de la aplicación
│   └── main.jsx         # Punto de entrada de la aplicación
├── .env                 # Variables de entorno (local, no versionado)
├── .env.example         # Ejemplo de variables de entorno
├── db.json              # Base de datos para JSON Server
├── package.json         # Dependencias y scripts del proyecto
└── README.md            # Documentación del proyecto
```

## 🧩 Principales archivos y componentes

- [`src/App.jsx`](src/App.jsx): Componente principal, maneja tareas y autenticación. Consume la API de JSON Server para CRUD de tareas.
- [`src/context/authContext.jsx`](src/context/authContext.jsx): Contexto de autenticación y lógica de login/logout.
- [`src/pages/Login.jsx`](src/pages/Login.jsx): Pantalla de inicio de sesión.
- [`src/components/TaskForm.jsx`](src/components/TaskForm.jsx): Formulario para agregar tareas.
- [`src/components/TaskList.jsx`](src/components/TaskList.jsx): Lista de tareas.
- [`src/components/TaskItem.jsx`](src/components/TaskItem.jsx): Ítem individual de tarea.
- [`src/components/SearchInput.jsx`](src/components/SearchInput.jsx): Barra de búsqueda de tareas.
- [`src/components/PrivateRoute.jsx`](src/components/PrivateRoute.jsx): Ruta protegida para usuarios autenticados.
- [`db.json`](db.json): Archivo de base de datos para JSON Server.

## 🧑‍💻 Tecnologías usadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Esto significa que cualquiera que tenga acceso a este repositorio es libre de usar, copiar, modificar, distribuir como desee.

Para más detalles, consulta el archivo `LICENSE`.

## 🤝 Contribuciones

Las contribuciones, problemas y solicitudes de características son bienvenidas.

1.  **Fork** el proyecto.
2.  Crea tu rama de característica (`git checkout -b feature/AmazingFeature`).
3.  Confirma tus cambios (`git commit -m 'Add some AmazingFeature'`).
4.  Empuja a la rama (`git push origin feature/AmazingFeature`).
5.  Abre una **Pull Request**.

---

Autor: **LAURA BURITICA**