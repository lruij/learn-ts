/**
 * > typescript 类型
 *  基础类型：number, string, null, undefined, symbol, boolean, void
 *  对象类型：{}, class, array, function, enum, any, unknown
 */

const year: number = 2012

const cname: string = 'year'

const hasNull: null = null

const hasUndefined: undefined = undefined

const key: symbol = Symbol('id')

const isTrue: boolean = true

let toVoid: void = null
toVoid = undefined


// 类
let obj: object = {}

class cls {

}

// 函数
const func: Function = () => {

}

// 数组
const arra = []

// 枚举
enum TYPE0 {
  SUCCESS = 0,
  ERROR = -1
}
