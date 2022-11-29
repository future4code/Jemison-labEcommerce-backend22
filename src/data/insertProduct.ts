import connection from "../connection"

export default async function insertProduct(name: string, price: number, image_url: string){
    await connection('labecommerce_products')
    .insert({
        name,
        price,
        image_url
    })
}