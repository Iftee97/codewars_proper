/*

Are there any arrows left?

Check your arrows
You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), so each item is an arrow.
You need to verify that you have some good ones left, in order to prepare for battle:

anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])

*/

// solution:
function anyArrows(arrows) {
    return arrows.some(arrow => arrow.damaged !== true);
}

// solution-2:
const anyArrows = arrows => arrows.some(arrow => !arrow.damaged);
