import Beneficio from "../models/Beneficio.models.js";
import Usuario from "../models/Usuario.models.js";

export const getBeneficio = async (req, res) => {
    try {
        const beneficio = await Beneficio.findAll({
            include: {
                model:Usuario,
                as: 'beneficiarios',
                through: { attributes: [] },
                attributes:['id', 'nombre','email'],
            }
        });
        res.send({ code: 200, data: Beneficio })
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: 'Error al obtener Beneficio'
        })
    }
}

export const addBeneficio = async (req, res) => {
    try {
        let { nombre, tipo, descripcion, descuento } = req.body;
        const newBeneficio = await Beneficio.create({ nombre, tipo, descripcion, descuento })
        if (!newBeneficio) {
            res.send({
                code: 500,
                message: 'Error al crear Cuenta, por usar nulos'
            })
        }
        res.send({ code: 201, message: 'Beneficio creado con exito', data: newBeneficio })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            code: 500,
            message: 'Error al crear Beneficio'
        })
    }
}

export const addAsociacion = async (req, res) => {
    try {
        let {rut, beneficioId} = req.body;
        const ususario = await Usuario.findByPk({rut})
        const beneficio = await Beneficio.findByPk({beneficioId})
        if(!ususario || !beneficio){
            res.send({
                code: 400,
                message: 'Error al vincular usuario a beneficio'
            })
        }
        await usuariosfindBy.addBeneficio(beneficio)
        res.send({ code: 201, message: `${ususario.nombre} vinculado con exito al beneficio ${beneficio.nombre}`})
    } catch(error){
        console.log(error)
        res.status(500).send({
            code: 500,
            message: 'Error al vincular Beneficio'
        })
    }
}

export const updateBeneficio = async (req, res) => {
    try {
        let { n_cuenta } = req.params;
        let { rut, tipo, balance } = req.body;
        let beneficio = await Beneficio.findByPk(n_cuenta)
        if (!beneficio) {
            return res.status(404).send({ message: 'Beneficio no encontrado' })
        }
        await Beneficio.update({ rut, tipo, balance }, { where: { n_cuenta } })

        res.send({
            code: 200,
            message: `Cuenta N° ${n_cuenta} modificado con exito`,
        })
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: `Error al actualizar Beneficio con n_cuenta}`
        })
    }
}

export const deleteBeneficio = async (req, res) => {
    try {
        let { n_cuenta } = req.params;
        let { status } = req.body;
        let beneficio = await Beneficio.findByPk(n_cuenta)
        if (!beneficio) {
            return res.status(404).send({ message: 'Beneficio no encontrado' })
        }
        await Beneficio.update({ status }, { where: { n_cuenta } })

        res.send({
            code: 200,
            message: `Cuenta N° ${n_cuenta} eliminada con exito`,
        })
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: `Error al actualizar Beneficio con n_cuenta}`
        })
    }
}


export const destroyBeneficio = async (req, res) => {
    try {
        let { n_cuenta } = req.params;
        console.log(n_cuenta)
        await Beneficio.destroy({ where: { n_cuenta } });
        res.send({
            code: 200,
            message: `Cuenta N° ${n_cuenta} destruida con exito`,
        })

    } catch (error) {
        res.status(500).send({
            code: 500,
            message: `Error al eliminar Cuenta`
        })
    }
}