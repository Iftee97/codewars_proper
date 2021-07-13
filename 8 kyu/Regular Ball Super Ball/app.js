/*

Regular Ball Super Ball

Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"

*/

// solution:
class Ball {
    constructor(ballType) {
        this.ballType = ballType || 'regular';
    }
}


// solution-2:
class Ball {
    constructor(ballType = "regular") {
        this.ballType = ballType;
    }
}

// const ball1 = new Ball();
// const ball2 = new Ball('super');

// console.log(ball1.ballType);
// console.log(ball2.ballType);
