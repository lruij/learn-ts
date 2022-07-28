
/**
 * 类继承 extends
 *  子类获取父类方法: super [通过 "super" 关键字只能访问基类的公共方法和受保护方法]
 *  子类使用构造器需要调用 super();
 */
class Family {
  getClassName() {
    return "Family";
  }
}

class FamilyLi extends Family {
  constructor() {
    super();
  }

  getSuperClassName() {
    return super.getClassName()
  }
}


/**
 * constructor 写法
 *  传统
 *  简化
 *
 * @class FamilyYang
 * @extends {Family}
 */
class FamilyYang extends Family {


  // 传统写法
  // name: string;
  // constructor(name: string) {
  //   super();
  //   this.name = name;
  // }

  // 简化写法
  constructor(public name: string) {
    super()
  }
}


/**
 * 访问控制
 *  公共: public [允许在类的外部被调用]
 *  私有：private [允许在类的内部被调用, 写法一般前面加上 _ ]
 *  保护: protected [允许在类的内部及其继承的子类被调用]
 *
 * @class FamilyWu
 * @extends {Family}
 */
class FamilyWu extends Family {
  public name = 'FamilyWu';
  private _lastName = 'Wu';
  protected firstName = 'Family';

  getFirstName() { return this.firstName; }

  protected getLastName() { return this._lastName; }
}

class FamilyWuWu extends FamilyWu {
  getWuFirstName() {
    return this.firstName;
  }

  getWuLastName() { return super.getLastName(); }
}

const familyWu = new FamilyWu()
// 公共属性 可在外部调用
console.log(familyWu.name)
// 私有属性 不可访问
// console.log(familyWu._lastName);
// 保护属性 只能在类及子类内部调用
// console.log(familyWu.firstName);

const familyWuWu = new FamilyWuWu()
console.log(familyWuWu.getWuLastName())



/**
 * getter 和 setter [保护私有属性]
 *
 * @class FamilyChen
 * @extends {Family}
 */
class FamilyChen extends Family {

  constructor(public name: string) {
    super();
  }

  private _lastName = "Chen"

  get lastName() {
    return this._lastName
  }

  set lastName(value: string) {
    this._lastName = value
  }
}

const familyChen = new FamilyChen('FamilyChen')
console.log(familyChen.lastName)
familyChen.lastName = 'chen-family'
console.log(familyChen.lastName)

/**
 * static 实现单例类
 *
 * @class OneInstance
 */
class OneInstance {
  // 私有静态属性
  private static _instance: OneInstance;

  // 实例名称
  constructor(public name: string) { }

  // 获取实例
  static getInstance() {
    if (!this._instance) {
      this._instance = new OneInstance('我是单例的')
    }
    return this._instance;
  }
}

const instance1 = OneInstance.getInstance()
const instance2 = OneInstance.getInstance()

console.log(instance1.name, instance2.name)
