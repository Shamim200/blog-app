import express from "express";
import cors from "cors";
import userRouter from "./src/routes/user.route";
const app = express();

// middleware setup
app.use(
  express.json({
    limit: "30kb",
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: "30kb",
  })
);
app.use(
  cors({
    origin: process.env.CORS,
  })
);

// routes setup
app.use("/api/v1/users", userRouter);

export { app };
