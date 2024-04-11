import express from "express";
import { Request, Response } from "express";
import { connection } from "@/db/connection";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (_req: Request, res: Response) =>
  res.status(200).json({ message: "Hello World" }),
);

app.listen(3000, async () => {
  console.log("Server running on port 3000");

  // O código abaixo é para testarmos a comunicação com o MySQL
  const [result] = await connection.execute("SELECT 1");
  if (result) {
    console.log("MySQL connection OK ");
  }
});
