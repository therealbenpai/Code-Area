// String to binary
function stbi(string) {
    const length = string.split('').length
    var i;
    var output1 = ''
    var output2 = ''
    for (i = 0; i < length; i++) {
        output1 += string.charCodeAt(i).toString(2) + " "
    }
    output1 = output1.replace(/[ \t]+$/gmi,'')
    return output1
}

// Binary to string
function bits(binary) {
    const length = binary.split(' ').length
    var i;
    var output = ''
    for (i = 0; i < length; i++) {
        const splitbi = binary.split(' ')
        const charcode = parseInt(splitbi[i],2).toString(10)
        output += String.fromCharCode(charcode)
    }
    return output
}