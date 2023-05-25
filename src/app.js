import express from "express";
import morgan from "morgan";

// Routes
import languageRoutes from "./routes/language.routes";

const app = express();

// Settings
// app.set("port", process.env.PORT || 4000);
app.set("port", 4000);

// Middlewares: es un intermediario entre el cliente y el servidor
app.use(morgan("dev")); // muestra por consola las peticiones que llegan al servidor
app.use(express.json()); // permite que el servidor entienda los formatos json
app.use(express.urlencoded({ extended: false })); // permite que el servidor entienda los formatos html

// habilitar cors
const cors = require("cors");
app.use(cors());

// habilitar cors para todas las rutas
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

 // Routes
app.use(languageRoutes);

export default app;