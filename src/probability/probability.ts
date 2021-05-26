import { getRandom } from '../helper/util'

const random5 = () => getRandom(1, 5)
const random7 = () => getRandom(1, 7)

export class Probability {
  /**
   * 根据 random7() 生成 [1-5] 之间的随机数字，
   * 且每个数字的生成的概率是一样的
   */
  random7ToRandom5() {
    while (true) {
      const result = random7()
      // 抛弃大于 5 的随机数，每个数字的概率都是 1 / 7
      if (result > 5) {
        continue
      }
      return result
    }
  }

  /**
   * 根据 random5() 生成 [1-7] 之间的随机数字，
   * 且每个数字的生成的概率是一样的
   */
  random5ToRandom7() {
    while (true) {
      const rand1 = random5()
      const rand2 = random5()

      // 生成 [1-25] 之间的随机数
      const random25 = (rand1 - 1) * 5 + rand2

      // 21 可以被 7 除尽，抛弃大于 21 的随机数
      if (random25 > 21) {
        continue
      }

      return random25 % 7 + 1
    }
  }
}
