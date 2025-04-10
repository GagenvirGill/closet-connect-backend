// src/app.js
import express from "express";
import fs from "fs";
import envConfig from "./config/envConfig.js";

// Import Routers
import categoryRoutes from "./routes/categoryRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";
import outfitRoutes from "./routes/outfitRoutes.js";

// Import Middleware Modules
import corsMiddleware from "./middleware/corsMiddleware.js";
import jsonParser from "./middleware/jsonParser.js";
import urlEncodedParser from "./middleware/urlEncodedParser.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

const uploadFolder = envConfig.uploadsFolder;
if (!fs.existsSync(uploadFolder)) {
	fs.mkdirSync(uploadFolder);
}

// Middlewares
app.use(corsMiddleware);
app.use(jsonParser);
app.use(urlEncodedParser);

// Uploaded Image Static Access
app.use("/uploads", express.static(uploadFolder));

// Registered Routes
app.use("/category", categoryRoutes);
app.use("/item", itemRoutes);
app.use("/outfit", outfitRoutes);

// Middleware Error Handler
app.use(errorHandler);

export default app;
