import Registros from "../models/Registro.models.js"

export const getRegistros = async (req, res) => {
    try {
        const registros = await Registros.findAll();
        res.send({ code: 200, data: registros })
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: 'Error al obtener todos los Registros'
        })
    }
}

export const addRegistros = async (req, res) => {
    try {
        let { rut, n_cuenta, detalle, abonos, cargos } = req.body;
        const newUser = await Registros.create({ rut, n_cuenta, detalle, abonos, cargos })
        res.send({ code: 201, message: 'Registros creado con exito', data: newUser })
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: 'Error al crear todos los Registros'
        })
    }
}

export const registrosfindBy = async (req, res) => {
    try {
        let { id } = req.params;
        console.log(id)
        let user = await Registros.findByPk(id)
        res.send({
            code: 200,
            message: 'Registros encontrado: ',
            data: user
        })
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: 'Error al crear todos los Registros'
        })
    }
}

export const updateRegistros = async (req, res) => {
    try {
        let { n_operacion } = req.params;
        console.log(n_operacion)
        let { rut, n_cuenta, detalle_operacion, abonos, cargos } = req.body;
        let registros = await Registros.findByPk(n_operacion)
            if(!registros){
                return res.status(404).send({message: 'Registros no encontrado'})
            }
            await Registros.update({ rut, n_cuenta, detalle_operacion, abonos, cargos }, { where: { n_operacion }})       
        
        res.send({
            code: 200,
            message: `Registros con n_operacion ${n_operacion} modificado con exito`,
        })
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: `Error al actualizar Registros`
        })
    }
}

export const deleteRegistros = async (req, res) => {
    try {
        let { n_operacion } = req.params;
        let {status} = req.body;
        let registros = await Registros.findByPk(n_operacion)
            if(!registros){
                return res.status(404).send({message: 'Registros no encontrado'})
            }
            await Registros.update({status}, { where: { n_operacion }})       
        
        res.send({
            code: 200,
            message: `Registros con n_operacion ${n_operacion} modificado con exito`,
        })
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: `Error al actualizar Registros`
        })
    }
}


export const destroyRegistros = async (req, res) => {
    try {
        let { id } = req.params;
        await Registros.destroy({
            where: {
                id: id,
            },
        });
        res.send({
            code: 200,
            message: `Registros con ID ${id} eliminado con exito`,
        })

    } catch (error) {
        res.status(500).send({
            code: 500,
            message: `Error al eliminar Registros con ID ${id}`
        })
    }
}