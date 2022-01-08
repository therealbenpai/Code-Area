// Loop Function

function loop(method, info, times) {
    const testmethod = /(alert)|(console)|(prompt)|(confirm)/gmi
    if (testmethod.test(method) == true) {
        for (i = 0; i < parseInt(times); i++) {
            if (method == "alert") {
                alert(info)
                continue
            } else if (method == "console") {
                console.error(info)
                continue
            } else if (method == "prompt") {
                prompt(info, null)
                continue
            } else {
                confirm(info)
                continue
            }
        }
    }
}

// Testing if a number is devisible by another number

function checkdiv(x, y) {
    if (parseInt(x) % parseInt(y) == 0) {
        return true
    } else {
        return false
    }
}

// 3x+1 math problem

function specialMath(start, cap) {
    var index;
    var curval = parseInt(start)
    if (isNaN(cap) == true) {
        for (index = 0; index <= 1000; index++) {
            if (index === 1000) {
                return "error"
            } else {
                if (curval == 4) {
                    return index
                } else {
                    if (curval % 2 == 0) {
                        curval = curval / 2
                    } else {
                        curval = (3 * curval) + 1
                    }
                }
            }
        }
    } else {
        for (index = 0; index <= cap; index++) {
            if (index === cap) {
                return "error"
            } else {
                if (curval == 4) {
                    return index
                } else {
                    if (curval % 2 == 0) {
                        curval = curval / 2
                    } else {
                        curval = (3 * curval) + 1
                    }
                }
            }
        }
    }
}