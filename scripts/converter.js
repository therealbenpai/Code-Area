// String to binary
function stbi(string) {
    const length = string.split('').length
    var i;
    var output = ''
    for (i = 0; i < length; i++) {
        output += string.charCodeAt(i).toString(2) + " "
    }
    output = output.replace(/[ \t]+$/gmi,'')
    return output
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

// String to hex
function sth(string) {
    const length = string.split('').length
    var i;
    var output = ''
    for (i = 0; i < length; i++) {
        output += string.charCodeAt(i).toString(16) + " "
    }
    output = output.replace(/[ \t]+$/gmi,'')
    return output
}

// Hex to string
function hts(hex) {
    const length = hex.split(' ').length
    var i;
    var output = ''
    for (i = 0; i < length; i++) {
        const splith = hex.split(' ')
        const charcode = parseInt(splith[i],16).toString(10)
        output += String.fromCharCode(charcode)
    }
    return output    
}

// String to Base32
function stb32(string) {
    const length = string.split('').length
    var i;
    var output = ''
    for (i = 0; i < length; i++) {
        output += string.charCodeAt(i).toString(32) + " "
    }
    output = output.replace(/[ \t]+$/gmi,'')
    return output
}

// Base32 to string
function b32ts(b32) {
    const length = b32.split(' ').length
    var i;
    var output = ''
    for (i = 0; i < length; i++) {
        const splitb32 = b32.split(' ')
        const charcode = parseInt(splitb32[i],32).toString(10)
        output += String.fromCharCode(charcode)
    }
    return output    
}