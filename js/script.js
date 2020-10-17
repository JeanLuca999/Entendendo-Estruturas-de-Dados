let contador = 0
let lista = []

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
}


function Fila(){
    contador = 0
    limpaTela()

    let estruturaFila = iniciaEstrutura('280px','row')
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
    window.alert('O elemento no inicio da fila é: ' +  document.getElementsByClassName('container')[0].innerText)
}


function Lista(){
    lista = []
    contador = 0
    limpaTela()

    let estruturaLista = iniciaEstrutura('280px', 'row')
    document.getElementById('container-da-lista').appendChild(estruturaLista)
    document.getElementById('lista').style.display = 'block'
}


function verificaListaCheia(){
    for(let i = 0; i < 3; i++){
        if(document.getElementsByClassName('container')[i].innerText == ''){
            return false
        }
    }
    return true
}


function inserirInicioLista(){
    if(verificaListaCheia())
        return

    lista.unshift(++contador)
    for(let i = 0; i < lista.length; i++){
        document.getElementsByClassName('container')[i].innerText = lista[i];
        document.getElementsByClassName('container')[i].style.backgroundColor = 'lightgrey'
    }
}


function inserirFinalLista(){
    if(verificaListaCheia())
        return

   lista.push(++contador)
   for(let i = 0; i < lista.length; i++){
       document.getElementsByClassName('container')[i].innerText = lista[i];
       document.getElementsByClassName('container')[i].style.backgroundColor = 'lightgrey'
   }
}


function retirarInicioLista(){
    lista.shift()
    for(let i = 0; i < lista.length; i++){
        document.getElementsByClassName('container')[i].innerText = lista[i]
        document.getElementsByClassName('container')[i].style.backgroundColor = 'lightgrey'
    }
    //retira o ultimo elemento ja que ele foi movido para frente
    document.getElementsByClassName('container')[lista.length].innerText = ''
    document.getElementsByClassName('container')[lista.length].style.backgroundColor = 'white'
}


function retirarFinalLista(){
    lista.pop()
    for(let i = 0; i < lista.length; i++){
        document.getElementsByClassName('container')[i].innerText = lista[i]
        document.getElementsByClassName('container')[i].style.backgroundColor = 'lightgrey'
    }
    //retira o ultimo elemento da lista desenhada na tela
    document.getElementsByClassName('container')[lista.length].innerText = ''
    document.getElementsByClassName('container')[lista.length].style.backgroundColor = 'white'
}


function retirarIndiceLista(){
    let indice = window.prompt('Escolha um indice para remover: ')
    if(indice != '0' && indice != '1' && indice != '2'){
        window.alert('Indice inválido!')
        return
    }
    
    indice = parseInt(indice)
    if(indice == 0){
        lista.splice(indice, indice+1)
    } else {
        lista.splice(indice, indice)
    }
    

    for(let i = 0; i < 3; i++){ //reset da lista para coloca-la depois na nova ordem
        document.getElementsByClassName('container')[i].innerText = ''
        document.getElementsByClassName('container')[i].style.backgroundColor = 'white'
    }

    for(let i = 0; i < lista.length; i++){
        document.getElementsByClassName('container')[i].innerText = lista[i]
        document.getElementsByClassName('container')[i].style.backgroundColor = 'lightgrey'
    }
}