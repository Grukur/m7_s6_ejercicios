import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js'

const Beneficio = sequelize.define('beneficio', {
    nombre: {
        type: DataTypes.STRING(50),
        unique:true,
        allowNull:false,
        validate: {
            notEmpty:true,
        }
    },
    tipo:{
        type:DataTypes.ENUM('salud', 'educacion', 'viajes', 'financiero'),
        allowNull:false
    },
    descripcion:{
        type:DataTypes.STRING(200),
        allowNull:false,
    },
    descuento: {
        type: DataTypes.DECIMAL(5,2),
        defaultValue: 0,
        allowNull:false,
        validate: {
            min:0,
            max:100,
            isDecimal:true
        },
    },
    status:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
}, {
    timestamps: true // o false
});

export default Beneficio;