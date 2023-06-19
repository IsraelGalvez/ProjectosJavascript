const number = document.querySelector('.number')
const buttons = document.querySelectorAll('.button')
let count = 0

const colorNumber = (count) => {
    if (count == 0) {
        number.style.color = 'black'
    }else if(count > 0){
        number.style.color = 'green'
    }else{
        number.style.color = 'red'
    }
}

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const className = e.currentTarget.classList[0]
        if ( className == 'decrease-b') {
            count -= 1
        }else if(className == 'reset-b'){
            count = 0
        }else{
            count += 1
        }
        colorNumber(count)
        number.innerHTML = `${count}`
    })
})
