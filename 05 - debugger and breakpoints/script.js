const numberInputValue = document.querySelector(".number-input").value
const submitBtn = document.querySelector(".submit-btn")
const enteredNumber = document.querySelector(".entered-number")

submitBtn.addEventListener("click", () => {
    enteredNumber.textContent = numberInputValue
})
