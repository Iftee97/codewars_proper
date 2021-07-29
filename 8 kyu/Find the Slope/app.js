/*

Find the Slope

Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

   a:x1
   b:y1
   c:x2
   d:y2
Assume that [a,b,c,d] and the answer are all integers (no floating numbers!).

*/

// solution:
function slope(points) {
    var y = points[3] - points[1];
    var x = points[2] - points[0];

    if (x == 0)
        return String(undefined);

    return String(y / x);
}

// solution-2:
const slope = points => points[2] == points[0] ? "undefined" : (points[3] - points[1]) / (points[2] - points[0]) + "";
