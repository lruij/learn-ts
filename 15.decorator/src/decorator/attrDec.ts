/**
 * 属性装饰器
 * 无法对实例上的属性进行修改 修改的是原型上的属性
 *
 * @export
 * @param {*} target
 * @param {string} key
 */
export function attrDecorator(target: any, key: string): any {
  console.log('[attrDecorator]')
  console.log(target, key)
  target[key] = 'attrDecorator'

  const descriptor: PropertyDescriptor = {
    writable: true,
  }

  return descriptor
}
