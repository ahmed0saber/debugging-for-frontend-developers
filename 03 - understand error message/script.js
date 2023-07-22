const clickBtn = document.querySelector(".btnn")
let count = 0

clickBtn.addEventListener("click", () => {
    count = count + 1
    clickBtn.textContent = `${count} clicks`
})
