import Usuario from './Usuario.models.js';
import Cuenta from './Cuentas.models.js';
import Registro from './Registro.models.js';
import Beneficio from './Beneficio.models.js';

//relacion 1 a muchos entre usuario - cuenta
Usuario.hasMany(Cuenta, {
    as: 'cuenta',
    onDelete:'SET NULL',
    onUpdate:'CASCADE',
});
Cuenta.belongsTo(Usuario, {
    as: 'usuario',
});

//relacion 1 a muchos entre cuenta - registro
Cuenta.hasMany(Registro,{
    as:'registro',
    onDelete: 'SET NULL',
    onUpdate :'CASCADE',    
});
Registro.belongsTo(Cuenta, {
    as: 'cuenta',
});

//relacion muchos a muchos(N:N) entre beneficios y usuarios
Usuario.belongsToMany(Beneficio, { 
    as: 'beneficio',
    through: 'beneficioUsuario' });
Beneficio.belongsToMany(Usuario, {
    as: "beneficiarios",
    through: 'beneficioUsuario'});