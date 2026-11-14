import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import publicRoutes from "./src/routes/publicRoutes.js";
import heroRouter from "./src/routes/heroRoutes.js";
import villainRouter from "./src/routes/villainRoutes.js";

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'view'));

app.use(express.json())
// Rotas Publicas
app.use('/', publicRoutes)

// Rotas do crud
app.use('/heroes', heroRouter)
app.use('/villains', villainRouter)

export default app;