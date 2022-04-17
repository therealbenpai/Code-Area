class PageFunctions {
    /**
     * @description First Time Login
     */
    static ft() {
        const uspf = function () {
            const v = prompt("Please Enter a Password:");
            if (v == null || v == undefined) {
                uspf()
            } else if (typeof v === "string") {
                return v;
            } else {
                throw new Error("Error in First-Time uspf Logic")
            }
        }
        let usp = uspf()
        const hashed = CryptoJS.MD5(usp)
        localStorage.setItem('kpsw', hashed.toString())
    }
    /**
     * @description Sign in a user
     */
    static signin() {
        const uepf = function () {
            const v = prompt("Please Enter Your Password:");
            if (v == null || v == undefined) {
                uepf()
            } else if (typeof v === "string") {
                return v;
            } else {
                throw new Error("Error in Sign-in uepf Logic")
            }
        }
        const uep = uepf()
        const hashed = CryptoJS.MD5(uep)
        const kpswe = localStorage.getItem('kpsw')
        try {
            if (kpswe == hashed.toString()) {
                return true
            } else {
                throw new Error("Incorrect Password")
            }
        } catch (e) {
            console.error(e)
            return false;
        }
    }
}
/**
 * @description Start login/signin process or signup process
 */
const start = function () {
    let r;
    if (typeof localStorage.getItem('kpsw') !== "string") {
        PageFunctions.ft()
        r = true
    } else {
        r = PageFunctions.signin()
    }
    if (r == true) {
        document.getElementById("blocker").style.visibility = 'hidden'
        document.getElementById("LockNotice").style.visibility = 'hidden'
    } else if (r == false) {
        alert("password incorrect")
        start()
    } else {
        throw new Error("Error in start logic step one")
    }
}

/* ========== SPLITER ========== */

class cFunction {
    static isDST(d) {
        const jan = new Date(d.getFullYear(), 0, 1).getTimezoneOffset()
        const jul = new Date(d.getFullYear(), 6, 1).getTimezoneOffset()
        return Math.max(jan, jul) !== d.getTimezoneOffset()
    }
    static getTime() {
        let datemod = new Date()
        const cdate = Date.now()
        let dst = isDST(datemod)
        if (dst === true) {
            datemod = new Date(cdate + (3600 * 1000))
            const time = datemod.toLocaleTimeString('en-US', { timeZone: 'EST', hour: '2-digit', minute: '2-digit', second: '2-digit' })
            return time
        } else {
            const time = datemod.toLocaleTimeString('en-US', { timeZone: 'EST', hour: '2-digit', minute: '2-digit', second: '2-digit' })
            return time
        }
    }
    static getDate() {
        let datemod = new Date()
        const cdate = Date.now()
        let dst = isDST(datemod)
        if (dst === true) {
            datemod = new Date(cdate + (3600 * 1000))
            const date = datemod.toLocaleDateString('en-US', { timeZone: 'EST', year: "2-digit", month: "2-digit", day: "2-digit" })
            return date;
        } else {
            const date = datemod.toLocaleDateString('en-US', { timeZone: 'EST', year: "2-digit", month: "2-digit", day: "2-digit" })
            return date;
        }
    }
    static getFullDate() {
        const date = this.getDate()
        const time = this.getTime()
        return `${date} ${time}`
    }
    static keyGen(length) {
        let key = 0
        for (let i = length; i > 0; i--) {
            key += (Math.round(Math.random() * 8) + 1) * Math.pow(10, i)
        }
        return key / 10
    }
    /** 
    * @description Runs the collatz conjecture using only vanilla Javascript code
    * @param {Number} sn Starting Number
    * @param {Number=} mi Max Iterations
    * @author Sparty182020
    * @returns {Console}
    **/
    static collatz(sn, mi) {
        if (sn <= 0) {
            throw new Error('Starting Number must be greater than 0')
        }
        // fmi = Formated Max Iterations
        let fmi = 0
        // it = Iterations
        let it = 0
        // f = Finished
        let f;
        // mn = Max Number
        let mn = sn
        // mnp = Max Number Index
        let mnp = 1
        if (mi != null || mi != undefined) {
            fmi = mi;
        } else {
            fmi = 1000;
        }
        for (let i = 0; i <= fmi; i++) {
            // Runs if max iterations have been reached
            if (i == fmi) {
                it = i
                f = false
                break
            }
            // Main Section
            if (sn % 2 == 1) {
                sn = (sn * 3) + 1;
            } else {
                sn = sn / 2;
            }
            // Statitistics
            if (sn > mn) {
                mn = sn
                mnp = i + 1
            }
            // Stops the script once the program has reached the number 4 (Loop begins here)
            if (sn == 4) {
                it = i;
                f = true;
                break;
            }
        }
        const results = {
            iterations: it,
            maxNumber: mn,
            maxNumberIndex: mnp,
            completed: f
        }
        switch (results.completed) {
            case true:
                return console.log(
                    `%cResults:\nIterations = ${results.iterations}\nHighest Number Reached = ${results.maxNumber}\nHighest Number Reached at Step #${results.maxNumberIndex}\nLoop started before function ended = %cTrue`
                    ,
                    'font-size:16px;text-decoration:underline;font-weight:700;color:blue'
                    ,
                    'font-size:16px;text-decoration:underline;font-weight:700;color:green'
                )
            case false:
                return console.log(
                    `%cResults:\nIterations = ${results.iterations}\nHighest Number Reached = ${results.maxNumber}\nHighest Number Reached at Step #${results.maxNumberIndex}\nLoop started before function ended = %cFalse`
                    ,
                    'font-size:16px;text-decoration:underline;font-weight:700;color:blue'
                    ,
                    'font-size:16px;text-decoration:underline;font-weight:700;color:red'
                )
        }
    }
}

class Key {
    constructor(length) {
        this.constructionTime = cFunction.getFullDate()
        this.key = cFunction.keyGen(length)
        this.keyLength = length
    }
}