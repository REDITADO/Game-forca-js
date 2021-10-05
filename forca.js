const words = [
    "stackoverflow","github","javascript","python","progrmacao","programador",
    "mysql","sql","nodejs","prototype","ecommerce","web developer"
]

const word=words[ Math.floor(Math.random()*words.length)]
let vida =5
let erros = 0
let pontos = 0
for(let i =0; i<word.length;i++){
    const line  = document.createElement("span")
    line.setAttribute("id","line")
    line.setAttribute("data-value",i)
    line.innerHTML="_"
    if(word[i]==" "){
        line.innerHTML ="-"

    }
    document.querySelector("#lineWord").appendChild(line)
    console.log(word)
}

const alfabeto = "abcdefghijklmnopqrstuvwxyz"
const simbols = "-/@# %*"
const letters = alfabeto.split('')
const simbolos = simbols.split('')

letters.forEach(letter=>{
    const button = document.createElement("button")
    button.addEventListener("click",letterSelected)
button.setAttribute("id","tecla")
button.setAttribute("class","letra")
button.setAttribute("value",letter)
button.innerHTML = letter.toUpperCase()
document.querySelector("#teclado").appendChild(button)
})

simbolos.forEach(s=>{
    const button = document.createElement("button")
    button.addEventListener("click",letterSelected)
button.setAttribute("id","tecla")
button.setAttribute("class","letra")
button.setAttribute("value",s)
button.innerHTML = s
if(s == " "){
    button.innerHTML = "space"
    button.setAttribute("id","space")
button.setAttribute("value",s) 
button.setAttribute("class","letra")
}
document.querySelector("#teclado").appendChild(button)
})

function letterSelected(e){
    const letter =e.target.value
    let right = false
    for(let j = 0;j<word.length;j++){
        if(letter==word[j]){
            right=true
        const line = document.querySelector(`span[data-value="${j}"]`)
            line.innerHTML = word[j].toUpperCase()
            e.target.classList.add("check")

            e.target.removeEventListener("click",letterSelected,false)
            pontos++
            
        }else if(!word.includes(letter)){
            e.target.classList.add("checkFail")
            console.log(word.includes(letter),letter)
            e.target.removeEventListener("click",letterSelected,false)
        }
    }
    if(!right  && vida>0){
     vida--
    }
    if(vida==0){
        document.querySelectorAll(".letra").forEach(element=>{
            element.disabled = true
        })
        alert("perdeu")
    }else if(pontos==word.length){
        alert("ganhou")
        document.querySelectorAll(".letra").forEach(element=>{
            element.disabled = true
        })
    }
    document.querySelector("#pontuacao").innerHTML = pontos
document.querySelector("#life").innerHTML = vida
}
