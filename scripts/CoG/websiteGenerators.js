/**
* @copyright GNU GENERAL PUBLIC LICENSE (v3)
*/

/**
 * @description This function Generates a window using a required "version" value and an optional "width" and "height" value
 * @param {Number} version The window "version"
 * @param {Number=} width The width of the window
 * @param {Number=} height The height of the window
 * @param {Boolean=} fullscreen Fullscreen the window
 * @returns {Window} Window Object
 * @author sparty182020
 */
function genwin(version, fullscreen, width, height) {
    const varnum = 6
    version = parseInt(version)
    // Checks if the version is correct
    if (version <= 0 ||
        version > varnum
    ) {
        console.error(RangeError(`Bad Version\n\n Version must be between 0 and ${varnum}`))
        return;
    }
    if (isNaN(width)) {
        width = 300
    }
    if (isNaN(height)) {
        height = 300
    }
    var mindem = {
        1: [
            250,
            250
        ],
        2: [
            300,
            100
        ],
        3: [
            300,
            100
        ],
        4: [
            300,
            100
        ],
        5: [
            300,
            100
        ],
        6: [
            150,
            150
        ]
    }
    if (
        width < mindem[version][0] || // checks if the width is not valid
        height < mindem[version][1] // checks if the height is not valid
    ) {
        throw new RangeError("Dimensions value is invalid")
    }
    // Vars
    var hiddenvar;
    const nw = window.open('', '', `height:500,width:500`)
    nw.resizeTo(width, height)
    /**
    * @param {String} content Content of the window
    */
    const nwwrite = function (content) { nw.document.write(content) }
    const bodyareastyle = nw.document.body.style
    // Writes Styleing Function
    const writeStyles = function() {
        // Creates a 'close' button
        nwwrite('<br>\n<button id=\'button\'>Close The Window</button>')
        // DOM short vars
        const buttonElement = nw.document.getElementById('button')
        // Actual Styles
        bodyareastyle.fontFamily = 'Brush Script MT, cursive'
        buttonElement.style.background = 'linear-gradient(45deg,red,blue)'
        buttonElement.style.border = 'transparent'
        buttonElement.style.borderRadius = '16px'
        buttonElement.style.padding = '16px'
        buttonElement.style.margin = '8px'
        buttonElement.style.position = 'absolute'
        buttonElement.style.left = `50%`
        buttonElement.style.top = '50%'
        buttonElement.style.transform = 'translate(-50%,-50%)'
        buttonElement.onclick = void function() { nw.window.close() }
    }
    // Finds the website version from list
    switch (version) {
        case 1:
            // 1 -> mouseMove Black and White Background Switch
            nwwrite('<h1>Move Your Mouse</h1>')
            const baw = function () {
                if (nw.document.body.style.backgroundColor == 'black') {
                    nw.document.body.style.backgroundColor = 'white'
                    nw.document.body.style.color = 'black'
                } else {
                    nw.document.body.style.backgroundColor = 'black'
                    nw.document.body.style.color = 'white'
                }
            }
            nw.document.onmousemove = hiddenvar => baw()
            break
        case 2:
            // 2 -> Click Counter
            nwwrite('<h1 id=\'counter\'>Counter = 0</h1>')
            let i = 0
            function incr() {
                i++
                return i
            }
            nw.document.onclick = function () {
                const counter = incr()
                nw.document.getElementById('counter')
                    .innerText = `Counter = ${counter}`;
            }
            break
        case 3:
            // 3 -> Random Number
            const randnum = function() {
                const num = Math.round(
                    Math.random() * Math.pow(10, 6)
                );
                return num
            }
            nwwrite(`<h1>Your Number is: ${randnum()}</h1>`)
            break;
        case 4:
            // 4 -> Random Name
            const randname = function() {
                let name = ''
                const letters = Math.floor(
                    Math.random() * 5
                ) + 3;
                for (let i = 0; i < letters; i++) {
                    const lettergen = (
                        Math.floor(
                            Math.random() * 22
                        ) + 10
                    ).toString(32);
                    name += lettergen;
                }
                return name;
            }
            nwwrite(`Your name is: ${randname()}\n`);
            break;
        case 5:
            // 5 -> Random Color
            const hgen = function() {
                const hex = `#${Math.floor(Math.random() * Math.pow(16, 6)).toString(16)}`;
                return hex;
            }
            const thex = hgen();
            nwwrite(`Your Color is: ${thex}`);
            nw.document.body.style.background = thex;
            break;
        case 6:
            // 6 -> Blank
            nwwrite('<span>Blank Page</span>');
            break;
        default:
            throw new RangeError('Bad Version, but in the switch case statement');
    }
    // Writes The Styles
    writeStyles()
    if (fullscreen === true) {
        nwwrite(
            `<br>
            <button id='Fullscreen' onclick=nw.document.body.requestFullscreen()>Fullscreen the window</button>`
        )
        setTimeout(_ => {
            try {
                nw.document.getElementById('Fullscreen')
                    .dispatchEvent(
                        new MouseEvent('click')
                    )
            } catch (err) {
                console.log(err)
            }
        }, 1500)
    }
}
