// Functions

// Classes
class Util {
    constructor() {
        this.time = this.getTime()
        this.date = this.getDate()
        this.fullDate = this.getFullDate()
    }
    getTime() {
        const datemod = new Date()
        const time = datemod.toLocaleTimeString(
            'en-US',
            {
                timeZone: 'EST'
            }
        )
        return time
    }
    getDate() {
        const datemod = new Date();
        const date = datemod.toLocaleDateString(
            'en-US',
            {
                timeZone: 'EST',
                year: "2-digit",
                month: "2-digit",
                day: "2-digit"
            }
        )
        return date;
    }
    getFullDate() {
        const date = this.getDate()
        const time = this.getTime()
        return `${date} ${time}`
    }
    writeClipboard(index) {
        const writeables = [
            "",
            "",
            "",
            "",
            ""
        ]
        if (index > writeables.length) {
            return new Error("Failed To Write: Invalid Index")
        } else {
            return navigator.clipboard.writeText(writeables[index - 1])
        }
    }
}

const domUtil = new Util()