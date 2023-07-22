const quote = document.querySelector(".quote")
const generateBtn = document.querySelector(".generate-btn")

generateBtn.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advices")
    .then(response => response.json())
    .then(data => {
        quote.textContent = data
    })
})
