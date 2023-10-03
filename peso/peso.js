const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = form.inNome.value
    const masculino = form.inMasculino.checked
    const Altura = Number(form.inAltura.value)  

    let peso
    if (masculino) {
        peso = 22 * Math.pow(Altura, 2)
    } else {
        peso = 21 * Math.pow(Altura, 2)
    }

    resp.innerText = `${nome} seu peso ideal é: ${peso.toFixed(3)}kg`
})

form.addEventListener("reset", (e) => {
    resp.innerText = " "
})
