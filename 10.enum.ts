

/**
 * 枚举类型
 *
 * @enum {number}
 */
enum Jeep {
  SUV,
  MPV,
  JIAOCHE = 4,
  PAOCHE,
}

function chooseJeep(cartype: number) {
  if (cartype == Jeep.SUV) {
    return 'SUV'
  } else if (cartype == Jeep.MPV) {
    return 'MPV'
  } else if (cartype == Jeep.JIAOCHE) {
    return '轿车'
  } else if (cartype == Jeep.PAOCHE) {
    return '跑车'
  } else {
    return ''
  }
}

console.log(chooseJeep(0))
console.log(chooseJeep(4))
console.log(chooseJeep(5))
