import { Analyzer } from '../crawler'

export default class XAnalyzer implements Analyzer {
  public analyze(html: string, filePath: string) {
    return html
  }
}
