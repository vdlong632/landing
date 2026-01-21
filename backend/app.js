const express = require("express");
const cors = require("cors");

const productRoutes = require("./src/routes/product.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
