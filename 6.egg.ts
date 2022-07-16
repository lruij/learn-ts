
/**
 * > interface 接口声明进行类型校验
 *  可选： ?
 *  只读: readonly
 */
interface Egg {
  weight: number;
  color?: string;
  readonly type?: 'string';
}

const testEgg = (egg: Egg) => {
  console.log(egg.weight);
}

// 由于存在缓存机制 ts 弱校验 只要含有应该的属性就不报错
const cegg = {
  weight: 100,
  sex: 'male',
}

testEgg(cegg)

// 动态传入会进行强校验 提示 sex 不存在定义
// testEgg({
//   weight: 100,
//   sex: 'male',
// })


/**
 * > 接口继承
 *
 * @interface BigEgg
 * @extends {Egg}
 */
interface BigEgg extends Egg {
  open(): void
}

const testBigEgg = (bigEgg: BigEgg) => {
  bigEgg.open();
}

testBigEgg({
  weight: 100,
  open() {
    console.log('我裂开了')
  }
})


/**
 * 类继承接口
 *
 * @class OldEgg
 * @implements {BigEgg}
 */
class OldEgg implements BigEgg {
  weight = 100;
  open(){
    console.log('老裂开了')
  }
}

interface sayHello {
  (enn: string): string
}

const testSayHello: sayHello = (enn: string) => {
  return enn
}

console.log(testSayHello('Hello'));
