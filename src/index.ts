//DEPENDENCIES
import express from "express";
import cors from "cors";
require("dotenv").config();
import { pauseRouter } from "./controllers/Pause/PauseRoutes";

const app = express();
const PORT: number = parseInt(process.env.PORT as string);

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/pause", pauseRouter);

//SERVER LISTENER
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
