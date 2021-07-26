/*

Surface Area and Volume of a Box


Write a function that returns the total surface area and volume of a box as an array: [area, volume]

*/

// solution:
function getSize(width, height, depth) {
    let totalSurfaceArea = (2 * width * height) + (2 * height * depth) + (2 * width * depth);
    let volume = width * height * depth;
    return [totalSurfaceArea, volume];
}
