import fs from 'fs'
import * as cheerio from 'cheerio'
import { Analyzer } from '../crawler'
interface Weather {
  day: string
  tem: string
}

interface WeatherResult {
  time: number
  data: Weather[]
}

interface JsonContent {
  [propName: number]: Weather[]
}

export default class WeatherAnalyzer implements Analyzer {
  private _filePath: string = ''
  private static _instance: WeatherAnalyzer
  private constructor() {}

  static getInstance(): WeatherAnalyzer {
    if (!this._instance) {
      this._instance = new WeatherAnalyzer()
    }
    return this._instance
  }

  public analyze(html: string, filePath: string) {
    this._filePath = filePath
    const weatherInfo = this.getWeatherInfo(html)
    const content = this.generateJson(weatherInfo)
    return JSON.stringify(content)
  }

  private getWeatherInfo(html: string) {
    const $ = cheerio.load(html)
    const w7d = $('.sky')

    const weathers: Weather[] = []

    w7d.map((i, el) => {
      const day = $(el).find('h1').text()
      const tem = $(el).find('.tem').text().replace(/\n/g, '')
      weathers.push({
        day,
        tem,
      })
    })

    return {
      time: new Date().getTime(),
      data: weathers,
    }
  }

  private generateJson(result: WeatherResult) {
    let fileContent: JsonContent = {}
    if (fs.existsSync(this._filePath)) {
      fileContent = JSON.parse(fs.readFileSync(this._filePath, 'utf-8'))
    }
    fileContent[result.time] = result.data
    return fileContent
  }
}
