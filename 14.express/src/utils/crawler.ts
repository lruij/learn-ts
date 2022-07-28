import superagent from 'superagent'

import fs from 'fs'
import path from 'path'

export interface Analyzer {
  analyze: (html: string, filePath: string) => string
}

export default class Crawler {
  private _filePath = path.resolve(__dirname, '../../data/weather.json')

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
