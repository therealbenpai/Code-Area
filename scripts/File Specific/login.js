// User Class

class lUser {
    constructor(x,y) {
        this.un = x
        this.pw = y
    }
}

// Grabs the login
function pullLogin() {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const rmsl = document.getElementById('rmsl')
    var rmslb;
    if (rmsl.checked == true) {
        rmslb = true
    } else if (rmsl.checked == false) {
        rmslb = false
    } else {
        alert("slider error")
    }
    var psws = password.toString()
    var pswsplit = psws.split('')
    var forc = 0;
    for (forc = 0; forc < pswsplit.length; forc++) {
        const cc = psws.charCodeAt(forc)
        pswsplit[forc] = cc
    }
    var finishedpsw = pswsplit.join('.')
    var epsw = btoa(finishedpsw)
    if (rmslb == true) {
        localStorage.setItem('un',username)
        localStorage.setItem('epsw',epsw)
        let LoggedInUser = new lUser(username,epsw)
    } else {
        let LoggedInUser = new lUser(username,epsw)
    }
}