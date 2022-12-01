import { NewUser } from "../types"
import connection from "./connection"

export default async function insertUser(user:NewUser): Promise<any>{
    const {name, email, password} = user
    const id = Date.now() % 1000
    const newId = id.toString()

    await connection("labecommerce_users")
    .insert({
        id: newId,
        name,
        email,
        password
    })
}