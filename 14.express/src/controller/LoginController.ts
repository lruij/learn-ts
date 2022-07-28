import { Request, Response } from "express";

import { controller, get, post } from "../decorator";
import { responseData } from "../utils/response";
interface BodyRequest extends Request {
  body: { [key: string]: string };
}

@controller("/")
export class LoginController {
  static isLogin(req: BodyRequest) {
    return !!(req.session ? req.session.login : false);
  }

  @get("/logout")
  logout(req: BodyRequest, res: Response): void {
    const isLogin = LoginController.isLogin(req);
    if (isLogin && req.session) {
      req.session.login = false;
    }
    res.json(responseData("退出成功"));
  }

  @post("/login")
  login(req: BodyRequest, res: Response): void {
    const { password } = req.body;
    const isLogin = LoginController.isLogin(req);
    if (isLogin) {
      res.send("你已经登陆");
    } else {
      if (password == "123" && req.session) {
        req.session.login = true;
        res.json(responseData("登陆成功"));
      } else {
        res.json(responseData(null, `${req.userName} 密码错误 登录失败`));
      }
    }
  }

  @get("/")
  home(req: BodyRequest, res: Response): void {
    const isLogin = LoginController.isLogin(req);
    if (isLogin) {
      res.send(`
    <html>
        <body>
          <a href="/getData">爬虫</a>
          <a href="/showData">展示数据</a>
          <a href="/logout" >退出</a>
        </body>
      </html>
    `);
    } else {
      res.send(`
      <html>
        <body>
          <form method="post" action="/login">
            <input type="text" name="password"/>
            <button type="submit">登录</button>
          </form>
        </body>
      </html>
    `);
    }
  }
}
