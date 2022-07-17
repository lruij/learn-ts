


/**
 * 联合类型
 *    多个类型使用 |
 * 类型保护
 *    as 断言
 *    in 针对属性
 *    typeof 针对简单类型
 *    instanceof 针对类
 */
interface Bee {
  fly: boolean;
  gatherHoney: () => {}
}

interface Ant {
  fly: boolean;
  move: () => {}
}

function testInsect(insect: Bee | Ant) {
  // as 断言
  if (insect.fly) {
    (insect as Bee).gatherHoney()
  } else {
    (insect as Ant).move()
  }

  // in 语法推断
  if ('gatherHoney' in insect) {
    insect.gatherHoney()
  } else {
    insect.move()
  }
}


/**
 * typeof 针对简单类型
 *
 * @param {(string | number)} beeCount
 * @param {(string | number)} antCount
 * @return {*}  {(number | string)}
 */
function countInsect(beeCount: string | number, antCount: string | number): string | number{
  if (typeof beeCount === 'string' || typeof antCount === 'string') {
    return `${beeCount} ${antCount}`
  } else {
    return beeCount + antCount
  }
}


/**
 *  instanceof 针对类
 *
 * @class Insect
 */
class Insect {
  constructor(public count: number) { }
}

function insectCount(bee: object | Insect, ant: object | Insect) : number {
  if (bee instanceof Insect && ant instanceof Insect) {
    return bee.count + ant.count
  }
  return 0
}
