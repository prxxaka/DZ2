const box = document.querySelector('.box')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX <= 450 && positionY <= 0) {
        positionX+=1
        box.style.left = `${positionX}px`
        setTimeout(move, 2)
    } else if (positionX >= 450 && positionY <= 450) {
        positionY+=1
        box.style.top = `${positionY}px`
        setTimeout(move, 2)
    }else if (positionY >= 450 && positionX >=0){
        positionX-=1
        box.style.left = `${positionX}px`
        setTimeout(move, 2)
    }else if (positionX <= 0 && positionY >= 0){
        positionY-=1
        box.style.top = `${positionY}px`
        setTimeout(move, 2)
    }
}
move()

const counter = document.querySelector('.counter')
const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')

let counterInterval
function start(){
    counterInterval = setInterval(() => {
        counter.innerHTML++
    }, 100)
}

function stop(){
    clearInterval(counterInterval)
}
startBtn.addEventListener('click', start)
stopBtn.addEventListener('click', stop)