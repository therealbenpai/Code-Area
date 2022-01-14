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
    const splitstr = string.split('')
    const length = splitstr.length
    let i;
    let output
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

            } else if (splitstr[i] == "b") {

            } else if (splitstr[i] == "b") {

            } else if (splitstr[i] == "b") {

            } else if (splitstr[i] == "b") {

            } else if (splitstr[i] == "b") {

            } else if (splitstr[i] == "b") {

            } else if (splitstr[i] == "b") {

            } else if (splitstr[i] == "b") {

            } else if (splitstr[i] == "b") {

            } else if (splitstr[i] == "b") {

            } else if (splitstr[i] == "b") {

            } else if (splitstr[i] == "b") {

            } else if (splitstr[i] == "b") {

            } else if (splitstr[i] == "b") {

            } else if (splitstr[i] == "b") {

            } else if (splitstr[i] == "b") {

            } else if (splitstr[i] == "b") {

            } else if (splitstr[i] == "b") {

            } else if (splitstr[i] == "b") {

            } else if (splitstr[i] == "b") {

            } else if (splitstr[i] == "b") {

            } else if (splitstr[i] == "b") {

            }
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