//T: Code as fast as you can! You need to double the integer and return it.

//S:
const doubleInteger = i => i * 2
const rps = (p1, p2) => {
    if (p1 === p2) {
        return 'Draw!'
    } else if ((p1 === 'scissors' && p2 === 'paper')
                || (p1 === 'paper' && p2 === 'rock')
                || (p1 === 'rock' && p2 === 'scissors')) {
        return 'Player 1 won!'
    } else {
        return 'Player 2 won!'
    }
};