import * as controllers from "../controllers/product.controllers.js";
import express from "express";

const routes = express.Router();

routes.post("/", controllers.createProduct);
routes.get("/", controllers.getAllProducts);
routes.get("/id/:id", controllers.getOneProduct);
routes.get("/category/:category", controllers.getProductsByCategory);
routes.get("/contents/:contents", controllers.getProductsByContents);
routes.patch("/:id", controllers.updateProduct);
routes.delete("/:id", controllers.deleteProduct);

export default routes;
