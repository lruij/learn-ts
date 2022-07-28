/**
 * 访问器装饰器
 */

export function vGetKeyDecorator(target: any, key: string) {
  console.log(target, key)
}

export function vGetKeyNotWriteDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  descriptor.writable = false
}
