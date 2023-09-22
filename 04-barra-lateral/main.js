const root = document.querySelector('.header')
const navbar = document.querySelector('.nav-max-600')
const nav = document.querySelector('.nav')
const navUl = document.querySelector('.nav-ul')
let count = 1

navbar.addEventListener('click', () => {
    if (count % 2 == 0) {
        root.style.height = '250px'
        nav.style.width = '400px'
        root.style.flexWrap = 'wrap'
        nav.style.display = 'block'
        navUl.style.display = 'flex'
        navUl.style.flexDirection = 'column'
        root.style.transition = 'all 1s'
        nav.style.transition = 'opacity 2s'
        nav.style.transitionDelay = '2s'
        nav.style.opacity = '1'
        
        count++
    }else{
        root.style.height = '80px'
        nav.style.display = 'none'
        count++
    }
})