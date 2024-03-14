const fizzbuzzTest = require('./katafizzbuzz')

test('Number not divisible 3 or 5', () => {
    expect(fizzbuzzTest(7)).toBe(7)
})

test('Number divisible 3 without number 3', () => {
    expect(fizzbuzzTest(6)).toEqual("Fizz")
})

test('Number divisible 5 without number 5', () => {
    expect(fizzbuzzTest(10)).toEqual("Buzz")
})

test('Number divisible 3 and 5 without number 3 and number 5', () => {
    expect(fizzbuzzTest(60)).toEqual("FizzBuzz")
})

test('Number divisible by 3 and have 3', () => {
    expect(fizzbuzzTest(3)).toEqual("FizzFizz")
})

test('Number divisible by 5 and have 5', () => {
    expect(fizzbuzzTest(5)).toEqual("BuzzBuzz")
})

test('Number divisible by 3 and by 5 contains number 5', () => {
    expect(fizzbuzzTest(15)).toEqual("BuzzFizzBuzz")
})

test('Number divisible by 3 and 5 contains number 3', () => {
    expect(fizzbuzzTest(30)).toEqual('FizzFizzBuzz')
})

test('Number divisible by 5 and contain 3 and 5', () => {
    expect(fizzbuzzTest(35)).toEqual('FizzBuzzBuzz')
})