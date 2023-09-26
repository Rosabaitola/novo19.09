const form = documment.querySelector("form")
const resp1 = documment.querySelector("h3")
const resp2 = documment.querySelector("h4")

form.addEventlistener("Submit",(e)=>{
    e.preventDefault()

    const nome = form.inNome.value
    const nota1 = Number(form.inNota1.value)
    const nota2 = Number(form.inNota2.value)
    const media = (nota1 + nota2)/2
    resp1.innerText = `Média das Notas ${media.toFixed(2)}`

        if(media >= 7) {
        resp2.innerText = `Parabéns ${nome}! Você foi 
    aprovado(a)`
        resp2.style.color = "blue"
    }   else if (media >= 4) {
        resp2.innerText = `Atenção ${nome}! Você está de 
    exame`
            resp2.style.color = "green"
        }else{
            resp2.innerText = `Ops ${nome}! Você foi 
        reprovado(a)`
            resp2.style.color = "red"
        }

})
