import express, { Request, Response, NextFunction } from 'express'
import Crawler from '../utils/crawler'
import WeatherAnalyzer from '../utils/weatherAnalyzer'
import { responseData } from '../utils/response'
import path from 'path'
import fs from 'fs'
const router = express()

// body 实体声明类型
interface BodyRequest extends Request {
  body: { [key: string]: string }
}

// 登录校验中间件
const checkLogin = (req: BodyRequest, res: Response, next: NextFunction) => {
  const isLogin = req.session ? req.session.login : false
  if (isLogin) {
    next()
  } else {
    res.json(responseData(null, '请先登录'))
  }
}

// 首页
router.get('/', (req: BodyRequest, res: Response) => {
  const isLogin = req.session ? req.session.login : false
  if (isLogin) {
    res.send(`
    <html>
        <body>
          <a href="/getData">爬虫</a>
          <a href="/showData">展示数据</a>
          <a href="/logout" >退出</a>
        </body>
      </html>
    `)
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
    `)
  }
})

// 登录接口
router.post('/login', (req: BodyRequest, res: Response) => {
  const { password } = req.body
  const isLogin = req.session ? req.session.login : false
  if (isLogin) {
    res.send('你已经登陆')
  } else {
    if (password == '123' && req.session) {
      req.session.login = true
      res.json(responseData('登陆成功'))
    } else {
      res.json(responseData(null, `${req.userName} 密码错误 登录失败`))
    }
  }
})

// 退出接口
router.get('/logout', (req: BodyRequest, res: Response) => {
  const isLogin = req.session ? req.session.login : false
  if (isLogin && req.session) {
    req.session.login = false
  }
  res.json(responseData('退出成功'))
})

// 爬虫数据
router.get('/getData', checkLogin, (req: BodyRequest, res: Response) => {
  const url = 'http://www.weather.com.cn/weather/101280601.shtml'
  const analyzer = WeatherAnalyzer.getInstance()
  new Crawler(analyzer, url)
  res.json(responseData('获取成功'))
})

// 展示数据
router.get('/showData', checkLogin, (req: BodyRequest, res: Response) => {
  try {
    const wPath = path.resolve(__dirname, '../../data/weather.json')
    const result = fs.readFileSync(wPath, 'utf8')
    res.json(JSON.parse(result))
  } catch (e) {
    res.json(responseData(null, '未存在爬虫数据'))
  }
})

export default router
