import { Request, Response } from 'express'
import insertUser from "../data/insertUser"

export default async function createUser(req: Request, res: Response){
    try{ 
        const { name, email, password } = req.body

        if(!name || !email || !password){
            res.statusCode = 400
            throw new Error("Erro, informe novamente seus dados!")
        }
        if(typeof name !== "string" || typeof email !== "string" || typeof password !== "string"){
            res.statusCode = 400
            throw new Error("Por favor, informe novamente os dados solicitados!") 
        }
        await insertUser(name, email, password)

        res.status(201).send({ message: "Usuário cadastro com sucesso" })
    }catch (error: any){
        res.status(res.statusCode || 500).send(error.message)
    }   
}