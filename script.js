// a variavel avezedoplayer1 guarda de quem é a vez da rodada.
var avezedoplayer1 = true;

// verifica se é a vez do player1 e muda a vez do jogador.
function mudarvezdojogador(){
    if (avezedoplayer1){
        avezedoplayer1 = false;
    } else {    
        avezedoplayer1 = true;
    }
}

function botao1 (){
    if(avezedoplayer1) {
        document.querySelector('#botao1').textContent = "X"; 
     } else{
         document.querySelector('#botao1').textContent = "O"; 
     }
    mudarvezdojogador(); 
    mudarTextoPlayer(); 
    
}

function botao2 (){
    if(avezedoplayer1) {
       document.querySelector('#botao2').textContent = "X"; 
    } else{
        document.querySelector('#botao2').textContent = "O"; 
    }
    mudarvezdojogador();
    mudarTextoPlayer();
    
}

function botao3 (){
    document.querySelector('#botao3').textContent = "X";
    mudarTextoPlayer();
}

function botao4 (){
    document.querySelector('#botao4').textContent = "X";
    mudarTextoPlayer();
}

function botao5 (){
    document.querySelector('#botao5').textContent = "X";
    mudarTextoPlayer();
}

function botao6 (){
    document.querySelector('#botao6').textContent = "X";
    mudarTextoPlayer();
}

function botao7 (){
    document.querySelector('#botao7').textContent = "X";
    mudarTextoPlayer();
}

function botao8 (){
    document.querySelector('#botao8').textContent = "X";
    mudarTextoPlayer();
}

function botao9 (){
    document.querySelector('#botao9').textContent = "X";
    mudarTextoPlayer();
}





function mudarTextoPlayer (){
    if(avezedoplayer1){
        document.querySelector('#vezplayer').textContent = "É a vez do player 1!";
    } else {
        document.querySelector('#vezplayer').textContent = "É a vez do player 2!";
    }
    
}