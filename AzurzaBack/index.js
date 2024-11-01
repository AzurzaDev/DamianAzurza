const app = require('./src/app.js');          // Importa tu aplicación
const { conn } = require('./src/data');       // Importa la conexión a la base de datos (usando Sequelize, asumo)
const { PORT } = require('./src/config/envs');// Importa las variables de entorno, como el puerto
require('dotenv').config();                   // Carga las variables de entorno

// Sincronización de los modelos y levantar el servidor
conn.sync({ force: true }).then(() => {       // 'alter: true' actualiza la estructura de tablas sin borrar datos
  app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en el puerto: ${PORT} 🚀`);
  });
}).catch(error => {
  console.error('Error al sincronizar la base de datos:', error);
});
