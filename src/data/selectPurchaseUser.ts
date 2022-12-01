import connection from "./connection";

export default async function selectPurchaseUser(user_id: string): Promise<any> {
    const result = await connection("labecommerce_purchases")
    .select("product_id")
    .where("user_id", user_id)
    return result
}
