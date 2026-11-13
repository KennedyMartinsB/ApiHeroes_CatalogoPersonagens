import express from "express";
import publicRoutes from "./src/routes/publicRoutes";

const app = express();

app.use(express.json())

app.use('/', publicRoutes)

export default app;