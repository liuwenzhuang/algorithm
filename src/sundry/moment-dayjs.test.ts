import dayjs from 'dayjs'
import moment from 'moment'
import dayOfYear from 'dayjs/plugin/dayOfYear'
import objectSupport from 'dayjs/plugin/objectSupport'

dayjs.extend(objectSupport)
dayjs.extend(dayOfYear)

describe('dayjs and moment should work equally', () => {
  it('constructor', () => {
    let dateTimeStamp: number | string = 1634699340000
    expect(moment(dateTimeStamp).valueOf()).toBe(dayjs(dateTimeStamp).valueOf())

    dateTimeStamp = '2021-10-19 14:18:00'

    const momentDate = moment(dateTimeStamp)
    const dayjsDate = dayjs(dateTimeStamp)

    expect(momentDate.valueOf()).toBe(dayjsDate.valueOf())

    expect(momentDate.format('YYYY-MM-DD HH:mm:ss')).toBe(
      dayjsDate.format('YYYY-MM-DD HH:mm:ss')
    )

    expect(momentDate.subtract(1, 'day').valueOf()).toBe(
      dayjsDate.subtract(1, 'day').valueOf()
    )
  })

  it('moment is mutable and dayjs is immutable', () => {
    const dateTimeStamp = '2021-10-19 14:18:00'

    const momentDate = moment(dateTimeStamp)
    const momentValue = momentDate.valueOf()
    const dayjsDate = dayjs(dateTimeStamp)
    const dayjsValue = dayjsDate.valueOf()

    expect(momentValue).toBe(dayjsValue)

    expect(momentDate.startOf('day').toDate().getTime()).toBe(
      dayjsDate.startOf('day').toDate().getTime()
    )

    expect(momentDate.valueOf()).toBeLessThan(momentValue)
    expect(dayjsDate.valueOf()).toBe(dayjsValue)
  })

  it('subtract unit', () => {
    const momentDate1 = moment()
    const momentDate2 = moment(momentDate1.valueOf())
    const momentDate3 = moment(momentDate1.valueOf())

    const dayjsDate = dayjs(momentDate1.valueOf())

    expect(momentDate1.subtract(1, 'day').valueOf()).toBe(
      momentDate2.subtract(1, 'days').valueOf()
    )

    expect(momentDate3.subtract(1, 'day').valueOf()).toBe(
      dayjsDate.subtract(1, 'day').valueOf()
    )

    expect(dayjsDate.subtract(1, 'day').valueOf()).toBe(
      dayjsDate.subtract(1, 'days').valueOf()
    )
  })

  it('hours of moment vs hour or dayjs', () => {
    const dateStr = '2021-10-19 14:18:00'
    const momentDate = moment(dateStr)
    const dayjsDate = dayjs(dateStr)

    expect(dayjsDate.format('YYYYMMDD_HHmmss')).toBe(
      momentDate.format('YYYYMMDD_HHmmss')
    )

    const momentStartTime = momentDate.startOf('day').hours(0).valueOf()
    const momentEndTime = momentDate.endOf('day').hours(23).valueOf()

    const dayjsStartTime = dayjsDate.startOf('day').hour(0).valueOf()
    const dayjsEndTime = dayjsDate.endOf('day').hour(23).valueOf()

    expect(momentStartTime).toBe(dayjsStartTime)
    expect(momentEndTime).toBe(dayjsEndTime)
  })

  it('object config for dayjs and moment', () => {
    const date = new Date()
    const momentDate = moment({
      y: date.getFullYear(),
      M: date.getMonth(),
      d: date.getDate(),
      h: date.getHours(),
      m: date.getMinutes(),
      s: date.getSeconds(),
    })
    // hack, see: https://github.com/iamkun/dayjs/pull/1647
    const dayjsDateLongFormat = dayjs({
      year: date.getFullYear(),
      month: date.getMonth(),
      date: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    } as any)
    const dayjsDateShortFormat = dayjs({
      y: date.getFullYear(),
      M: date.getMonth(),
      d: date.getDate(),
      h: date.getHours(),
      m: date.getMinutes(),
      s: date.getSeconds(),
    } as any)
    expect(+dayjsDateLongFormat).toBe(+momentDate)
    expect(+dayjsDateShortFormat).toBe(+momentDate)
  })

  it('set funciton', () => {
    const momentDate = moment()
    const momentDataBackup = moment(momentDate.valueOf())
    const dayjsDate = dayjs(momentDate.valueOf())

    const afterMomentDateFormat = momentDate
      .set('hour', 8)
      .format('YYYY/MM/DD HH:mm')
    const afterDayjsDateFormat = dayjsDate
      .set('hour', 8)
      .format('YYYY/MM/DD HH:mm')
    expect(afterMomentDateFormat).toBe(afterDayjsDateFormat)

    const afterMomentDataBackupFormat = momentDataBackup
      .set('hour', 8)
      .subtract(30, 'days')
      .format('YYYY/MM/DD HH:mm')
    const afterDayjsDateBackupFormat = dayjsDate
      .set('hour', 8)
      .subtract(30, 'days')
      .format('YYYY/MM/DD HH:mm')
    expect(afterMomentDataBackupFormat).toBe(afterDayjsDateBackupFormat)
  })

  it('chained methods', () => {
    const dateTimeStamp = 1634699340000
    const momentValue = moment(dateTimeStamp).hour(0).minute(0).valueOf()
    const dayjsValue = dayjs(dateTimeStamp).hour(0).minute(0).valueOf()
    expect(momentValue).toBe(dayjsValue)

    expect(moment(dateTimeStamp).day()).toBe(dayjs(dateTimeStamp).day())
  })

  it('mutable moment and immutable dayjs - add method', () => {
    let momentDate = moment(1634699340123)
    let momentTime = 0
    const momentArr = []

    let dayjsDate = dayjs(momentDate.valueOf())
    let dayjsTime = 0
    const dayjsArr = []

    while (momentTime++ < 10) {
      momentArr.push({
        nextExecTime: momentDate.format('YYYY-MM-DD HH:mm:ss'),
        execTime: momentDate.unix() * 1000,
      })
      momentDate.add(1, 'M')
    }

    while (dayjsTime++ < 10) {
      dayjsArr.push({
        nextExecTime: dayjsDate.format('YYYY-MM-DD HH:mm:ss'),
        execTime: dayjsDate.unix() * 1000,
      })
      dayjsDate = dayjsDate.add(1, 'M')
    }

    expect(dayjsArr).toEqual(momentArr)
  })

  it('dates relationship', () => {
    let dateTimeStamp1 = 1634699340000
    let dateTimeStamp2 = 1634699340001
    let momentDate1 = moment(dateTimeStamp1)
      .year(1)
      .month(1)
      .dayOfYear(1)
      .hour(1)
    let momentDate2 = moment(dateTimeStamp2)
      .year(1)
      .month(1)
      .dayOfYear(1)
      .hour(1)
    expect(momentDate1.isAfter(momentDate2)).toBe(false)

    let dayjsDate1 = dayjs(dateTimeStamp1).year(1).month(1).dayOfYear(1).hour(1)
    let dayjsDate2 = dayjs(dateTimeStamp1).year(1).month(1).dayOfYear(1).hour(1)

    expect(dayjsDate1.isAfter(dayjsDate2)).toBe(false)
  })
})
