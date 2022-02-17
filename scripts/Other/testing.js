class cFunction {
    static getTime() {
        const datemod = new Date()
        const time = datemod.toLocaleTimeString(
            'en-US',
            {
                timeZone: 'EST'
            }
        )
        return time
    }
    static getDate() {
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
    static collatz(sn, mi) {
        // mi = Max Iterations
        // sn = Starting Number
        // fmi = Formated Max Iterations
        // f = Finished
        // it = Iterations
        if (sn <= 0) {
            throw new Error('Starting Number must be greater than 0')
        }
        let fmi = 0
        let it = 0
        let f;
        if (mi != null || mi != undefined) {
            fmi = mi;
        } else {
            fmi = 1000;
        }
        for (let i = 0; i < fmi; i++) {
            if (sn % 2 == 1) {
                sn = (sn * 3) + 1;
            } else {
                sn = sn / 2;
            }
            if (sn == 8) {
                it = i;
                f = true;
                break;
            }
        }
        console.log(`%cRepeating starts at ${it} iterations`, 'color: lightblue;')
        return;
    }
}

class Key {
    constructor(length) {
        this.constructionTime = cFunction.getFullDate()
        this.key = cFunction.keyGen(length)
        this.keyLength = length
    }
}