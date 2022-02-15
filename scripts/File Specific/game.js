class Counter {
    constructor() {
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
}

//Document Vars
var typing = document.getElementById("typing");
var clicking = document.getElementById("clicking");
var tc = document.getElementById("type_counter");
var cc = document.getElementById("click_counter");
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
let element1 = document.getElementById("text_input");
document.onkeypress = function () {
    element1.dispatchEvent(
        new KeyboardEvent("keypress", {
            key: "a"
        })
    );
};
//Full Click Area
let element2 = document.getElementById("clicker_button");
document.onclick = function () {
    element2.dispatchEvent(new MouseEvent("click"));
};

document.body.style.cursor = "auto";

const x = new Counter();  