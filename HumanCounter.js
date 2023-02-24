let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0


// increases the nuber by one
function increment() {
    count += 1
    countEl.textContent = count
}


// decreases the number by one
function decrement(){
    count -= 1
    countEl.textContent = count
}


// saves the the number displayed on the attendance with a dash
// then restarts the counter by zero again
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
