import connection from "./connection"

export default async function insertPurchase(user_id: string, product_id: string, quantity: number, total_price: number): Promise<any> {
    const id = Date.now() % 1000
    const newId = id.toString()

    await connection("labecommerce_purchases")
        .insert({
            id: newId,
            user_id,
            product_id,
            quantity,
            total_price
        })
}