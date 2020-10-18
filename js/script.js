let contador = 0
let DadosDaEstrutura = []

function voltar(){
    limpaTela()
    document.querySelector('h2').style.display = 'block'
    for(let i = 0; i < 3; i++){
        document.getElementsByTagName('p')[i].style.display = 'block'
    }
}

function limpaTela(){
    document.getElementById('pilha').style.display = 'none'
    document.getElementById('fila').style.display = 'none'
    document.getElementById('lista').style.display = 'none'    

    document.getElementById('container-da-pilha').innerHTML = ''
    document.getElementById('container-da-fila').innerHTML = ''
    document.getElementById('container-da-lista').innerHTML = ''

    document.querySelector('h2').style.display = 'none'
    for(let i = 0; i < 3; i++){
        document.getElementsByTagName('p')[i].style.display = 'none'
    }
}


function iniciaEstrutura(largura, direcaoDoFlex){
    let container = document.createElement('div')
    container.style.display = 'flex'
    container.style.flexDirection = direcaoDoFlex
    container.style.width = largura
    container.style.margin = '0 auto'

    for(let i = 0; i < 3; i++){
        let elemento = document.createElement('div')
        elemento.style.backgroundColor = 'white'
        elemento.setAttribute('class', 'container')
        container.appendChild(elemento)
    }
    return container
}


function reiniciaEstrutura(){
    for(let i = 0; i < 3; i++){
        document.getElementsByClassName('container')[i].innerText = ''
        document.getElementsByClassName('container')[i].style.backgroundColor = 'white'
    }
}


function Pilha(){
    DadosDaEstrutura = []
    contador = 0
    limpaTela()

    let estruturaPilha = iniciaEstrutura('100px','column')
    let pilha = document.getElementById('container-da-pilha')
    pilha.appendChild(estruturaPilha)
    document.getElementById('pilha').style.display = 'block'
}


function inserirPilha(){
    if(document.getElementsByClassName('container')[0].innerText != ''){
        return //verificação se o topo está cheio
    }

    DadosDaEstrutura.push(++contador)
    for(let i = 2, j = 0; j < DadosDaEstrutura.length; i--, j++){
        document.getElementsByClassName('container')[i].innerText = DadosDaEstrutura[j]
        document.getElementsByClassName('container')[i].style.backgroundColor = 'lightgrey'
    }
}


function retirarPilha(){
    DadosDaEstrutura.pop()
    reiniciaEstrutura() //limpeza da estrutura na tela para coloca-la com os valores corretos depois
    for(let i = 2, j = 0; j < DadosDaEstrutura.length; i--, j++){
        document.getElementsByClassName('container')[i].innerText = DadosDaEstrutura[j]
        document.getElementsByClassName('container')[i].style.backgroundColor = 'lightgrey'
    }
}


function retornarTopoDaPilha(){
    if(DadosDaEstrutura.length == 0)
        return
    window.alert('O elemento que está no topo é: ' + DadosDaEstrutura[DadosDaEstrutura.length-1])
}


function Fila(){
    DadosDaEstrutura = []
    contador = 0
    limpaTela()

    let estruturaFila = iniciaEstrutura('280px','row')
    document.getElementById('container-da-fila').appendChild(estruturaFila)
    document.getElementById('fila').style.display = 'block'
}


function inserirFila(){
    if(DadosDaEstrutura.length == 3) //verificação se a fila está cheia
        return
    DadosDaEstrutura.push(++contador)
    document.getElementsByClassName('container')[DadosDaEstrutura.length-1].innerText = DadosDaEstrutura[DadosDaEstrutura.length-1]
    document.getElementsByClassName('container')[DadosDaEstrutura.length-1].style.backgroundColor = 'lightgrey'
}


function retirarFila(){
    DadosDaEstrutura.shift()
    reiniciaEstrutura()
    for(let i = 0; i < DadosDaEstrutura.length; i++){
        document.getElementsByClassName('container')[i].innerText = DadosDaEstrutura[i]
        document.getElementsByClassName('container')[i].style.backgroundColor = 'lightgrey'
    }
}


function retornarInicioDaFila(){
    if(DadosDaEstrutura.length == 0)
        return
    window.alert('O elemento no inicio da fila é: ' +  DadosDaEstrutura[0])
}


function Lista(){
    DadosDaEstrutura = []
    contador = 0
    limpaTela()

    let estruturaLista = iniciaEstrutura('280px', 'row')
    document.getElementById('container-da-lista').appendChild(estruturaLista)
    document.getElementById('lista').style.display = 'block'
}


function verificaListaCheia(){
    for(let i = 0; i < 3; i++){
        if(document.getElementsByClassName('container')[i].innerText == '')
            return false
    }
    return true
}


function inserirInicioLista(){
    if(verificaListaCheia())
        return

    DadosDaEstrutura.unshift(++contador)
    for(let i = 0; i < DadosDaEstrutura.length; i++){
        document.getElementsByClassName('container')[i].innerText = DadosDaEstrutura[i];
        document.getElementsByClassName('container')[i].style.backgroundColor = 'lightgrey'
    }
}


function inserirFinalLista(){
    if(verificaListaCheia())
        return

   DadosDaEstrutura.push(++contador)
   for(let i = 0; i < DadosDaEstrutura.length; i++){
       document.getElementsByClassName('container')[i].innerText = DadosDaEstrutura[i];
       document.getElementsByClassName('container')[i].style.backgroundColor = 'lightgrey'
   }
}


function retirarInicioLista(){
    DadosDaEstrutura.shift()
    reiniciaEstrutura()
    for(let i = 0; i < DadosDaEstrutura.length; i++){
        document.getElementsByClassName('container')[i].innerText = DadosDaEstrutura[i]
        document.getElementsByClassName('container')[i].style.backgroundColor = 'lightgrey'
    }
}


function retirarFinalLista(){
    DadosDaEstrutura.pop()
    reiniciaEstrutura()
    for(let i = 0; i < DadosDaEstrutura.length; i++){
        document.getElementsByClassName('container')[i].innerText = DadosDaEstrutura[i]
        document.getElementsByClassName('container')[i].style.backgroundColor = 'lightgrey'
    }
}


function retirarIndiceLista(){
    let indice = window.prompt('Escolha um índice entre 0 e 2 para remover: ')
    if(indice != '0' && indice != '1' && indice != '2'){
        window.alert('Índice inválido!')
        return
    }
    
    indice = parseInt(indice)
    if(indice == 0){
        DadosDaEstrutura.splice(indice, indice+1)
    } else {
        DadosDaEstrutura.splice(indice, indice)
    }
    
    reiniciaEstrutura()
    for(let i = 0; i < DadosDaEstrutura.length; i++){
        document.getElementsByClassName('container')[i].innerText = DadosDaEstrutura[i]
        document.getElementsByClassName('container')[i].style.backgroundColor = 'lightgrey'
    }
}