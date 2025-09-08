import express from "express"
import { config } from 'dotenv';
import cors from "cors"
import logger from "./middlewares/logger.js";
import postRouter from "./routes/postRoutes.js"
import userRouter from "./routes/userRoutes.js"
config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json())
app.use(cors())
app.use(logger)


app.use("/user", userRouter)
app.use("/posts", postRouter)
app.use(express.static('public'));
app.use((req, res) => {
  res.status(404).json({ msg: "Route not found." });
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

