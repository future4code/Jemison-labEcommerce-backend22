import connection from "./connection"

export default async function selectProductId(id: number): Promise<any>{
    const result = await connection("labecommerce_products")
    .select("*")
    .where({id: id})
    return result[0]
}