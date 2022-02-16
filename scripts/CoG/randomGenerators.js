// Random number
function ranNum(max) {
    const num = Math.round(Math.random()*max)
    return num
}

// Bulk Random Num
function bRanNum(amount,max) {
    let bnum = "s"
    for (let index = 0; index < amount; index++) {
        const num = ranNum(max)
        bnum += `.${num}`
    }
    return bnum.split('s.').join('').split('.')
}

// Random Hex Generator
function randHex(prefix) {
    if (prefix == undefined) {
        return `${Math.floor(Math.random()*Math.pow(16,6)).toString(16)}`
    } else {
        return `${prefix}${Math.floor(Math.random()*Math.pow(16,6)).toString(16)}`
    }
}

// Bulk Hex Generator
function bRandHex(amount,prefix) {
    let hexRaw = 's'
    for (let index = 0; index < amount; index++) {
        const hex = randHex(prefix)
        hexRaw += `.${hex}`
    }
    return hexRaw.split('s.').join('').split('.')
}

function customNumberGenerator(min,max) {
    // Bug Check
    if (max <= 0 || min <= 0) {
        return new Error("Values need to be above 0")
    }
    if (min >= max) {
        return new Error("Min must be less than max")
    }
    if (max > Math.pow(10,6)) {
        return new Error(`Max must be less than ${Math.pow(10,6)}`)
    }
    min = Number(min)
    max = Number(max)
    const fmax = max - min
    const random = Math.round(Math.random()*fmax) + min
    return random
}