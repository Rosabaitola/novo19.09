//cria referencia ao form e elementos de respostas do programa

const form = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//cria um ouvinte

form.addEventListener("submit" , (e) => {
      e.preventDefault()    //evita o envio form
const nome = form.inNome.value
const nota1 = Number(form.inNota1.value)
const nota2 = Number(form.inNota2.value)
const media = (nota1 + nota2)
resp1.innerText = `Medias das notas ${media.toFixed(2)}`
//Criar as coondicionais

if(media >= 7) {
    resp2.innerText = `Parabens  ${nome}! Você foi aprovado`
     resp2.style.color = "blue"
    } else if (media >= 4 ) {
        resp2.innerText = `Atenção ${nome}! você esta de exame`
        resp2.style.color = "green"
    }  else {
        resp2.innerText =  `Ops ${nome}! você foi reprovado`
        resp2.style.color = "red"
    }
})