function fizzbuzz() {
    for (let iterator = 1; iterator <= 100; iterator++) {
            let value = ''
            if (checkIfContains(3, iterator)) {
                value = value + "Fizz"
            }

            if (checkIfContains(5, iterator)) {
                value = value + "Buzz"
            }

            if (isDivisibleBy(iterator, 3) === 0 && isDivisibleBy(iterator, 5) === 0) {
                console.log(value + "FizzBuzz")
            } else if (isDivisibleBy(iterator, 3) === 0) {
                console.log(value +"Fizz")
            } else if (isDivisibleBy(iterator, 5) === 0) {
                console.log(value + "Buzz")
            } else {
                console.log(value.length > 0 ? value : iterator)
            }
    }
}
module.exports = fizzbuzz

function fizzbuzzTest(number) {
    let value = ''
    if (checkIfContains(3, number)) {
        value = value + "Fizz"
    }

    if (checkIfContains(5, number)) {
        value = value + "Buzz"
    }

    if (isDivisibleBy(number, 3) === 0 && isDivisibleBy(number, 5) === 0) {
        return  value + "FizzBuzz"
    } else if (isDivisibleBy(number, 3) === 0) {
        return value +"Fizz"
    } else if (isDivisibleBy(number, 5) === 0) {
        return  value + "Buzz"
    } else {
        return value.length > 0 ? value : number
    }
}

function isDivisibleBy(number, denominator) {
    return number % denominator
}

function checkIfContains(valueToCheck, number) {
    let numberString = number.toString()
    return numberString.includes(valueToCheck.toString())
}

module.exports = fizzbuzzTest

fizzbuzz()