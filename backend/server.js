const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000; // Render usará la variable de entorno PORT

server.use(cors()); // Habilita CORS para todas las rutas
server.use(jsonServer.bodyParser); // Necesario para que las peticiones POST/PUT/PATCH funcionen correctamente
server.use(middlewares);

// Montamos el router en /api para evitar conflictos
server.use('/api', router);

server.listen(port, () => {
  console.log('JSON Server is running on port', port);
});

// Exporta el servidor para que Vercel/Render puedan usarlo si es necesario
module.exports = server;
