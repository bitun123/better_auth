import express from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./config/auth.js";
const app = express();

app.all("/api/auth/*splat",toNodeHandler(auth));
app.use(express.json());
app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend is running",
  });
});
export default app;