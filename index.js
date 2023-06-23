import { sequelize } from './app/database/database.js';
import app from './app/app.js';
import './app/models/Usuario.models.js';
import './app/models/Cuentas.models.js';
import './app/models/Registro.models.js';

const main = async () => {
    try {
        await sequelize.authenticate();
        console.log('Nos hemos conectado con éxito.');
        await sequelize.sync({ force: false, alter: true })
        let PORT = 3000;
        app.listen(PORT, () => 
        console.log("Servidor escuchando en ", PORT))
    } catch (error) {
        console.log("Ha ocurrido un error: ", error)
    }
}
main();
