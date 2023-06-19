const appNote = document.querySelector('.app')
const colors = ['red', 'blue', 'orange', 'white', 'yellow']
const button = document.querySelector('.button')
const colorP = document.querySelector('.color-name')

const numeros = [-10]

const numeroAleatorio = (min, max) => {
    var numeroAleatorio = Math.floor(Math.random() * (max - min) + min)
    while (numeroAleatorio == numeros[numeros.length - 1]){
        numeroAleatorio = Math.floor(Math.random() * (max - min) + min)
    }

    numeros.push(numeroAleatorio)
    return numeroAleatorio
    
}

button.addEventListener('click', (event) => {
    let numero = numeroAleatorio(0, colors.length)
    let color = colors[numero]
    appNote.style.backgroundColor = color
    colorP.innerHTML = `  ${ color}`
    button.style.backgroundColor = color
})