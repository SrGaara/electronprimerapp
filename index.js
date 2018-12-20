const remote = require('electron').remote

const main = remote.require('./main.js')

let button = document.createElement('button')

button.textContent = "open new window"
document.body.appendChild(button)
button .addEventListener('click', () =>{
    main.openWindow()
})