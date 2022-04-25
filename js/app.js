window.addEventListener("DOMContentLoaded", function () {
    let width = document.querySelector("#width"),
    height = document.querySelector("#height"),
    border = document.querySelector("#border"),
    color = document.querySelector("#color"),
    btn = document.querySelector("#btn"),
    item = document.querySelector("#item");

    btn.addEventListener("click", function() {
        item.style.width = `${width.value}px`
        item.style.height = `${height.value}px`
        item.style.borderWidth = `${border.value}px`
        item.style.background = `${color.value}`
    })
})