import { Request, Response, NextFunction } from "express";

import { controller, use, get, post } from "../decorator";
import { responseData } from "../utils/response";

import path from "path";
import fs from "fs";

import Crawler from "../utils/crawler";
import WeatherAnalyzer from "../utils/weatherAnalyzer";

interface BodyRequest extends Request {
  body: { [key: string]: string };
}

// 登录校验中间件
const checkLogin = (req: BodyRequest, res: Response, next: NextFunction): void => {
  const isLogin = !!(req.session ? req.session.login : false);
  if (isLogin) {
    next();
  } else {
    res.json(responseData(null, "请先登录"));
  }
};

@controller("/")
export class CrawlerController {
  @get("/getData")
  @use(checkLogin)
  getData(req: BodyRequest, res: Response): void {
    const url = "http://www.weather.com.cn/weather/101280601.shtml";
    const analyzer = WeatherAnalyzer.getInstance();
    new Crawler(analyzer, url);
    res.json(responseData("获取成功"));
  }

  @get("/showData")
  @use(checkLogin)
  showData(req: BodyRequest, res: Response): void {
    try {
      const wPath = path.resolve(__dirname, "../../data/weather.json");
      const result = fs.readFileSync(wPath, "utf8");
      res.json(JSON.parse(result));
    } catch (e) {
      res.json(responseData(null, "未存在爬虫数据"));
    }
  }
}
