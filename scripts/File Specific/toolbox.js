// Vars
const w1 = ""
const w2 = ""
const w3 = ""
const w4 = ""
const w5 = ""

// Functions
class Util {
    constructor() {
        this.currentText = navigator.clipboard.readText().then(data => {return data}),
        this.current = navigator.clipboard.read().then(data => {return data;})
        this.time = this.getTime()
        this.date = this.getDate()
        this.fullDate = this.getFullDate()
    }
    getTime() {
        const datemod = new Date()
        const time = datemod.toLocaleTimeString('en-US', { timeZone: 'EST' })
        return time
    }
    getDate() {
        const datemod = new Date();
        const date = datemod.toLocaleDateString('en-US', { timeZone: 'EST', year: "2-digit", month: "2-digit", day: "2-digit" })
        return date;
    }
    getFullDate() {
        const date = this.getDate()
        const time = this.getTime()
        return `${date} ${time}`
    }
    readClipboard() {
        return navigator.clipboard.read()
    }
    writeClipboard(information) {
        return navigator.clipboard.write(information)
    }
}

const x = new Util()