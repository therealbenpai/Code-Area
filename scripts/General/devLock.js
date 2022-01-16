function passwd() {
    const sul = localStorage.getItem('drm')
    if (sul == true) {
        document.body.style.visibility = 'visible'
    } else {
        const passwd = prompt('Developer Password:')
        const epsw = atob('ZGV2cHN3')
        if (passwd == epsw) {
            const rm = confirm('Remeber Login (\'Ok\' = True, \'Cancel\' = False)')
            if (rm == true) {
                localStorage.setItem('drm', 'true')
            }
            document.body.style.visibility = 'visible'
        } else {
            alert('Bad Password')
            console.error('Bad Password entered. password: ' + passwd)
        }
    }
}

document.body.onload(() => passwd())