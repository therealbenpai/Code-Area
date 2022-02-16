import Util from '../File-Specific/toolbox.js'

class Key {
    constructor() {
        this.constructionTime = new Util().getFullDate()
    }
}

const l4KeyGen = function () {
    return Math.ceil(Math.random() * 8) * 1000 + Math.ceil(Math.random() * 8) * 100 + Math.ceil(Math.random() * 8) * 10 + Math.ceil(Math.random() * 8)
}

function FDIDG(id) {
    let ev;
    if (id != null || id != undefined) {
        if (String(parseInt(id,10)).length != 4) {
            return console.error('ID needs to be 4 digits long')
        } else {
            ev = id
        }
    } else {
        ev = l4KeyGen()
    }
    for (let i = 0; i < 10000; i++) {
        let v = l4KeyGen()
        if (v == ev) {
            console.log(`id of ${ev} was found on iteration ${i}`)
            break;
        } else {
            console.log(v)
        }
    }
}

const collatz = function(sn,mi) {
    if (sn <= 0) {
        return console.error('Starting Number must be greater than 0')
    }
    let fmi = 0
    let it = 0
    let f;
    if (mi != null || mi != undefined) {
        fmi = mi;
    } else {
        // ?Defult Max Value
        fmi = 1000;
    }
    for (let i = 0; i < fmi; i++) {
        if (sn % 2 == 1) {
            sn = (sn * 3) + 1;
        } else {
            sn = sn / 2;
        }
        if (sn == 8) {
            it = i;
            f = true;
            break;
        }
    }
    return console.log(`%cRepeating starts at ${it} iterations`,'color: lightblue;')
}