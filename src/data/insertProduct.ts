import { NewProduct } from "../types";
import connection from "./connection"

export default async function insertProduct(product:NewProduct): Promise<any>{
    const {name, price, image_url} = product
    const id = Date.now() % 1000
    const newId = id.toString()

    await connection("labecommerce_products")
    .insert({
        id: newId,
        name,
        price,
        image_url
    })
}