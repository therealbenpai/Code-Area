// Morse Code Dictionary
const stmca = {
    a : ".-",
    b : "-...",
    c : "-.-.",
    d : "-..",
    e : ".",
    f : "..-.",
    g : "--.",
    h : "....",
    i : "..",
    j : ".---",
    k : "-.-",
    l : ".-..",
    m : "--",
    n : "-.",
    o : "---",
    p : ".--.",
    q : "--.-",
    r : ".-.",
    s : "...",
    t : "-",
    u : "..-",
    v : "...-",
    w : ".--",
    x : "-..-",
    y : "-.--",
    z : "--..",
    specials : [{
        space : "/",
        period : ".-.-.-",
        comma : "--..--",
        dash : "-..-.",
        slash : "-....-"
    }],
    numbers : [{
        0 : "-----",
        1 : ".----",
        2 : "..---",
        3 : "...--",
        4 : "....-",
        5 : ".....",
        6 : "-....",
        7 : "--...",
        8 : "---..",
        9 : "----.",
    }] 
}

// String to Morse Code
function stmc(string) {
    const scRegex = /\w/
    const ncRegex = /\d/
    const splitstr = string.toLowerCase().split('')
    const length = splitstr.length
    let i;
    var output = ''
    for (i=0;i<length;i++) {
        // Tests if its a "non-word character"
        if (scRegex.test(splitstr[i]) == false) {
            // Test if its a number
            if (ncRegex.test(parseInt(splitstr[i],10)) == true) {
                if (splitstr[i] == 0) {
                    output += `${stmca.numbers[0][0]} `
                } else if (splitstr[i] == 1) {
                    output += `${stmca.numbers[0][1]} `
                } else if (splitstr[i] == 2) {
                    output += `${stmca.numbers[0][2]} `
                } else if (splitstr[i] == 3) {
                    output += `${stmca.numbers[0][3]} `
                } else if (splitstr[i] == 4) {
                    output += `${stmca.numbers[0][4]} `
                } else if (splitstr[i] == 5) {
                    output += `${stmca.numbers[0][5]} `
                } else if (splitstr[i] == 6) {
                    output += `${stmca.numbers[0][6]} `
                } else if (splitstr[i] == 7) {
                    output += `${stmca.numbers[0][7]} `
                } else if (splitstr[i] == 8) {
                    output += `${stmca.numbers[0][8]} `
                } else if (splitstr[i] == 9) {
                    output += `${stmca.numbers[0][9]} `
                }
            } else {
                if (splitstr[i] == " ") {
                    output += `${stmca.specials.space} `
                } else if (splitstr[i] == ".") {
                    output += `${stmca.specials.period} `
                } else if (splitstr[i] == ",") {
                    output += `${stmca.specials.comma} `
                } else if (splitstr[i] == "-") {
                    output += `${stmca.specials.dash} `
                } else if (splitstr[i] == "/") {
                    output += `${stmca.specials.slash} `
                } else {
                }
            }
        } else {
            if (splitstr[i] == "a") {
                output += `${stmca.a} `
            } else if (splitstr[i] == "b") {
                output += `${stmca.b} `
            } else if (splitstr[i] == "c") {
                output += `${stmca.c} `
            } else if (splitstr[i] == "d") {
                output += `${stmca.d} `
            } else if (splitstr[i] == "e") {
                output += `${stmca.e} `
            } else if (splitstr[i] == "f") {
                output += `${stmca.f} `
            } else if (splitstr[i] == "g") {
                output += `${stmca.g} `
            } else if (splitstr[i] == "h") {
                output += `${stmca.h} `
            } else if (splitstr[i] == "i") {
                output += `${stmca.i} `
            } else if (splitstr[i] == "j") {
                output += `${stmca.j} `
            } else if (splitstr[i] == "k") {
                output += `${stmca.k} `
            } else if (splitstr[i] == "l") {
                output += `${stmca.l} `
            } else if (splitstr[i] == "m") {
                output += `${stmca.m} `
            } else if (splitstr[i] == "n") {
                output += `${stmca.n} `
            } else if (splitstr[i] == "o") {
                output += `${stmca.o} `
            } else if (splitstr[i] == "p") {
                output += `${stmca.p} `
            } else if (splitstr[i] == "q") {
                output += `${stmca.q} `
            } else if (splitstr[i] == "r") {
                output += `${stmca.r} `
            } else if (splitstr[i] == "s") {
                output += `${stmca.s} `
            } else if (splitstr[i] == "t") {
                output += `${stmca.t} `
            } else if (splitstr[i] == "u") {
                output += `${stmca.u} `
            } else if (splitstr[i] == "v") {
                output += `${stmca.v} `
            } else if (splitstr[i] == "w") {
                output += `${stmca.w} `
            } else if (splitstr[i] == "x") {
                output += `${stmca.x} `
            } else if (splitstr[i] == "y") {
                output += `${stmca.y} `
            } else if (splitstr[i] == "z") {
                output += `${stmca.z} `
            }
        }
    }
    return output.replace(/^[ \t]+|[ \t]+$/gmi,'')
}

