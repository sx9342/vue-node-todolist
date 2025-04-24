import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors"; // 新增
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
import todoRouter from "./routes/todoRoutes.js";

const app = express();
app.use(express.static(path.join(__dirname, "public"))); 
app.set("views", path.join(__dirname, "views")); 
// 中间件配置
app.use(cors()); // 统一在此处配置
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// 视图引擎配置
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// 路由配置
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/todos", todoRouter); // 使用已导入的路由

// 错误处理（保持原样）
// ...

export default app;
