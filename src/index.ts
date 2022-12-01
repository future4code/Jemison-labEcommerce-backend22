import app from "./app";
import createProduct from "./endpoints/createProduct";
import createPurchase from "./endpoints/createPurchase";
import createUser from "./endpoints/createUser";
import getProducts from "./endpoints/getProducts";
import getPurchaseUser from "./endpoints/getPurchaseUser";
import getUsers from "./endpoints/getUsers";

app.post("/users", createUser)

app.get("/users", getUsers)

app.post("/products", createProduct)

app.get("/products", getProducts)

app.post("/purchases", createPurchase)

app.get("/users/:user_id/purchases", getPurchaseUser)