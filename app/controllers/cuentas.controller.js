import Cuentas from "../models/Cuentas.models.js"

export const getCuentas = async (req, res) => {
    try {
        const cuentas = await Cuentas.findAll();
        res.send({ code: 200, data: cuentas })
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: 'Error al obtener todos los Cuentas'
        })
    }
}

export const addCuentas = async (req, res) => {
    try {
        let { rut, n_cuenta, tipo } = req.body;
        console.log(rut, n_cuenta, tipo)
        const newUser = await Cuentas.create({ rut, n_cuenta, tipo })
        res.send({ code: 201, message: 'Cuentas creado con exito', data: newUser })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            code: 500,
            message: 'Error al crear todos los Cuentas'
        })
    }
}

export const cuentasfindBy = async (req, res) => {
    try {
        let { n_cuenta } = req.params;
        let user = await Cuentas.findByPk(n_cuenta)
        if(!user){
            res.status(404).send({
                code: 404,
                message: 'No se encontro la cuenta'
            
        })
    }res.send({
            code: 200,
            message: 'Cuentas encontrado: ',
            data: user
        })
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: 'Error al crear todos los Cuentas'
        })
    }
}

export const updateCuentas = async (req, res) => {
    try {
        let { n_cuenta } = req.params;
        let { rut, tipo } = req.body;
        let cuentas = await Cuentas.findByPk(n_cuenta)
            if(!cuentas){
                return res.status(404).send({message: 'Cuentas no encontrado'})
            }
            await Cuentas.update({ rut, tipo }, { where: { n_cuenta }})       
        
        res.send({
            code: 200,
            message: `Cuenta N° ${n_cuenta} modificado con exito`,
        })
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: `Error al actualizar Cuentas con n_cuenta}`
        })
    }
}

export const deleteCuentas = async (req, res) => {
    try {
        let { n_cuenta } = req.params;
        let {status} = req.body;
        let cuentas = await Cuentas.findByPk(n_cuenta)
            if(!cuentas){
                return res.status(404).send({message: 'Cuentas no encontrado'})
            }
            await Cuentas.update({status}, { where: { n_cuenta }})       
        
        res.send({
            code: 200,
            message: `Cuenta N° ${n_cuenta} eliminada con exito`,
        })
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: `Error al actualizar Cuentas con n_cuenta}`
        })
    }
}


export const destroyCuentas = async (req, res) => {
    try {
        let { n_cuenta } = req.params;
        console.log(n_cuenta)
        await Cuentas.destroy({where: {n_cuenta}});
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