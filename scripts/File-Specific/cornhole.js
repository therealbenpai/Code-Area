class Player {
    constructor(name) {
        this.gamePoints = 0;
        this.roundPoints = 0;
        this.startThrows = 4;
        this.throwsRemain = 0;
        this.throwsUsed = 0;
        this.roundsPlayed = 0;
        this.stats = [0, 0, 0] // board:hole:miss
        this.properStart = false;
        this.name = (name || "Player")
        this.bustRulesEnabled = false;
        this.goalScore = 21
        this.bustScore = 15
        this.changed = 0
    }
    landBoard() {
        if (!this.properStart) return console.error(ReferenceError("This player hasn't been setup properly"))
        if (this.throwsRemain < 1) {
            return console.error(RangeError("No throws remaining"))
        }
        this.roundPoints += 1
        this.throwsUsed += 1
        this.throwsRemain -= 1
        this.stats = [this.stats[0] + 1, this.stats[1], this.stats[2]]
    }
    landHole() {
        if (this.throwsRemain < 1) {
            return console.error(RangeError("No throws remaining"))
        }
        this.roundPoints += 3
        this.throwsUsed += 1
        this.throwsRemain -= 1
        this.stats = [this.stats[0], this.stats[1] + 1, this.stats[2]]
    }
    slideHole() {
        if (this.throwsUsed < 1 || this.changed >= this.throwsUsed) return
        this.roundPoints += 2
        this.changed += 1
    }
    slideOff() {
        if (this.throwsUsed < 1 || this.changed >= this.throwsUsed) return
        this.roundPoints -= 1
        this.changed += 1
    }
    miss() {
        if (this.throwsRemain < 1) {
            return console.error(RangeError("No throws remaining"))
        }
        this.throwsUsed++
        this.throwsRemain--
        this.stats = [this.stats[0], this.stats[1], this.stats[2]++]
    }
    endRound() {
        this.roundsPlayed++
        this.throwsUsed = 0;
    }
    startRound() {
        this.roundPoints = 0;
        this.changed = 0;
        this.throwsRemain = this.startThrows
    }
    start() {
        this.properStart = true
        this.roundsPlayed = 1;
    }
    changeStartThrow(amount) {
        this.startThrows = amount
    }
    enableBust() {
        if (this.bustRulesEnabled) return console.error(ReferenceError("Bust was already enabled"))
        this.bustRulesEnabled = true
    }
    disableBust() {
        if (!this.bustRulesEnabled) return console.error(ReferenceError("Bust was already disabled"))
        this.bustRulesEnabled = false
    }
    changeBustScore(amount) {
        if (!this.bustRulesEnabled) return console.error(ReferenceError("Bust must be enabled"))
        this.bustScore = amount
    }
    changeWinScore(amount) {
        this.goalScore = amount
    }
    addGameScore(score) {
        this.gamePoints = this.gamePoints + score
        this.roundPoints = 0
        if (this.bustRulesEnabled && this.gamePoints > this.goalScore) {
            this.bust()
        }
    }
    bust() {
        this.gamePoints = this.bustScore
    }
}

class Game {
    constructor() { }
    static calcScore(p1s, p2s) {
        p1s = Number(p1s)
        p2s = Number(p2s)
        let esa = [0, 0]
        const diff = p1s - p2s
        if (diff < 0) {
            esa = [0, Math.abs(diff)]
        } else if (diff > 0) {
            esa = [Math.abs(diff), 0]
        } else if (diff == 0) {
            esa = [0, 0]
        }
        return esa
    }
}

const player1 = new Player("Player 1")
const player2 = new Player("Player 2")

function giveScore() {
    player1.endRound()
    player2.endRound()
    const pt = Game.calcScore(player1.roundPoints, player2.roundPoints)
    player1.addGameScore(pt[0])
    player2.addGameScore(pt[1])
}

function submit() {
    giveScore()
    quickDOMEdit.area1GS(player1.gamePoints)
    quickDOMEdit.area2GS(player2.gamePoints)
    quickDOMEdit.area1RS(player1.roundPoints)
    quickDOMEdit.area2RS(player2.roundPoints)
    player1.startRound()
    player2.startRound()
}

function gameEvent(player, eventID) {
    switch (player) {
        case 1:
            switch (eventID) {
                case 1:
                    player1.landBoard()
                    quickDOMEdit.area1RS(player1.roundPoints)
                    break
                case 2:
                    player1.landHole()
                    quickDOMEdit.area1RS(player1.roundPoints)
                    break
                case 3:
                    player1.slideHole()
                    quickDOMEdit.area1RS(player1.roundPoints)
                    break
                case 4:
                    player1.slideOff()
                    quickDOMEdit.area1RS(player1.roundPoints)
                    break
                case 5:
                    player1.miss()
                    quickDOMEdit.area1RS(player1.roundPoints)
                    break
                default:
                    throw TypeError("invalid Game Event ID")
                    break
            }
            break
        case 2:
            switch (eventID) {
                case 1:
                    player2.landBoard()
                    quickDOMEdit.area2RS(player2.roundPoints)
                    break
                case 2:
                    player2.landHole()
                    quickDOMEdit.area2RS(player2.roundPoints)
                    break
                case 3:
                    player2.slideHole()
                    quickDOMEdit.area2RS(player2.roundPoints)
                    break
                case 4:
                    player2.slideOff()
                    quickDOMEdit.area2RS(player2.roundPoints)
                    break
                case 5:
                    player2.miss()
                    quickDOMEdit.area2RS(player2.roundPoints)
                    break
                default:
                    throw TypeError("invalid Game Event ID")
                    break
            }
            break
        default:
            throw TypeError("invalid player")
    }
}

class quickDOMEdit {
    static area1RS(data) {
        const ele = document.getElementById("rs1")
        ele.innerText = data
    }
    static area2RS(data) {
        const ele = document.getElementById("rs2")
        ele.innerText = data
    }
    static area1GS(data) {
        const ele = document.getElementById("gs1")
        ele.innerText = data
    }
    static area2GS(data) {
        const ele = document.getElementById("gs2")
        ele.innerText = data
    }
}

function searchCheck() {
    if (location.search.includes("bust=true") || location.search.includes("bust=1")) return true
    return false
}

function setup() {
    if (searchCheck()) {
        player1.enableBust()
        player2.enableBust()
    }
    player1.start()
    player1.startRound()
    player2.start()
    player2.startRound()
}