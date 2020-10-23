let cards = document.querySelectorAll('.card')

let scrollBtn = document.getElementById('mybtn')

let hamburger = document.getElementById('hamburger')
let navBar = document.getElementById('navbarNav')





cards.forEach(cards => {
    cards.addEventListener('mouseover', () => {
        cards.childNodes[1].classList.add('img-darken')
    })

    cards.addEventListener('mouseout', () => {
        cards.childNodes[1].classList.remove('img-darken')
    })
})

window.onscroll = () => {
    if (document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = 'block'
    } else {
        scrollBtn.style.display = 'none'
    }
}


scrollBtn.addEventListener(('click'), () => {
    document.documentElement.scrollTop = 0
})

hamburger.addEventListener(('click'), () => {
    navBar.classList.toggle('show')

})
