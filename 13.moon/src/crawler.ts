import superagent from 'superagent'

import fs from 'fs'
import path from 'path'

import WeatherAnalyzer from './analyzer/weatherAnalyzer'
// import XAnalyzer from './analyzer/XAnalyzer'

export interface Analyzer {
  analyze: (html: string, filePath: string) => string
}

class Crawler {
  private _filePath = path.resolve(__dirname, '../data/weather.json')

  constructor(private _analyzer: Analyzer, private _url: string) {
    this.initProcess()
  }

  private async initProcess() {
    const html = await this.getRawHtml()
    const content = this._analyzer.analyze(html, this._filePath)
    this.writeFile(content)
  }

  private async getRawHtml() {
    const result = await superagent.get(this._url)
    return result.text
  }

  private writeFile(content: string) {
    fs.writeFileSync(this._filePath, content)
  }
}

const url = 'http://www.weather.com.cn/weather/101280601.shtml'

const analyzer = WeatherAnalyzer.getInstance()
// const analyzer = new XAnalyzer()
const crawler = new Crawler(analyzer, url)
console.log('test build & nodemon')
