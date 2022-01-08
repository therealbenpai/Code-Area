// Sparty182020 JavaScript Code for Special Website Generation

/*
Usage: genwin(version:Number)
Verson key:
0 -> mouseMove Black and White Background Switch
1 -> Click Counter
2 -> Random Number
3 -> Random Name
4 -> Random Color
5 -> Blank
*/

// Window Generator Function
function genwin(version, width, height) {
    const varnum = 5
    version = parseInt(version)
    // Checks if the version is correct
    if (version < 0 || version > varnum) {
        return 'Bad Version'
    }
    if (width == undefined || width == null) {
        width = 300
    }
    if (height == undefined || height == null) {
        height = 300
    }
    var mindem = {
        0: [250, 250],
        1: [300, 100],
        2: [300, 100],
        3: [300, 100],
        4: [300, 100],
        5: [150, 150]
    }
    if (width >= mindem[version][0] && height >= mindem[version][1]) {
        // Vars
        var hiddenvar;
        var nw = window.open('', '', `height:500,width:500`)
        nw.resizeTo(width, height)
        var nwwrite = function (content) { nw.document.write(content) }
        const bodyareastyle = nw.document.body.style
        // Writes Styleing Function
        function writeStyles() {
            // Creates a 'close' button
            nwwrite('<br>\n<button onclick=window.close() id=\'button\'>Close The Window</button>')
            // DOM short vars
            const buttonElement = nw.document.getElementById('button')
            // Actual Styles
            bodyareastyle.fontFamily = 'Brush Script MT, cursive'
            buttonElement.style.background = 'linear-gradient(45deg,red,blue)'
            buttonElement.style.border = 'transparent'
            buttonElement.style.borderRadius = '16px'
            buttonElement.style.padding = '16px'
            buttonElement.style.margin = '8px'
        }
        // Finds the website version from list
        if (version == 0) {
            nwwrite('<h1>Move Your Mouse</h1>')
            var baw = function () {
                if (nw.document.body.style.backgroundColor == 'black') {
                    nw.document.body.style.backgroundColor = 'white'
                    nw.document.body.style.color = 'black'
                } else {
                    nw.document.body.style.backgroundColor = 'black'
                    nw.document.body.style.color = 'white'
                }
            }
            nw.document.onmousemove = hiddenvar => baw()
        } else if (version == 1) {
            nwwrite('<h1 id=\'counter\'>Counter = 0</h1>')
            var i = 0
            function incr() {
                i++
                return i
            }
            nw.document.onclick = function () {
                const counter = incr()
                nw.document.getElementById('counter').innerText = `Counter = ${counter}`
            }
        } else if (version == 2) {
            function randnum() {
                const num = Math.round(Math.random() * Math.pow(10, 6))
                nwwrite(`<h1>Your Number is: ${num}</h1>`)
            }
            randnum()
        } else if (version == 3) {
            function randname() {
                var name = ''
                const letters = Math.floor(Math.random() * 5) + 3
                for (var index = 0; index < letters; index++) {
                    const lettergen = (Math.floor(Math.random() * 22) + 10).toString(32)
                    name += lettergen
                }
                return name
            }
            nwwrite(`Your name is: ${randname()}\n`)
        } else if (version == 4) {
            function hgen() {
                const hex = `#${Math.floor(Math.random() * Math.pow(16, 6)).toString(16)}`
                return hex
            }
            const thex = hgen()
            nwwrite(`Your Color is: ${thex}`)
            nw.document.body.style.background = thex
        } else if (version == 5) {
            nwwrite('<span>Blank Page</span>')
        }
        // Writes The Styles
        writeStyles()
    } else {
        return 'Bad Size'
    }
}