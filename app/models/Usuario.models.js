import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js'

const Usuario = sequelize.define('usuarios', {
    rut: {
        type: DataTypes.STRING(20),
        unique:true,
        allowNull:false,
    },
    nombre: {
        type: DataTypes.STRING(50),
    },
    email: {
        type: DataTypes.STRING(50),
        unique:true,
        allowNull:false,
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull:false,
    },
    status:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
}, {
    timestamps: true // o false
});

export default Usuario;