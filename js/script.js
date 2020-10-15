function Pilha(){
    document.getElementById('container-da-pilha').innerHTML = '' //reset da pilha a cada chamada

    document.querySelector('h2').style.display = 'none'//retirando elementos da tela
    for(let i = 0; i < 3; i++){
        document.getElementsByTagName('p')[i].style.display = 'none'
    }

    let container = document.createElement('div') //criando a estrutura que servira como pilha
    container.style.display = 'flex'
    container.style.flexDirection = 'column'
    container.style.width = '100px'
    container.style.margin = '0 auto'
    for(let i = 0; i < 3; i++){ //criando cada espaço interno da pilha
        let elemento = document.createElement('div')
        elemento.style.width = '100px'
        elemento.style.height = '80px'
        elemento.style.border = '1px solid black'
        elemento.style.backgroundColor = 'white'
        elemento.setAttribute('class', 'container')
        container.appendChild(elemento)
    }
    let pilha = document.getElementById('container-da-pilha') //adicionando a pilha ao corpo do site
    pilha.appendChild(container)
    document.getElementById('pilha').style.display = 'block'
}

function inserirPilha(){
    for(let i = 2; i >= 0; i--){ //o container de indice 2 eh o container da base, por isso começamos por ele
        if( document.getElementsByClassName('container')[i].style.backgroundColor == 'white'){
            document.getElementsByClassName('container')[i].style.backgroundColor = 'lightgrey'
            document.getElementsByClassName('container')[i].innerHTML = `${Math.abs(i-2)}`
            return
        }
    }
    window.alert('pilha cheia')     
}

function retirarPilha(){
    for(let i = 0; i <= 2; i++){
        if( document.getElementsByClassName('container')[i].style.backgroundColor == 'lightgrey'){
            document.getElementsByClassName('container')[i].style.backgroundColor = 'white'
            document.getElementsByClassName('container')[i].innerHTML = ''
            return
        }
    }
    window.alert('pilha vazia')
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