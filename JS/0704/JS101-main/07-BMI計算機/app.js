// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方
document.addEventListener("DOMContentLoaded",() => {
    const height = document.querySelector("#bodyHeight")
    const weight = document.querySelector("#bodyWeight")
    const result = document.querySelector("#resultText")
    const btn = document.querySelector("button")

    btn.addEventListener("click",() => {
        const h = height.value/100
        const w = parseInt(weight.value)
        const bmi = w / (h*h)
        result.textContent = bmi.toFixed(2)
    })
})