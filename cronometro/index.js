const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let pausado = document.querySelector('.relogio')
let segundos = 0
let timer;

function criasegundos(segundos){                                        
    const data = new Date(segundos * 1000);// já que segundos=0, ele começa a conta os tudo de 0. Multiplica por 1000 porque ele começa contando por milésimos de segundos
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    })
}

function iniciarRelogio(){
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = criasegundos(segundos)
    }, 1000)
    
}

iniciar.addEventListener('click', function(event){
    pausado.classList.remove('pausado')
    clearInterval(timer) //usei para zerar o tempo anterior e adicionar o novo
    iniciarRelogio()
})

pausar.addEventListener('click', function(event){
    pausado.classList.add('pausado')
    clearInterval(timer) //Faz com que o setInterval pare de executar a funcao
})

zerar.addEventListener('click', function(event){
    pausado.classList.remove('pausado')
    clearInterval(timer)// faz pausar a interação
    relogio.innerHTML = '00:00:00' //apos pausar, ele mostra esse valor na tela
    segundos = 0 //faz o valor atual virar 0, completando a ação de limpar
})
