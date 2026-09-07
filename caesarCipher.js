function caesarCipher(string, key) {
    const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]

    let finalResult = ''
    let splittedString = string.split('')

    splittedString.forEach((item) => {
        let indexOfItem = alphabet.indexOf(item)
        let newIndex = indexOfItem + key

        if (newIndex > 25) {
            newIndex -= 26
        }

        let result = alphabet[newIndex]
        finalResult += result
    })

    return finalResult
}



export { caesarCipher }