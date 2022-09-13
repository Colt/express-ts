import express, { Express, Request, Response } from "express";
const port = 8000;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("HELLO FROM EXPRESS + TS!!!!");
});

app.get("/hi", (req: Request, res: Response) => {
  res.send("BYEEE!!");
});

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});
