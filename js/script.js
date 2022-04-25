let x = document.querySelector(".x")
let o = document.querySelector(".o")
let boxes = document.querySelectorAll(".caixa")
let botoes = document.querySelectorAll("#botoes-jogadores button")
let mensagem = document.querySelector("#mensagem")
let textoMensagem = document.querySelector("#mensagem p")
let segundoPlayer;


// Contador de jogadas
let player1 = 0
let player2 = 0

// Adicionando evento de clique nas caixas

for(let i = 0; i < boxes.length; i++){

    // Quando alguém clica na caixa
    boxes[i].addEventListener("click", function(){

        let el = checkEl(player1, player2)
        
        if(player1 == player2){
            //x
            el = x
        } else {
            // o
            el = o
        }

        // Verifica se já tem X ou O 
        if(this.childNodes.length == 0) {

        let cloneEl = el.cloneNode(true)

        this.appendChild(cloneEl)

        // Computar jogada
        if(player1 == player2) {
            player1++

            if(segundoPlayer == "IA-player"){

                // Função para executar a jogada
                computerPlay()
                player2++
            }

        } else {
            player2++
        }

        // Checa quem venceu
        checkWinCondition()

      }

    })
}

// Evento para saber ser é 2 players ou IA
for(let i = 0; i < botoes.length; i++){

    botoes[i].addEventListener("click", function(){

        segundoPlayer = this.getAttribute("id")

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].style.display = "none"
        }

        setTimeout(() => {

            let container = document.querySelector("#container")
            container.classList.remove("hide")
        }, 500);
    })
}

// Vê quem vai jogar
function checkEl(player1, player2){
    if(player1 == player2){
        //x
        el = x
    } else {
        // o
        el = o
    }

    return el
}

// Vê quem ganhou
function checkWinCondition(){
    
    let b1 = document.getElementById("bloco-1")
    let b2 = document.getElementById("bloco-2")
    let b3 = document.getElementById("bloco-3")
    let b4 = document.getElementById("bloco-4")
    let b5 = document.getElementById("bloco-5")
    let b6 = document.getElementById("bloco-6")
    let b7 = document.getElementById("bloco-7")
    let b8 = document.getElementById("bloco-8")
    let b9 = document.getElementById("bloco-9")

    // Horizontal 1
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0 ){

        let b1Child = b1.childNodes[0].className
        let b2Child = b2.childNodes[0].className
        let b3Child = b3.childNodes[0].className

        if(b1Child == "x" && b2Child == "x" && b3Child == "x"){
            // x   
            declaraWinner("x")        
        } else if(b1Child == "o" && b2Child == "o" && b3Child == "o"){
            // o
            declaraWinner("o") 
        }
    }

    // Horizontal 2
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0 ){

        let b4Child = b4.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b6Child = b6.childNodes[0].className

        if(b4Child == "x" && b5Child == "x" && b6Child == "x"){
            // x   
            declaraWinner("x")      
        } else if(b4Child == "o" && b5Child == "o" && b6Child == "o"){
            // o
            declaraWinner("o")  
        }
    }

    // Horizontal 3
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0 ){

        let b7Child = b7.childNodes[0].className
        let b8Child = b8.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if(b7Child == "x" && b8Child == "x" && b9Child == "x"){
            // x   
            declaraWinner("x")        
        } else if(b7Child == "o" && b8Child == "o" && b9Child == "o"){
            // o
            declaraWinner("o") 
        }
    }

//  ************* VERTICAIS ***************

    // Vertical 1
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0 ){

        let b1Child = b1.childNodes[0].className
        let b4Child = b4.childNodes[0].className
        let b7Child = b7.childNodes[0].className

        if(b1Child == "x" && b4Child == "x" && b7Child == "x"){
             // x   
             declaraWinner("x")         
        } else if(b1Child == "o" && b4Child == "o" && b7Child == "o"){
            // o
            declaraWinner("o") 
            }
        }

    // Vertical 2
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0 ){

        let b2Child = b2.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b8Child = b8.childNodes[0].className

        if(b2Child == "x" && b5Child == "x" && b8Child == "x"){
             // x   
             declaraWinner("x")         
        } else if(b2Child == "o" && b5Child == "o" && b8Child == "o"){
            // o
             declaraWinner("o")  
            }
        }
        
    // Vertical 3
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0 ){

        let b3Child = b3.childNodes[0].className
        let b6Child = b6.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if(b3Child == "x" && b6Child == "x" && b9Child == "x"){
             // x   
            declaraWinner("x")        
        } else if(b3Child == "o" && b6Child == "o" && b9Child == "o"){
            // o
            declaraWinner("o") 
            }
        }

    // Diagonal 1
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0 ){

        let b1Child = b1.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if(b1Child == "x" && b5Child == "x" && b9Child == "x"){
             // x   
            declaraWinner("x")        
        } else if(b1Child == "o" && b5Child == "o" && b9Child == "o"){
            // o
            declaraWinner("o")
            }
        }

    // Diagonal 2
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0 ){

        let b3Child = b3.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b7Child = b7.childNodes[0].className

        if(b3Child == "x" && b5Child == "x" && b7Child == "x"){
             // x   
            declaraWinner("x")        
        } else if(b3Child == "o" && b5Child == "o" && b7Child == "o"){
            // o
            declaraWinner("o")
            }
        }            
    
    // Deu velha
    let counter = 0

    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            counter++
        }
    }
    if(counter == 9) {
        declaraWinner("Deu velha")
    }

    // Limpa o jogo, declara o vencedor e atualiza o placar
        function declaraWinner(winner){
        
        let blocopontuacaoX = document.getElementById("pontuacao-1")
        let blocopontuacaoY = document.getElementById("pontuacao-2")
        let msg = ""

        if(winner == "x"){
            blocopontuacaoX.textContent = parseInt(blocopontuacaoX.textContent) +1
            msg = "O jogador 1 venceu!"
        } else if (winner == "o"){
            blocopontuacaoY.textContent = parseInt(blocopontuacaoY.textContent) +1
            msg = "O jogador 2 venceu!"
        } else {
            msg = "Deu velha"
        }
    
        // Exibe mensagem

        textoMensagem.innerHTML = msg
        mensagem.classList.remove('hide')

        // Esconde mensagem

        setTimeout(() => {
            mensagem.classList.add("hide")
        }, 3000);

        // Zera as jogadas
        player1 = 0
        player2 = 0

        // Remove X e O

        let boxesToRemove = document.querySelectorAll(".caixa div")

        for(let i=0; i < boxesToRemove.length; i++){
            boxesToRemove[i].parentNode.removeChild(boxesToRemove[i  ])
        }
    }

}

// Executar a lógica da jogada do computador

function computerPlay(){
    
    let cloneO = o.cloneNode(true)
    counter = 0
    filled = 0

    for(let i = 0; i < boxes.length; i++){

        let randomNumber = Math.floor(Math.random() * 5)

        // Só preencher se estiver vazio o filho
        if(boxes[i].childNodes[0] == undefined){
            if(randomNumber <= 1) {
                boxes[i].appendChild(cloneO)
                counter++
                break
            }
        // Checagem de quantas estão preenchidas    
        } else {
            filled++
        }
    }

    if(counter == 0 && filled < 9){
        computerPlay()
    }
}
       


