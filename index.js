import express from "express";
import publicRoutes from "./src/routes/publicRoutes.js";
import heroRouter from "./src/routes/heroRoutes.js";
import villainRouter from "./src/routes/villainRoutes.js";

const app = express();

app.use(express.json())
// Rotas Publicas
app.use('/', publicRoutes)

// Rotas do crud
app.use('/heroes', heroRouter)
app.use('/villains', villainRouter)

export default app;