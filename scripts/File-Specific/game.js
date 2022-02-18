// Typing Elements
const typing = document.getElementById("typing");
const tc = document.getElementById("type_counter");
const kpse = document.getElementById("kps")
const element1 = document.getElementById("text_input");

// Clicking Elements
const clicking = document.getElementById("clicking");
const cc = document.getElementById("click_counter");
const cpse = document.getElementById("cps")
const element2 = document.getElementById("clicker_button");

class Counter {
    #st
    constructor() {
        this.#st = Date.now()
        this.vcr = 0;
        this.ti = 0;
        this.tia = this.ti;
        this.ci = 0;
        this.cia = this.ci;
    }
    addMouseHit() {
        var cr = this.vcrCheck();
        if (cr == true) {
            return;
        } else {
            if (this.cia == this.ci && this.ci == this.cia) {
                this.ci++;
                cc.innerHTML = this.ci;
                this.cia = this.ci;
                return this.cia;
            } else {
                this.ci = Number(cc.innerText);
                this.cia = Number(cc.innerText);
                console.error("Anti-Cheat Triggered ( Reason=clicking var boosting)");
                this.vcr++;
                this.vcrCheck();
            }
        }
    }
    addKeyHit() {
        var cr = this.vcrCheck();
        if (cr == true) {
            return;
        } else {
            if (this.tia == this.ti && this.ti == this.tia) {
                this.ti++;
                tc.innerHTML = this.ti;
                this.tia = this.ti;
                return this.tia;
            } else {
                this.ti = Number(tc.innerText);
                this.tia = Number(tc.innerText);
                console.error("Anti-Cheat Triggered (Reason = typing var boosting)");
                this.vcr++;
                this.vcrCheck();
            }
        }
    }
    vcrCheck() {
        if (this.vcr >= 2) {
            console.error(lockmsg);
            window.alert(lockmsg);
            quickText("LOCKED");
            quickRemoveEL();
            return true;
        } else {
            return false;
        }
    }
    xPerSecond() {
        const now = Date.now()
        const msDiff = now - this.#st
        const sDiff = msDiff/1000
        const fs = String(sDiff).split('.')
        const ss = fs[1].split('')
        const fsDiff = Number(`${fs[0]}.${ss[0]}`)
        const array = [
            msDiff,sDiff,fsDiff
        ]
        return array
    }
    keysPerSecond() {
        const data = this.xPerSecond()
        const kps1 = `${(this.ti / data[1])}`
        const kps2 = kps1.split('.')
        const kps3 = `${kps2[0]}.${kps2[1].charAt(0)}`
        return kps3
    }
    clicksPerSecond() {
        const data = this.xPerSecond()
        const cps1 = `${(this.ci / data[1])}`
        const cps2 = cps1.split('.')
        const cps3 = `${cps2[0]}.${cps2[1].charAt(0)}`
        return cps3
    }
}

//Message Var
const lockmsg = "Counters Disabled (Reason=Too many violations developing from Anti-Cheat System)";
//Anti-Right Click
window.oncontextmenu = function () {
    return false;
};
//Anti-Cheat Function Vars
var quickText = function (e) {
    cc.innerHTML = e;
    tc.innerHTML = e;
};
var quickRemoveEL = function () {
    document.body.style.cursor = "not-allowed";
    document.getElementById("text_input").disabled = true;
    document.onkeypress = function () {};
    document.getElementById("clicker_button").disabled = true;
    document.onclick = function () {};
};
//Full Text Area
document.onkeypress = function () {
    element1.dispatchEvent(
        new KeyboardEvent("keypress", {
            key: "a"
        })
    );
};
//Full Click Area
document.onclick = function () {
    element2.dispatchEvent(new MouseEvent("click"));
};

document.body.style.cursor = "auto";

const x = new Counter();

let ci;

setTimeout(ci = setInterval(function() {kpse.innerText = x.keysPerSecond(); cpse.innerText = x.clicksPerSecond()}, 125),1000)