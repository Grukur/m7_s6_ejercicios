import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js'
import Cuentas from './Cuentas.models.js';

const Registro = sequelize.define('registros', {
    n_operacion: {
        type: DataTypes.STRING,
        defaultValue: sequelize.literal("substr(uuid_generate_v4()::text, 1, 6)"),
        allowNull: false,
        primaryKey: true
    },
    rut: {
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false,
    },
    n_cuenta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        //aqui viene la relación: model: Cuenta.models,
        //key: 'n_cuenta'
    },
    detalle_operacion: {
        type: DataTypes.STRING(30),
        defaultValue: 'no especifica',
        allowNull: true,
    },
    abonos: {
        type: DataTypes.DECIMAL(15, 2)
    },
    cargos: {
        type: DataTypes.DECIMAL(15, 2)
    },
    //saldo: {get() {return this.getDataValue("abonos") - this.getDataValue("cargos")}}
}, {
    timestamps: true // o false
});

export default Registro;