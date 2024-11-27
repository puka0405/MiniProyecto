import { Request, Response } from "express"
import{UserModel} from "../models/UsersModel"
import jwt from "jsonwebtoken";

export const registerUsers = async (req: Request, res: Response): Promise<any> => {
    try {
        //Primero validar que los datos que necesitamos existen
        const name = req.body.name
        const email = req.body.email
        const lastNames = req.body.lastNames
        const password = req.body.password
        const rol = req.body.rol

        //Administradores NO PUEDEN crear clientes
        if(req.user?.rol === "administrator" && rol === "client"){
            return res.status(400).json({msg:"Los administradores no pueden crear clientes"})
        }
        if (!name || !email || !lastNames || !password || !rol) {
            return res.status(400).json({msg: "Faltan datos para crear un usuario"})
        }
        //Primero validar que los datos que necesitamos existen
        if (rol === "administrator" && req.user?.rol != "administrator") {
            return res.status(400).json({
                msg: "No puedes crear un nuevo administrador si no eres uno"
            })
        }
        const user = await UserModel.create({
            name,
            lastNames,
            email,
            password,
            rol
        })
        const token = jwt.sign(JSON.stringify(user), "shht");


        return res.status(200).json({msg:"Usuario registrado con éxito", token})

    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"Hubo un error al crear el usuario"}) 
    }
    
}

export const singin= async (req:Request, res: Response):Promise<any>=>{
    try {
        const user = await UserModel.findOne({email:req.body.email, password:req.body.password})
        
       if(user){
        const token = jwt.sign(JSON.stringify(user),"pocoyo");
        return res.status(200).json({msg: "Sesion iniciada con exito", token})
       }else{
        return res.status(500).json({
            msg:"No hay coincidencias en el sistema"
        })
       }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg:"Hubo un error al iniciar sesion"
        })
    }

} 