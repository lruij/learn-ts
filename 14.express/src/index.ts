import express, { Request, Response, NextFunction } from "express";

import bodyParser from "body-parser";
import "./controller/LoginController";
import "./controller/CrawlerController";
import router from "./router";

import cookieSession from "cookie-session";

const app = express();

// parser application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parser application/json
app.use(bodyParser.json());

// 自定义中间件
app.use((req: Request, res: Response, next: NextFunction) => {
  req.userName = "nice";
  next();
});

// cookie 中间件

app.use(
  cookieSession({
    name: "session",
    keys: [
      /* secret keys */
      "coder nice key",
    ],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use(router);

app.listen(7000, () => {
  console.log("server is running");
});
