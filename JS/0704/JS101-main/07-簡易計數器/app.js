// 程式碼寫在這裡
document.addEventListener("DOMContentLoaded",() => {
    const plusBtn = document.querySelector("#plus")
    const minusBtn = document.querySelector("#minus")
    const counter = document.querySelector("#counter")

    plusBtn.addEventListener("click",() => {
        counter.value = parseInt(counter.value) + 1 
    })
    minusBtn.addEventListener("click",() => {
        if (parseInt(counter.value) > 0){
            counter.value = parseInt(counter.value) - 1
        }
    })
})