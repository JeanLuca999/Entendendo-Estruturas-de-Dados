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
    container.setAttribute('class', 'container')
    for(let i = 0; i < 3; i++){ //criando cada espaço interno da pilha
        let elemento = document.createElement('div')
        elemento.style.width = '100px'
        elemento.style.height = '80px'
        elemento.style.border = '1px solid black'
        container.appendChild(elemento)
    }
    let pilha = document.getElementById('container-da-pilha') //adicionando a pilha ao corpo do site
    pilha.appendChild(container)
    document.getElementById('pilha').style.display = 'block'
}