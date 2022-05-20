let timesPerSecond = 8
let wait = false

const watchSection = document.querySelector(".art-section")
watchSection.addEventListener('click', e => {
    
    let x, y
    y = (e.offsetX / watchSection.offsetWidth * 90) + (-45)
    x = 15 - (e.offsetY / watchSection.offsetHeight * 30)
    look(x,y)
} )

watchSection.addEventListener('mousemove', e => {
    if(!wait) {
        let x, y
        y = (e.offsetX / watchSection.offsetWidth * 90) + (-45)
        x = 15 - (e.offsetY / watchSection.offsetHeight * 30)
        look(x, y)
        wait = true
        setTimeout( () => {
            wait = false
        }, 1000 / timesPerSecond)
    }
})

function look(x, y){
    document.documentElement.style.setProperty('--eyesX', x)
    document.documentElement.style.setProperty('--eyesY', y)
}
