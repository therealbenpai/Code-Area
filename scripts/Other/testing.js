/**
 * @description Attempts To Login
 */
let check = function (x) {
    const passwordField = document.getElementById("psw").value
    const md5hash = "5729bd72fab93f0e443b0dcbc8186c60";
    const pswfieldhash = CryptoJS.MD5(passwordField)
    if (pswfieldhash == md5hash || x) {
        document.getElementById("login").remove()
        document.getElementById("blocker").remove()
        document.onkeydown = void function (e) { }
        document.oncontextmenu = void function (e) { }
        setup = void function () { }
        check = void function () { }
    } else {
        document.getElementById('pswCheck').removeAttribute('ch')
    }
}

let setup = function () {
    if (sessionStorage.getItem('key') == "passwordKey-020281ytraps:6169209715") {
        check(true)
        return;
    }
    document.onkeydown = function (e) {
        if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
            //? prevents devtools
            e.preventDefault()
        }
    }
    document.getElementById("psw").onkeydown = function (e) {
        if (e.keyCode == 13) {
            check()
            return;
        }
        if (!document.getElementById("pswCheck").hasAttribute('ch')) {
            document.getElementById("pswCheck").setAttribute('ch', "")
            return;
        }
    }
    document.oncontextmenu = function (e) {
        // e.preventDefault()
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
        if (length < 1 || isNaN(length)) return console.error(TypeError('length isn\'t valid'))
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
    * @returns {void}
    **/
    static collatz(sn, mi) {
        if (sn <= 0) throw new Error('Starting Number must be greater than 0');
        // fmi = Formated Max Iterations
        // it = Iterations
        // f = Finished
        // mn = Max Number
        // mnp = Max Number Index
        let [fmi, it, f, mn, mnp] = [0, 0, undefined, sn, 1]
        if (!mi) {
            fmi = 1000;
        } else {
            fmi = mi;
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
                mnp++
            }
            // Stops the script once the program has reached the number 4 (Loop begins here)
            if (sn == 4) {
                it = i;
                f = true;
                break;
            }
        }
        const results = {
            iterations: it + 1,
            maxNumber: mn,
            maxNumberIndex: mnp + 1,
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

/* ========== SPLITER ========== */

class cLogs {
    static errtagm = '%cERROR%c '
    static errtagd = 'color:red;border:1px solid red;border-radius:12px;font-size:11px;font-family:arial;background-color:rgba(255,0,0,0.2);padding: 0px 3px 0px 3px'
    static warntagm = '%cWARNING%c '
    static warntagd = 'color:darkorange;border:1px solid darkorange;border-radius:12px;font-size:11px;font-family:arial;background-color:rgba(255,140,0,0.2);padding: 0px 3px 0px 3px;'
    static suctagm = '%cSUCCESS%c '
    static suctagd = 'color:green;border:1px solid green;border-radius:12px;font-size:11px;font-family:arial;background-color:rgba(0,255,0,0.2);padding: 0px 3px 0px 3px;'
    static btagd = ''
    constructor() {
        this.defaults = {
            error: ["ERROR", "color:red;border:1px solid red;border-radius:12px;font-size:11px;font-family:arial;background-color:rgba(255,0,0,0.2);padding: 0px 3px 0px 3px"],
            warning: ["WARNING", "color:darkorange;border:1px solid darkorange;border-radius:12px;font-size:11px;font-family:arial;background-color:rgba(255,140,0,0.2);padding: 0px 3px 0px 3px;"],
            success: ["SUCCESS", "color:green;border:1px solid green;border-radius:12px;font-size:11px;font-family:arial;background-color:rgba(0,255,0,0.2);padding: 0px 3px 0px 3px;"]
        }
        this.cmethods = []
    }
    static error(msg) {
        return console.error(cLogs.errtagm + msg, cLogs.errtagd, cLogs.btagd)
    }
    static warn(msg) {
        return console.warn(cLogs.warntagm + msg, cLogs.warntagd, cLogs.btagd)
    }
    static success(msg) {
        return console.log(cLogs.suctagm + msg, cLogs.suctagd, cLogs.btagd)
    }
    static customTag(tagData) { //* Not Saveable
        if (Boolean(typeof tagData !== "object" & "undefined")) return console.error("Invalid Data")
        //! Default Values DO NOT TOUCH
        const defaults = {
            color: ["0","0","0","1"],
            borderColor: ["0","0","0","1"],
            background: ["0","0","0","0.2"],
            text: "Filler Text",
            logType: "log"
        }
        //! Formated Values DO NOT TOUCH
        const fvalues = {
            color: (tagData?.color || defaults.color),
            borderColor: (tagData?.borderColor || tagData?.color ||  defaults.borderColor),
            background: (tagData?.background || defaults.background),
            text: (tagData?.text || defaults.text),
            logType: (tagData?.logType || defaults.logType),
        }
        //! RGBA testing DO NOT TOUCH
        if (typeof fvalues.color !== "object" || fvalues.color.length !== 4) return console.error(new TypeError("Please enter a valid rgba array"))
        if (typeof fvalues.borderColor !== "object" || fvalues.borderColor.length !== 4) return console.error(new TypeError("Please enter a valid rgba array"))
        if (typeof fvalues.background !== "object" || fvalues.background.length !== 4) return console.error(new TypeError("Please enter a valid rgba array"))
        //! CSS Tag Interpalation DO NOT TOUCH
        const tagCSS = `color:rgba(${fvalues.color[0]},${fvalues.color[1]},${fvalues.color[2]},${fvalues.color[3]});border:1px solid rgba(${fvalues.borderColor[0]},${fvalues.borderColor[1]},${fvalues.borderColor[2]},${fvalues.borderColor[3]});border-radius:12px;font-size:11px;font-family:arial;background-color:rgba(${fvalues.background[0]},${fvalues.background[1]},${fvalues.background[2]},${fvalues.background[3]});padding: 0px 3px 0px 3px;`
        console.log(`Your method:\n%cconsole.${fvalues.logType}('%c${fvalues.text.toUpperCase()}%c ','${tagCSS}','')`,'font-weight:bolder;font-family:arial;')
        console.log('%cPreview: ','font-weight:bolder;font-family:arial;text-decoration:underline')
        //? Preview OPTIONAL
        const preview = new Function(`console.${fvalues.logType}('%c${fvalues.text.toUpperCase()}%c ','${tagCSS}','')`)
        preview()
    }
    error(msg) {
        return cLogs.error(msg)
    }
    warn(msg) {
        return cLogs.warn(msg)
    }
    success(msg) {
        return cLogs.success(msg)
    }
    makeTag(tagData) { //* Saveable
        if (Boolean(typeof tagData !== "object" & "undefined")) return console.error("Invalid Data")
        //! Default Values DO NOT TOUCH
        const defaults = {
            color: ["0","0","0","1"],
            borderColor: ["0","0","0","1"],
            background: ["0","0","0","0.2"],
            text: "Filler Text",
            logType: "log"
        }
        //! Formated Values DO NOT TOUCH
        const fvalues = {
            color: (tagData?.color || defaults.color),
            borderColor: (tagData?.borderColor || tagData?.color ||  defaults.borderColor),
            background: (tagData?.background || defaults.background),
            text: (tagData?.text || defaults.text),
            logType: (tagData?.logType || defaults.logType),
        }
        //! RGBA testing DO NOT TOUCH
        if (typeof fvalues.color !== "object" || fvalues.color.length !== 4) return console.error(new TypeError("Please enter a valid rgba array for 'color' value"))
        if (typeof fvalues.borderColor !== "object" || fvalues.borderColor.length !== 4) return console.error(new TypeError("Please enter a valid rgba array for 'borderColor' value"))
        if (typeof fvalues.background !== "object" || fvalues.background.length !== 4) return console.error(new TypeError("Please enter a valid rgba array for 'background' value"))
        //! CSS Tag Interpalation DO NOT TOUCH
        const tagCSS = `color:rgba(${fvalues.color[0]},${fvalues.color[1]},${fvalues.color[2]},${fvalues.color[3]});border:1px solid rgba(${fvalues.borderColor[0]},${fvalues.borderColor[1]},${fvalues.borderColor[2]},${fvalues.borderColor[3]});border-radius:12px;font-size:11px;font-family:arial;background-color:rgba(${fvalues.background[0]},${fvalues.background[1]},${fvalues.background[2]},${fvalues.background[3]});padding: 0px 3px 0px 3px;`
        const method = `console.${fvalues.logType}('%c${fvalues.text.toUpperCase()}%c ','${tagCSS}','')`
        //! Storage Method DO NOT TOUCH
        this.cmethods[this.cmethods.length] = method
        console.log(`Your method:\n%cconsole.${fvalues.logType}('%c${fvalues.text.toUpperCase()}%c ','${tagCSS}','')`,'font-weight:bolder;font-family:arial;')
        cLogs.success("Saved")
    }
    run(index) {
        try {
            const method = new Function(this.cmethods[index])
            method()
        } catch (err) {
            cLogs.error(err)
        }
    }
}