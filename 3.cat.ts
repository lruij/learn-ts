
/**
 * 对象类型解构注解
 *
 */
function Cat(
  { price, age }: { price: number, age: number }
): string {
  return '猫咪： ' + price + '元' + age + '岁';
}

Cat({price: 1000, age: 0.4})
