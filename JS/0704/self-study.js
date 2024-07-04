document.addEventListener("DOMContentLoaded",() => {
    const btn = document.querySelector("#btn")
    // on系列，函式會被後者蓋掉

    btn.onclick = function(){
        console.log("1")
    }
    btn.onclick = function(){
        console.log("2")
    }
    const clickMe=function (){
        console.log("被按了")
    }
    const clickMe2=function (){
        console.log("被按了2")
    }

    const clickMe3=function (){
        console.log("被按了3")
    }
    // addEventListener系列，函式會疊加
    btn.addEventListener("click",clickMe)
    btn.addEventListener("click",clickMe2)


    // preventDefault()
    const link =document.querySelector("#link")
    link.addEventListener("click",(e) => {
        e.preventDefault()
        console.log("Goole")
    })
    // 動態地去新增DOM元素，在子層新增
    const hello = document.querySelector(".Hello")
    const h = document.createElement("h1")
    h.textContent = "Hi"
    hello.appendChild(h)

    //動態地刪除元素
    const remove = document.querySelector("#removeBtn")
    remove.addEventListener("click",() => {        
        const lastOne = document.querySelector("li:last-child")
        // 取得父層:lastOne.parentElement
        const u = document.querySelector("ul")
        if(lastOne){
            // u.removeChild(lastOne)
            lastOne.remove()
        }
    })
    
    const ul = document.querySelector("ul")
    // 取得子層
    console.log(ul.children)
    // 取得兄弟層(前一個:previousElementSibling)(下一個:nextElementSibling)    
    console.log(ul.previousElementSibling)

})


const cat = {
    name:"Amy",
    age:18,
}
// 解構
const {name:username,age} = cat
console.log(username)
// "..." : 把陣列展開
const A = ["1","2","3"]
const B = ["a","b","c"]
console.log([A,...B])