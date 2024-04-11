import express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/", (_req: Request, res: Response) =>
  res.status(200).json({ message: "Hello World" }),
);

app.listen(3000, () => console.log("Server running on port 3000"));
