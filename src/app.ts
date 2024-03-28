import cors from "cors";
import express from "express";
import http from "http";
import routes from "./router";

require("dotenv/config");

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.use(routes);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);

export default app;
