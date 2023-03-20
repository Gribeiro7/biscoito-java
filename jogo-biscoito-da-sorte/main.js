const btnTry = document.querySelector("#btn1")
const btnReset = document.querySelector("#btn2")
const mainFirst = document.querySelector(".main-first")
const mainSecond = document.querySelector(".main-second")

let phrase = [
    "Não importa que você vá devagar, contanto que você não pare.",
    "Descubra quem é você, e seja essa pessoa. A sua alma foi colocada nesse mundo para ser isso, então viva essa verdade e todo resto virá.",
    "Não é a carga que o derruba, mas a maneira como você a carrega.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
]

function handleTryClick() {
    toggleScreen() 
    document.querySelector("#p2").innerText = `${phrase[Math.floor (Math.random() * 4)]}`
}

function toggleScreen() {
    mainFirst.classList.toggle("hide")
    mainSecond.classList.toggle("hide")
}

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleTryClick)