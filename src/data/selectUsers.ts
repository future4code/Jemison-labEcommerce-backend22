import connection from "./connection"

export default async function selectUsers(){
    const result = await connection
    .select("*")
    .from("labecommerce_users")

    return result
}