import express from "express";
import type { Request, Response } from "express";
import * as PauseService from "./PauseService";

export const pauseRouter = express.Router();

//INDEX
pauseRouter.get("/", async (req: Request, res: Response) => {
  try {
    const pauses = await PauseService.listPauses();
    return res.json(pauses);
  } catch (error: any) {
    return res.json(error.message);
  }
});

//DELETE

//CREATE
pauseRouter.post("/", async (req: Request, res: Response) => {
  try {
    const pause = await PauseService.makePause(req.body);
    return res.json(pause);
  } catch (error: any) {
    return res.json(error.message);
  }
});

//UPDATE
pauseRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    const updatedPause = await PauseService.updatePause(req.body, id);
    return res.json(updatedPause);
  } catch (error: any) {
    return res.json(error.message);
  }
});

//SHOW
pauseRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    const onePause = await PauseService.showPause(id);
    res.json(onePause);
  } catch (error: any) {
    return res.json(error.message);
  }
});
