import { Router } from "express";
import animalRouter from "./animal.routes.js";

const router = Router();

router.get("/", (req, res) => {
    res.status(200).send({ message: "Servidor rodando perfeitamente!" });
  });

  router.use("/animal", animalRouter);

  export {router};