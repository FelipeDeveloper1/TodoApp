let tabs = document.querySelectorAll('.tabs_toggle')
let contents = document.querySelectorAll('.tabs_content')


tabs.forEach((valor, index) => {
    valor.addEventListener('click', () => {
        contents.forEach((valor_content) => {
            valor_content.classList.remove('active')
        })
        tabs.forEach((valor) => {
            valor.classList.remove('active')
        })
        tabs[index].classList.add('active')
        contents[index].classList.add('active')
    })
})