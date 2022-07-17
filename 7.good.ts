

/**
 * 抽象类 [把通用的方法抽象出来]
 *  其未实现的属性和方法都只能是 abstract
 *  由其继续的子类进行实现
 * @abstract
 * @class Good
 */
abstract class Good {
  isGood = true;

  getGood() { return this.isGood; }

  abstract hasGood: boolean;

  abstract sayHello(): string;
}


class GoodMan extends Good {
  hasGood = true
  sayHello() {
    return "Hello I'm Man"
  }
}


class GoodLady extends Good {
  hasGood = true
  sayHello() {
    return "Hello  I'm Lady"
  }
}

