# 📝 Team To-Do

Aplicación colaborativa de tareas construida con **React** y **Vite**. Permite a varios usuarios autenticarse y gestionar tareas en equipo, con almacenamiento local o simulación de backend usando JSON Server y una interfaz moderna usando TailwindCSS.

## 🚀 Características

- Autenticación de usuarios (usuarios demo: `User1`/`User1Pass` y `User2`/`User2Pass`)
- Añadir, buscar y marcar tareas como completadas
- Filtrado de tareas por autor o texto
- Persistencia de tareas en `localStorage` o en un backend simulado con JSON Server
- Interfaz responsive y moderna con TailwindCSS
- Notificaciones con `react-toastify`
- Rutas protegidas con React Router
- Consumo de API REST usando `fetch` y `axios`

## 📦 Estructura del proyecto

```
team-to-do/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── PrivateRoute.jsx
│   │   ├── SearchInput.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskList.jsx
│   ├── context/
│   │   └── authContext.jsx
│   ├── pages/
│   │   └── Login.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── db.json
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
└── vite.config.js
```

## 🛠️ Instalación y uso

1. **Clona el repositorio:**
   ```sh
   git clone <url-del-repo>
   cd team-to-do
   ```

2. **Instala las dependencias:**
   ```sh
   npm install
   ```

3. **Simula el backend con JSON Server:**
   - Asegúrate de tener instalado JSON Server globalmente:
     ```sh
     npm install -g json-server
     ```
   - Inicia el servidor en el puerto 8000:
     ```sh
     json-server db.json --port 8000
     ```
   - El endpoint de tareas estará disponible en:  
     `http://localhost:8000/tasks`

4. **Inicia el servidor de desarrollo de React:**
   ```sh
   npm run dev
   ```

5. **Abre la app en tu navegador:**
   ```
   http://localhost:5173
   ```

## 👤 Usuarios de prueba

- **Usuario 1:**  
  Usuario: `User1`  
  Contraseña: `User1Pass`

- **Usuario 2:**  
  Usuario: `User2`  
  Contraseña: `User2Pass`

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
- [JSON Server](https://github.com/typicode/json-server)
- [Axios](https://axios-http.com/)





Autor: LAURA BURITICA 

¡Contribuciones y sugerencias son bienvenidas!