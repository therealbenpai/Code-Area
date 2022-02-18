async function redir() {
    document.getElementById("redir").innerText = 'Redirecting...'
    const currentHref = location.origin
    location.href = `${currentHref}/Code-Area/html/index.html`
}

async function sessionSetup() {
    localStorage.setItem('LocalUUID',crypto.randomUUID())
    sessionStorage.setItem('SessionStart',Date.now())
}

setTimeout(_ => {sessionSetup();redir()},1500)