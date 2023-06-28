import { sequelize } from './app/database/database.js';
import app from './app/app.js';
import './app/models/Usuario.models.js';
import './app/models/Cuentas.models.js';
import './app/models/Registro.models.js';
import './app/models/Beneficio.models.js';

//importar asociaciones
import './app/models/asociaciones.js'

const main = async () => {
    try {
        await sequelize.authenticate();
        console.log('Nos hemos conectado con éxito.');
        await sequelize.sync({ force: true, alter: true })
        let PORT = 3000;
        app.listen(PORT, () => 
        console.log("Servidor escuchando en ", PORT))
    } catch (error) {
        console.log("Ha ocurrido un error: ", error)
    }
}
main();
