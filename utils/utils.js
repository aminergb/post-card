
const SPEED = 5
//this defines when the cactus is spawning between min and max
const CACTUS_INTERVAL_MIN = 2000
const CACTUS_INTERVAL_MAX = 10000
const worldElem = document.querySelector('.wavy-bg')
//the time of the next cactus spawn
let nextCactusTime = CACTUS_INTERVAL_MIN


export function updateCactus(delta, speedScale) {
    //moves position of the cactus
    //removes all out of the game cactuses
    setCactusPosition(delta, speedScale)
    //if the time spawn of the next cactus spawn has ended :
    //we create the cactus 
    //we need to get a new time spawn for the next cactus
    if (nextCactusTime <= 0) {
        //get a new time for the next cactus spawn :
        if ([...document.querySelectorAll('.cactus')].length >= 4) return
        createCactus()
        //sets a random time for spawn div by speedScale (speed is great ==> time is less)
        nextCactusTime = randomNumberBetween(CACTUS_INTERVAL_MIN, CACTUS_INTERVAL_MAX) / speedScale
    }
    //substracting the delta (browser frame) from the nextcactustime 
    nextCactusTime -= delta

}
//adds cactus to worldelement
function createCactus() {
    const cactus = document.createElement("img")

    cactus.src = ".././cactus-svgrepo-com.svg"
    cactus.classList.add("cactus")
    setCustomProperty(cactus, "--left", 1600)
    worldElem.append(cactus)
}

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function setCactusPosition(delta, speedScale) {
    //select all cactuses: 
    document.querySelectorAll(".cactus").forEach((cactus) => {
        incrementCustomProperty(cactus, "--left", SPEED * -1)
        if (getCustomProperty(cactus, "--left") <= -1000)
            cactus.remove()

    })
}
//gets the rects properties of each cactus and then returns array

export function getCustomProperty(elem, prop) {

    return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0

}
export function setCustomProperty(elem, prop, value) {
    elem.style.setProperty(prop, value)
}
export function incrementCustomProperty(elem, prop, inc) {
    setCustomProperty(elem, prop, getCustomProperty(elem, prop) + inc)
}