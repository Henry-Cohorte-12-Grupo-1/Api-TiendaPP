import express from "express";

function homeController(req: express.Request, res: express.Response) {
  res.send("algo");
}
export default homeController;
