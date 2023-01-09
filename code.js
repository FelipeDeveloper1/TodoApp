// contagem no modal
let contador = 0

//informação de contagem no modal
let local_info = document.querySelector(".local_info")
let info = document.querySelector('.info')


// navegação no modal a baixo 
let todos = document.createElement('p')
let ativos = document.createElement('p')
let completos = document.createElement('p')
let limpar = document.createElement('p')

//criando o evento de submit com o enter
document.addEventListener('keypress', (i) => {
    //criando as variaveis 
    let local = document.querySelector('.notas')
    let texto = document.querySelector('.texto').value
    let check = document.createElement('div')
    let valor_texto = document.createElement('p')
    let notas = document.createElement('div')

    //tabs 

    criar = () => {
        //criando valores a elas
        valor_texto.innerHTML = texto
        notas.classList.add('criou')
        check.classList.add('check')
        local_info.classList.add('show')
        limpar.classList.add('clear')


        // dando valores ao conteudo do modal
        contador += 1
        todos.innerHTML = 'Todos'
        ativos.innerHTML = 'Ativos'
        completos.innerHTML = 'Completos'
        limpar.innerHTML = 'Limpar'
        info.innerHTML = `${contador} restante(s)`
        inserir = () => {
            //inserindo as variaveis em seus respectivos lugares
            notas.insertAdjacentElement('beforeend', check)
            notas.insertAdjacentElement('beforeend', valor_texto)
            local.insertAdjacentElement("beforeend", notas)
            local_info.insertAdjacentElement('beforeend', todos)
            local_info.insertAdjacentElement('beforeend', ativos)
            local_info.insertAdjacentElement('beforeend', completos)
            local_info.insertAdjacentElement('beforeend', limpar)
        }
    }

    //criando condições para o submit
    if (i.key == 'Enter' && texto != '') {


        //chamando as funções caso condições sejam aceitas
        criar()
        inserir()

        //criando eventos de clique no check da tarefa
        check.addEventListener('click', () => {
            check.classList.toggle('checked')
            valor_texto.classList.toggle('tachado')


            // trabalhando com o contador
            if (check.classList.contains('checked')) {
                contador -= 1
                info.innerHTML = `${contador} restante(s)`
            } else {
                contador += 1
                info.innerHTML = `${contador} restante(s)`
            }
        })

    }
    //função de limpar
    limpar.addEventListener('click', () => {
        notas.remove()
        contador = 0
        info.innerHTML = `${contador} restantes(s)`

    })
})



// alterar o tema do fundo 
let mode = document.querySelector('.mode')
let primeira = document.querySelector('.primeira')
mode.addEventListener('click', () => {
    if (mode.classList.contains('lua')) {
        //removendo tema escuro
        mode.classList.remove('lua')
        primeira.classList.remove('noite')

        //adicionando tema claro
        mode.classList.toggle('sol')
        primeira.classList.toggle('dia')
    } else {
        //removendo tema claro
        mode.classList.remove('sol')
        primeira.classList.remove('dia')

        //adicionando tema escuro
        mode.classList.toggle('lua')
        primeira.classList.toggle('noite')
    }
})