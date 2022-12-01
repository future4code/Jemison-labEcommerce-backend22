import { Request, Response } from 'express'
import selectPurchaseUser from '../data/selectPurchaseUser'

export default async function getPurchaseUser(req: Request, res: Response): Promise<any>{
    try{ 
        const user_id: number = Number(req.params.user_id)

        if(!user_id){
            res.statusCode = 400
            throw new Error("Informe o id do usuário")
        }
        const findPurchaseUser: any = await selectPurchaseUser(Number(user_id))

        if(!findPurchaseUser.length){
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }
        res.status(200).send({ findPurchaseUser })
    }catch(error: any){
        res.status(res.statusCode || 500).send(error.message)
    }
}
