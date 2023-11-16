import express from "express";
import { config } from "dotenv";
import { Router } from "express";
import animalRouter from "./routes/animal.routes.js";

config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(animalRouter);

app.listen(port, () =>
  console.log(`⚡ Server started on http://localhost:${port}`)
);