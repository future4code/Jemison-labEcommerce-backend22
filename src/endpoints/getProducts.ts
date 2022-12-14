import { Request, Response } from 'express'
import selectProducts from '../data/selectProducts'

export default async function getProducts(req: Request, res: Response): Promise<any>{
    try {
        let order = req.query.order as string
        let search = req.query.search as string || ""

        if(!order || (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DES")){
            order = "DES"
        }
        const findProduct = await selectProducts(order, search)

        if(findProduct.length === 0){
            res.statusCode = 400;
            throw new Error("Nenhum produto encontrado")
        }
        res.status(200).send({ findProduct })
    }catch(error: any) {
        res.status(res.statusCode || 500).send(error.message)
    }
}