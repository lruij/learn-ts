

/**
 * 数组
 *
 */
const arr: (number | string)[] = [1, '2', 3, 4, 5]
const str: string[] = ['aaaa']
const fnc: Function[] = [() => {}]


/**
 * type alias 类型别名
 *
 */

type animal = { name: string; age: number}

class Dog {
  name: string;
  age: number;
  // strict 模式下 未初始化属性必须通过 contructor 初始化值
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const Dogs: animal[] = [
  new Dog('dd', 1),
  {
    name: 'tt',
    age: 2
  }
]


/**
 *  元组
 *
 */
const animalInfo: [string, number, string] = ['a', 1, 'b']

const animalCsv: [string, number, string][] = [['a', 1, 'b']]
