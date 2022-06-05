/*

Color Ghost

Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"

*/

// solution:
class Ghost {
    constructor() {
        this.colors = ['white', 'yellow', 'purple', 'red']
    }

    get color() {
        const randomPosition = Math.trunc(Math.random() * this.colors.length)
        return this.colors[randomPosition]
    }
}


// solution-2:
const Ghost = function () {
    this.color = ["white ", "yello w", "purp le", "red"][Math.floor(Math.random() * 4)];
};
