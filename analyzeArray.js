function analyzeArray(array) {
    let sumOfNumbers = 0
    let averageNumber = null
    let minNumber = Math.min(...array)
    let maxNumber = Math.max(...array)
    let arrayLength = array.length

    array.forEach((item) => {
        sumOfNumbers += item
    })
    averageNumber = sumOfNumbers / array.length

    let newObj = {
        average: averageNumber,
        min: minNumber,
        max: maxNumber,
        length: arrayLength
    }

    return newObj
}


analyzeArray([1, 8, 3, 4, 2, 6])



export { analyzeArray }