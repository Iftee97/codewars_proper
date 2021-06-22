/*

Find Nearest square number

Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

Goodluck :)

*/

// solution:
function nearestGreaterSquaredNum(n) {
  while (true) {
    if (Number.isInteger(Math.sqrt(n))) {
      return n
    }
    n++
  }
}

function nearestSmallerSquaredNum(n) {
  while (true) {
    if (Number.isInteger(Math.sqrt(n))) {
      return n
    }
    n--
  }
}

function nearestSq(n) {
  const nearestGreater = nearestGreaterSquaredNum(n)
  const nearestSmaller = nearestSmallerSquaredNum(n)

  const nearest = Math.abs(nearestGreater - n) < Math.abs(nearestSmaller - n) ? nearestGreater : nearestSmaller
  return nearest
}
