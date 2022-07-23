/**
 *  类装饰器其实为一个函数
 *  使用时 在类的上方写 @simpleDecorator 即可执行
 *
 * @export
 * @param {*} constructor 类的constructor
 */
export function simpleDecorator(constructor: any) {
  console.log('[objDecorator]')
}

/**
 *  如果要传参 嵌套多一层函数即可
 *  使用方法：@statusDecorator(true)
 *
 * @export
 * @param {boolean} flag
 * @return {Function}
 */
export function statusDecorator(flag: boolean): Function {
  console.log('[objDecorator]')
  if (flag) {
    return function (constructor: any) {
      // 通过装饰器实现的方法 调用时无法识别 getStatus()
      constructor.prototype.getStatus = () => {
        return 'online'
      }
    }
  } else {
    return function (constructor: any) {}
  }
}

/**
 * 通过泛型Ｔ继承可以实现对构造函数的类型进行定义
 *
 * (...args: any[]) => any：表示为一个函数　函数参数为一个数组
 * new：指定表示可以将函数视为类构造函数
 *
 * @export
 * @template T
 * @param {T} constructor
 * @return {T}
 */
export function typeDecorator<T extends new (...args: any[]) => any>(
  constructor: T
) {
  return class extends constructor {
    type = 'eee'
    getType() {
      return this.type
    }
  }
}
