import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import balanceController from "./src/controllers/balanceController";
import transactionsController from "./src/controllers/transactionsController";
import Moralis from "moralis";

const MORALIS_API_KEY =
  "kh13ZzFmm26dU8oQW3ZLXRNt2X9U9ck3xnhQ5pPnM5JyQQKUeMleXx1ZAjDxdv4N";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use("/api/balance", balanceController);
app.use("/api/transactions", transactionsController);

// Add this a startServer function that initialises Moralis
const startServer = async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

// Call startServer()
startServer();