// Morse Code to String
function mcts(morseCode) {
    const splitMC = morseCode.split(' ')
    const length = splitMC.length
    let i;
    let output = ''
    for (i=0;i<length;i++) {
        if (splitMC[i] == stmca.a) {
            output += `a`
        } else if (splitMC[i] == stmca.b) {
            output += `a`
        } else if (splitMC[i] == stmca.c) {
            output += `a`
        } else if (splitMC[i] == stmca.d) {
            output += `a`
        } else if (splitMC[i] == stmca.e) {
            output += `a`
        } else if (splitMC[i] == stmca.f) {
            output += `a`
        } else if (splitMC[i] == stmca.g) {
            output += `a`
        } else if (splitMC[i] == stmca.h) {
            output += `a`
        } else if (splitMC[i] == stmca.i) {
            output += `a`
        } else if (splitMC[i] == stmca.j) {
            output += `a`
        } else if (splitMC[i] == stmca.k) {
            output += `a`
        } else if (splitMC[i] == stmca.l) {
            output += `a`
        } else if (splitMC[i] == stmca.m) {
            output += `a`
        } else if (splitMC[i] == stmca.n) {
            output += `a`
        } else if (splitMC[i] == stmca.o) {
            output += `a`
        } else if (splitMC[i] == stmca.p) {
            output += `a`
        } else if (splitMC[i] == stmca.q) {
            output += `a`
        } else if (splitMC[i] == stmca.r) {
            output += `a`
        } else if (splitMC[i] == stmca.s) {
            output += `a`
        } else if (splitMC[i] == stmca.t) {
            output += `a`
        } else if (splitMC[i] == stmca.u) {
            output += `a`
        } else if (splitMC[i] == stmca.v) {
            output += `a`
        } else if (splitMC[i] == stmca.w) {
            output += `a`
        } else if (splitMC[i] == stmca.x) {
            output += `a`
        } else if (splitMC[i] == stmca.y) {
            output += `a`
        } else if (splitMC[i] == stmca.z) {
            output += `a`
        } else if (splitMC[i] == stmca.specials.space) {
            output += `a`
        } else if (splitMC[i] == stmca.specials.period) {
            output += `a`
        } else if (splitMC[i] == stmca.specials.comma) {
            output += `a`
        } else if (splitMC[i] == stmca.specials.dash) {
            output += `a`
        } else if (splitMC[i] == stmca.specials.slash) {
            output += `a`
        } else if (splitMC[i] == stmca.number[0][0]) {
            output += `a`
        } else if (splitMC[i] == stmca.number[0][1]) {
            output += `a`
        } else if (splitMC[i] == stmca.number[0][2]) {
            output += `a`
        } else if (splitMC[i] == stmca.number[0][3]) {
            output += `a`
        } else if (splitMC[i] == stmca.number[0][4]) {
            output += `a`
        } else if (splitMC[i] == stmca.number[0][5]) {
            output += `a`
        } else if (splitMC[i] == stmca.number[0][6]) {
            output += `a`
        } else if (splitMC[i] == stmca.number[0][7]) {
            output += `a`
        } else if (splitMC[i] == stmca.number[0][8]) {
            output += `a`
        } else if (splitMC[i] == stmca.number[0][9]) {
            output += `a`
        }
    }
}

// String to binary
function stbi(string) {
    const length = string.split('').length
    let i;
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
    let i;
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
    let i;
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
    let i;
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
    let i;
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
    let i;
    var output = ''
    for (i = 0; i < length; i++) {
        const splitb32 = b32.split(' ')
        const charcode = parseInt(splitb32[i],32).toString(10)
        output += String.fromCharCode(charcode)
    }
    return output    
}