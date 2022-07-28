/**
 * 参数装饰器
 *
 * @param {*} target
 * @param {string} key
 * @param {number} paramIndex
 */
export function paramDecorator(target: any, key: string, paramIndex: number) {
  console.log('[paramDecorator]')
  console.log(target, key, paramIndex)
}
