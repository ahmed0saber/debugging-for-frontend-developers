const clickBtn = document.querySelector(".btn")
let count = 0

clickBtn.addEventListener("click", () => {
    count = count + 1
    localStorage.setItem("counter", count)
    displayCount()
})

const getCountFromLocalStorage = () => {
    if (localStorage.getItem("count")) return JSON.parse(localStorage.getItem("count"))

    return 0
}

const displayCount = () => {
    clickBtn.textContent = `${count} clicks`
}

const init = () => {
    count = getCountFromLocalStorage()
    displayCount()
}
init()
