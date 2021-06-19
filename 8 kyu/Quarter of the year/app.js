/*

Quarter of the year

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

*/

// solution:
const quarterOf = (month) => {
  if ([1, 2, 3].includes(month))
    return 1
  else if ([4, 5, 6].includes(month))
    return 2
  else if ([7, 8, 9].includes(month))
    return 3
  else return 4
}

// solution 2:
const quarterOfTryTwo = (month) => {
  const monthsAsQuarters = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
  ]

  for (quarter of monthsAsQuarters) {
    if (quarter.includes(month))
      return monthsAsQuarters.indexOf(quarter) + 1
  }
}
