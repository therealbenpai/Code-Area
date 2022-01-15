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