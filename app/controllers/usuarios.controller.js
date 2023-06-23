import Usuario from "../models/Usuario.models.js"

export const getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({attributes: ['id', 'rut', 'nombre', 'email', 'status']});
        res.send({ code: 200, data: usuarios })
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: 'Error al obtener todos los usuarios'
        })
    }
}

export const addUsuarios = async (req, res) => {
    try {
        let { rut, nombre, email, password } = req.body;
        const newUser = await Usuario.create({ rut, nombre, email, password })
        res.send({ code: 201, message: 'Usuario creado con exito', data: newUser })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            code: 500,
            message: 'Error al crear todos los usuarios'
        })
    }
    //con fingOrCreate
    //await Usuario.findOrCreate({where:{email}},{default:{nombre, email, password}})
}

export const usuariosfindBy = async (req, res) => {
    try {
        let { id } = req.params;
        console.log(id)
        let user = await Usuario.findByPk(id)
        res.send({
            code: 200,
            message: 'Usuario encontrado: ',
            data: user
        })
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: 'Error al crear todos los usuarios'
        })
    }
}

export const updateUsuario = async (req, res) => {
    try {
        let { id, rut } = req.params;
        let { nombre, email, password } = req.body;
        let usuario;
        if(id){
            usuario = await Usuario.findByPk(id)
                if(!usuario){
                    return res.status(404).send({message: 'Usuario no encontrado'})
                }
                await Usuario.update({nombre, email, password }, { where: { id }})    
        }else if(rut){
            usuario = await Usuario.findByPk(rut)
                if(!usuario){
                    return res.status(404).send({message: 'Usuario no encontrado'})
                }
                await Usuario.update({ nombre, email, password }, { where: { rut }})  
        }        
        res.send({
            code: 200,
            message: `Usuario con ID ${id} modificado con exito`,
        })
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: `Error al actualizar usuario con ID ${id}`
        })
    }
}

export const deleteUsuarios = async (req, res) => {
    try {
        let { id } = req.params;
        let {status} = req.body;
        let usuario = await Usuario.findByPk(id)
            if(!usuario){
                return res.status(404).send({message: 'Usuario no encontrado'})
            }
            await Usuario.update({status}, { where: { id }})       
        
        res.send({
            code: 200,
            message: `Usuario con ID ${id} eliminado con exito`,
        })
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: `Error al actualizar usuario con ID ${id}`
        })
    }
}

export const destroyUsuarios = async (req, res) => {
    try {
        let { id } = req.params;
        await Usuario.destroy({
            where: {
                id: id,
            },
        });
        res.send({
            code: 200,
            message: `Usuario con ID ${id} destruido con exito`,
        })

    } catch (error) {
        res.status(500).send({
            code: 500,
            message: `Error al eliminar usuario con ID ${id}`
        })
    }
}