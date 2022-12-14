import { Request, Response } from "express"
import insertPurchase from "../data/insertPurchase"
import selectProductId from "../data/selectProductId"

export default async function createPurchase(req: Request, res: Response):Promise<any>{
    try{ 
        const { user_id, product_id, quantity } = req.body

        if(!user_id || !product_id || !quantity){
            res.statusCode = 400
            throw new Error("Erro, informe novamente seus dados corretamente.")
        }
        const productId = await selectProductId(product_id)
        const total_price = productId.price * quantity

        await insertPurchase(user_id, product_id, quantity, total_price)

        res.status(200).send("Compra efetuado com sucesso!")
    }catch (error: any) {
        res.status(res.statusCode || 500).send(error.message)
    }
}