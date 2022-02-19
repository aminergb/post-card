let lastTime = null
const god1 = document.querySelector("[data-god1]")
const bg = document.querySelector('.wavy-bg')
const voiture = document.querySelector('.voiture')
let isFinished = false

function updateLoop(time) {
    if (lastTime === null) {
        lastTime = time

    }

    god1.addEventListener("animationiteration", (e) => {


        if (e.animationName === "Ytosunset" && e.elapsedTime % 10 === 0) {
            const isSun = [...god1.classList].includes("suny") ? true : false
            if (isSun) {
                isFinished = true
                console.log("issunfinished")
                god1.classList.remove("suny")
                god1.classList.add("luny")

            } else {
                isFinished = true
                console.log("ismoonfinished")
                god1.classList.remove("luny")
                god1.classList.add("suny")





            }
        } else {
            isFinished = false
        }

    })
    bg.addEventListener("animationiteration", (e) => {

        console.log(isFinished)
        if (e.elapsedTime % 10 === 0 && isFinished) {

            const isDay = [...bg.classList].includes("day") ? true : false
            if (isDay) {
                console.log("issunfinished")

                bg.classList.remove('day')
                bg.classList.add('night')
                voiture.src = "./assets/Img_06.png"

            } else {
                console.log("ismoonfinished")

                bg.classList.remove('night')
                bg.classList.add('day')
                voiture.src = "./assets/Img_05.png"



            }
        }
    })
    const delta = time - lastTime

    // window.requestAnimationFrame(updateLoop)
}
window.requestAnimationFrame(updateLoop)

