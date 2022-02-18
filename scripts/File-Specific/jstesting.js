class PageFunctions {
    static ft() {
        const uspf = function() {
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
        localStorage.setItem('kpsw',hashed.toString())
    }
    static signin() {
        const uepf = function() {
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

const start = function() {
    let r;
    if (typeof localStorage.getItem('kpsw') !== "string") {
        PageFunctions.ft()
        r = true
    } else {
        r = PageFunctions.signin()
    }
    if (r == true) {
        document.body.style.visibility = 'visible'
    } else if (r == false) {
        alert("password incorrect")
        start()
    } else {
        throw new Error("Error in start logic step one")
    }
}