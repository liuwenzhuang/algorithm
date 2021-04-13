const atomRegStr = '((([0-1][0-9]|[2][0-3]):[0-5][0-9])|24:00)'
export const timeWindowReg = new RegExp(
  `^(${atomRegStr}-${atomRegStr})(,${atomRegStr}-${atomRegStr})*$`
)
