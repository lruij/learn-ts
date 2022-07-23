import { statusDecorator, typeDecorator } from './decorator/objDec'

import { getNameDecorator, noWriteDecorator } from './decorator/funDec'

/**
 * <装饰器>
 *
 * @class OnLine
 */
@typeDecorator
@statusDecorator(true)
class OnLine {
  name: string
  constructor(name: string) {
    this.name = name
    console.log('first')
  }

  @getNameDecorator
  getName() {
    return this.name
  }
}

const online = new OnLine('test')
const sta = (online as any).getType()
console.log(sta)

/**
 * online as any 替代方法
 *
 * 通过工厂模式可以识别到函数 getType()
 *
 * 但是无法进行函数装饰器使用
 * @type {*}
 *
 */
const OnlineX = typeDecorator(
  class {
    type: string
    constructor(type: string) {
      this.type = type
    }
  }
)

const onlinex = new OnlineX('test')
console.log(onlinex.getType())

import {
  vGetKeyDecorator,
  vGetKeyNotWriteDecorator,
} from './decorator/visitDec'

/**
 * 访问器 set/get只能装饰一个
 *
 * @class TestOnline
 */
class TestOnline {
  private _key: string
  constructor(key: string) {
    this._key = key
  }

  get key() {
    return this._key
  }

  // @vGetKeyNotWriteDecorator
  set key(value: string) {
    this._key = value
  }

  @noWriteDecorator
  getKey() {
    return this._key
  }
}

const testOnline = new TestOnline('key 123')

// 设置方法不可被重写
// TypeError: Cannot assign to read only property 'getKey' of object '#<TestOnline>'
// testOnline.getKey = () => {
//   return 'write function'
// }

// 捕获 set
// testOnline.key = 'testOnline key'

// 重设 key
console.log(testOnline.key)

import { attrDecorator } from './decorator/attrDec'
import { paramDecorator } from './decorator/paramDec'
class TestAttr {
  @attrDecorator
  name = 'testattr'

  getName(@paramDecorator name: string, desc: string) {
    console.log(name, desc)
  }
}

const testAttr = new TestAttr()
// 只读 TypeError: Cannot assign to read only property 'name' of object '#<TestAttr>'
// testAttr.name = ''

console.log(testAttr.name)
console.log((testAttr as any).__proto__.name)
testAttr.getName('param', 'decorator')
