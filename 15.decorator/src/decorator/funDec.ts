/**
 * 普通方法装饰器
 *
 * @param {*} target 类的 prototype
 * @param {string} key 方法名称
 */
export function getNameDecorator(target: any, key: string) {
  console.log('[funDecorator]')
  console.log(target, key)
}

/**
 * 此方法类似 Object.definedProperty 可以进行配置
 *
 */
export function noWriteDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  console.log('[funDecorator]')
  descriptor.writable = false
}
