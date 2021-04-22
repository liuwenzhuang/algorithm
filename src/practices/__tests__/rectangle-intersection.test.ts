import {
  findIntersectionBetweenRectangles,
  Rectangle,
} from '../rectangle-intersection'

describe('Rectangle intersection', () => {
  it('overlap along both axes', () => {
    let rect1 = new Rectangle(1, 1, 6, 3)
    let rect2 = new Rectangle(5, 2, 3, 6)
    let actual = findIntersectionBetweenRectangles(rect1, rect2)
    let expected = new Rectangle(5, 2, 2, 2)
    expect(actual.log()).toEqual(expected.log())
  })

  it('one rectangle inside another', () => {
    let rect1 = new Rectangle(1, 1, 6, 6)
    let rect2 = new Rectangle(3, 3, 2, 2)
    let actual = findIntersectionBetweenRectangles(rect1, rect2)
    let expected = new Rectangle(3, 3, 2, 2)
    expect(actual.log()).toEqual(expected.log())
  })

  it('same rectangle', () => {
    let rect1 = new Rectangle(2, 2, 4, 4)
    let rect2 = new Rectangle(2, 2, 4, 4)
    let actual = findIntersectionBetweenRectangles(rect1, rect2)
    let expected = new Rectangle(2, 2, 4, 4)
    expect(actual.log()).toEqual(expected.log())
  })

  it('touch on horizontal edge', () => {
    let rect1 = new Rectangle(1, 2, 3, 4)
    let rect2 = new Rectangle(2, 6, 2, 2)
    let actual = findIntersectionBetweenRectangles(rect1, rect2)
    expect(actual).toBeNull()
  })

  it('touch on vertical edge', () => {
    let rect1 = new Rectangle(1, 2, 3, 4)
    let rect2 = new Rectangle(4, 3, 2, 2)
    let actual = findIntersectionBetweenRectangles(rect1, rect2)
    expect(actual).toBeNull()
  })

  it('touch at a corner', () => {
    let rect1 = new Rectangle(1, 1, 2, 2)
    let rect2 = new Rectangle(3, 3, 2, 2)
    let actual = findIntersectionBetweenRectangles(rect1, rect2)
    expect(actual).toBeNull()
  })

  it('no overlap', () => {
    let rect1 = new Rectangle(1, 1, 2, 2)
    let rect2 = new Rectangle(4, 6, 3, 6)
    let actual = findIntersectionBetweenRectangles(rect1, rect2)
    expect(actual).toBeNull()
  })
})
