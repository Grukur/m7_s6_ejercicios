import express from 'express';
import {getUsuarios, addUsuarios, usuariosfindBy, deleteUsuarios, updateUsuario, destroyUsuarios} from '../controllers/usuarios.controller.js';
import {getCuentas, addCuentas, cuentasfindBy, deleteCuentas, updateCuentas, destroyCuentas} from '../controllers/cuentas.controller.js';
import {getRegistros, addRegistros, registrosfindBy, deleteRegistros, updateRegistros, destroyRegistros} from '../controllers/registros.controller.js';

const router = express.Router();

//EndPoint de la tabla Usuarios
router.get("/usuarios/", getUsuarios);
router.get("/usuarios/:id", usuariosfindBy);
router.post("/usuarios/", addUsuarios);
router.put("/usuarios/:id", updateUsuario);
router.delete("/usuarios/:id", deleteUsuarios);
router.delete("/usuarios/destroy/:id", destroyUsuarios);

//EndPoint de la tabla Cuentas
router.get("/cuentas/", getCuentas);
router.get("/cuentas/:n_cuenta", cuentasfindBy);
router.post("/cuentas/", addCuentas);
router.put("/cuentas/:n_cuenta", updateCuentas);
router.delete("/cuentas/:n_cuenta", deleteCuentas);
router.delete("/cuentas/destroy/:n_cuenta", destroyCuentas);

//EndPoint de la tabla Registros
router.get("/registros/", getRegistros);
router.get("/registros/:n_operacion", registrosfindBy);
router.post("/registros/", addRegistros);
router.put("/registros/:n_operacion", updateRegistros);
router.delete("/registros/:n_operacion", deleteRegistros);
router.delete("/registros/destroy/:n_operacion", destroyRegistros);

export default router;