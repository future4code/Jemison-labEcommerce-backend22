export type NewUser = {
    name: string,
    email: string,
    password: string
}

export type NewProduct = {
    name: string,
    price: number,
    image_url: string
}

export type NewPurchase = {
    user_id: string,
    product_id: string,
    quantity: number,
}