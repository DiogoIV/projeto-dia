let data = new Date()

let agora = data.getHours()

let mens = window.document.querySelector("section#msg")

let ima = window.document.getElementById("imgs")

agora = 22

mens.innerHTML = `Agora são ${agora} horas.`

let img = document.createElement('img')

if (agora < 12 && agora > 0) {
    
    img.setAttribute('src', 'imagem/imagem-m.jpg')
    img.alt = 'Descrição da imagem'

    document.body.style.background = '#344069'

} else if (agora < 18) {
    img.src = 'imagem/imagem-t.jpg'
    document.body.style.background  = '#F27405'  
} else {
    img.setAttribute('src', 'imagem/imagem-n.jpg')
    document.body.style.background = '#014040'
}

ima.appendChild(img)
