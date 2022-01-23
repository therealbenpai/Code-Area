const keygen = function () {
    return Math.ceil(Math.random() * 8) * 1000 + Math.ceil(Math.random() * 8) * 100 + Math.ceil(Math.random() * 8) * 10 + Math.ceil(Math.random() * 8)
}

for (let i = 0; i < 10000; i++) {
    var ev = keygen()
    let v = keygen()
    if (v == ev) {
        console.log(`id of ${ev} was found on iteration ${i}`)
        break;
    } else {
        console.log(v)
    }
}