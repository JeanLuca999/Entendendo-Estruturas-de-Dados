let contador = 0

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


function Pilha(){
    contador = 0
    limpaTela()

    let estruturaPilha = iniciaEstrutura('100px','column')
    let pilha = document.getElementById('container-da-pilha')
    pilha.appendChild(estruturaPilha)
    document.getElementById('pilha').style.display = 'block'
}


function inserirPilha(){
    for(let i = 2; i >= 0; i--){ //o container de indice 2 eh a base, por isso começamos por ele
        if(document.getElementsByClassName('container')[i].style.backgroundColor == 'white'){
            document.getElementsByClassName('container')[i].style.backgroundColor = 'lightgrey'
            document.getElementsByClassName('container')[i].innerHTML = `${++contador}`
            return
        }
    }
    window.alert('pilha cheia')     
}


function retirarPilha(){
    for(let i = 0; i <= 2; i++){
        if( document.getElementsByClassName('container')[i].style.backgroundColor == 'lightgrey' ){
            document.getElementsByClassName('container')[i].style.backgroundColor = 'white'
            document.getElementsByClassName('container')[i].innerHTML = ''
            return
        }
    }
}


function retornarTopoDaPilha(){
    for(let i = 0; i <= 2; i++){
        if( document.getElementsByClassName('container')[i].style.backgroundColor == 'lightgrey'){
            window.alert('O elemento do topo é: ' + document.getElementsByClassName('container')[i].innerText)
            return
        }
    }
    window.alert('pilha vazia')
}


function Fila(){
    contador = 0
    limpaTela()

    let estruturaFila = iniciaEstrutura('300px','row')
    document.getElementById('container-da-fila').appendChild(estruturaFila)
    document.getElementById('fila').style.display = 'block'
}


function inserirFila(){
    for(let i = 0; i < 3; i++){
        if( document.getElementsByClassName('container')[i].style.backgroundColor == 'white' ){
            document.getElementsByClassName('container')[i].style.backgroundColor = 'lightgrey'
            document.getElementsByClassName('container')[i].innerHTML = `${++contador}`
            return
        }
   }
   window.alert('Fila cheia')
}


function retirarFila(){
    for(let i = 0; i < 3; i++){
        let elementoAtual = document.getElementsByClassName('container')[i]
        try{ // cada elemento vira o seu proxima
            let proximoElemento = document.getElementsByClassName('container')[i+1]
            elementoAtual.innerText = proximoElemento.innerText
            elementoAtual.style.backgroundColor = proximoElemento.style.backgroundColor
        } catch { // o terceiro elemento nao tem proximo por isso ele eh apenas resetado
            elementoAtual.style.backgroundColor = 'white'
            elementoAtual.innerText = ''
        }
    }
}


function retornarInicioDaFila(){
    if(document.getElementsByClassName('container')[0].innerText != ''){
        window.alert('O elemento no inicio da fila é: ' +  document.getElementsByClassName('container')[0].innerText)
    } else {
        window.alert('Fila vazia')
    }
}


function Lista(){
    contador = 0
    limpaTela()

    let estruturaLista = iniciaEstrutura('300px', 'row')
    document.getElementById('container-da-lista').appendChild(estruturaLista)
    document.getElementById('lista').style.display = 'block'
}