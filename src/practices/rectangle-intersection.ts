/**
 * @fileoverview 找到两个矩形的交集矩形，矩形的每个边都是平行于坐标轴的
 */

export class Rectangle {
  constructor(
    public leftX: number,
    public bottomY: number,
    public width: number,
    public height: number
  ) {
    this.leftX = leftX
    this.bottomY = bottomY
    this.width = width
    this.height = height
  }

  log() {
    return [this.leftX, this.bottomY, this.width, this.height]
  }
}

export function findIntersectionBetweenRectangles(
  rectA: Rectangle,
  rectB: Rectangle
) {
  let lowerRect: Rectangle
  let higherRect: Rectangle
  let lefterRect: Rectangle
  let righterRect: Rectangle

  if (rectA.bottomY <= rectB.bottomY) {
    lowerRect = rectA
    higherRect = rectB
  } else {
    lowerRect = rectB
    higherRect = rectA
  }

  if (rectA.leftX <= rectB.leftX) {
    lefterRect = rectA
    righterRect = rectB
  } else {
    lefterRect = rectB
    righterRect = rectA
  }

  if (
    lefterRect.leftX + lefterRect.width <= righterRect.leftX ||
    lowerRect.bottomY + lowerRect.height <= higherRect.bottomY
  ) {
    // 两者无交集
    return null
  }

  if (
    righterRect.leftX + righterRect.width <=
      lefterRect.leftX + lefterRect.width &&
    righterRect.bottomY >= lefterRect.bottomY &&
    righterRect.bottomY + righterRect.height <=
      lefterRect.bottomY + lefterRect.height
  ) {
    // righterRect 在 lefterRect 内部
    return righterRect
  }

  const leftX = higherRect.leftX
  const bottomY = higherRect.bottomY
  const width = lefterRect.leftX + lefterRect.width - righterRect.leftX
  const height = lowerRect.bottomY + lowerRect.height - higherRect.bottomY

  return new Rectangle(leftX, bottomY, width, height)
}
