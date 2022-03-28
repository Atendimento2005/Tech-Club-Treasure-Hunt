document.addEventListener("keydown", function (event) {
    if (event.ctrlKey) {
        event.preventDefault()
    }   
})

document.addEventListener("contextmenu", (event) => {
    event.preventDefault()
}, false)