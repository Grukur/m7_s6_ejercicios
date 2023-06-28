import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js'

const Cuentas = sequelize.define('cuentas', {
    rut: {
        type: DataTypes.STRING(20),
        unique:false,
        allowNull:false,
    },
    n_cuenta: {
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true
    },
    tipo:{
        type:DataTypes.ENUM('corriente', 'vista', 'dolares'),
        allowNull:false
    },
    balance:{
        type:DataTypes.DECIMAL(11,2),
        defaultValue: 0,
        allowNull:false,
        validate:{
            min:0,
            isDecimal:true
        }
    },
    status:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
}, {
    timestamps: true // o false
});

export default Cuentas;