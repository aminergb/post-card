import { updateCactus } from "./utils/utils.js"

let lastTime = null
const god1 = document.querySelector("[data-god1]")
const bg = document.querySelector('.wavy-bg')
const voiture = document.querySelector('.voiture')
let isFinished = false

function updateLoop(time) {
    if (lastTime === null) {
        lastTime = time
        window.requestAnimationFrame(updateLoop)
        return

    }
    const delta = time - lastTime
    updateCactus(delta, 0.08)
    god1.addEventListener("animationiteration", (e) => {


        if (e.animationName === "Ytosunset" && e.elapsedTime % 10 === 0) {
            const isSun = [...god1.classList].includes("suny") ? true : false
            if (isSun) {
                isFinished = true

                god1.classList.remove("suny")
                god1.classList.add("luny")

            } else {
                isFinished = true

                god1.classList.remove("luny")
                god1.classList.add("suny")





            }
        } else {
            isFinished = false
        }

    })
    bg.addEventListener("animationiteration", (e) => {


        if (e.elapsedTime % 10 === 0 && isFinished) {

            const isDay = [...bg.classList].includes("day") ? true : false
            if (isDay) {


                bg.classList.remove('day')
                bg.classList.add('night')
                voiture.src = "./assets/Img_06.png"

            } else {


                bg.classList.remove('night')
                bg.classList.add('day')
                voiture.src = "./assets/Img_05.png"



            }
        }
    })

    return window.requestAnimationFrame(updateLoop)
}

window.requestAnimationFrame(updateLoop)


