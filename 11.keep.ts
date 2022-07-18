
/**
 * 泛型 [泛指的类型]
 *
 * @template T
 * @param {T} start
 * @param {T} end
 */
function keep<T>(start: T, end: T) {
  return `${start} - ${end}`;
}

keep<number>(1, 3)


// 多个
function keep2<T, P>(start: T, end: P) {
  return `${start} - ${end}`;
}

keep2<number, string>(1, '3')

// 返回值类型指定
function keep3<T, P>(start: T, end: P) : T {
  return start
}



/**
 * 泛型在类中的使用
 *
 */


// 基础用法

class KeepDay<T> {
  constructor(private _data: T[]) { }

  getItem(index: number) {
    return this._data[index]
  }
}

const keepday = new KeepDay<number>([1]);


// 进阶用法

interface Item {
  name: string
}

class KeepList<T extends Item> {
  constructor(private _data: T[]) { }

  getItem(index: number) {
    return this._data[index].name
  }
}

const keepData = new KeepList<Item>([
  {
    name: 'item'
  }
])

// 定义函数类型

const keepFunc: <T>() => string = <T>() => {
  return 'keep'
}
