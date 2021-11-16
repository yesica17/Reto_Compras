const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const cors = require("cors");

/**Se importa la librería .env con el fin de ocultar la clave de acceso a la base de datos. A continuación se configura para posteriormente ser usada al momento de conectar la API con la base de datos */
dotenv.config();

/** Conexión a la database mongodbAtlas y manejo del error*/
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
