//@ts-nocheck

function add() {
    let counter = document.getElementById("counter");
    count++;
    counter.innerText = count;
}

function remove() {
    if (count < 1) return;
    let counter = document.getElementById("counter");
    count--;
    counter.innerText = count;
}

let count = 0;

let addBtn = document.getElementById("add-button");
let removeBtn = document.getElementById("delete-button");

addBtn.ontouchstart = function (e) {
    e.preventDefault();
    add();
}

addBtn.onclick = function (e) {
    e.preventDefault();
    add();
}

addBtn.ontouchmove = function (e) {
    e.preventDefault();
}

addBtn.ontouchend = function (e) {
    e.preventDefault();
}

removeBtn.ontouchstart = function (e) {
    e.preventDefault();
    remove();
}

removeBtn.onclick = function (e) {
    e.preventDefault();
    remove();
}

removeBtn.ontouchmove = function (e) {
    e.preventDefault();
}

removeBtn.ontouchend = function (e) {
    e.preventDefault();
}