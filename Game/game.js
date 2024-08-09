let score = JSON.parse(localStorage.getItem('score'))

if(score === null){
    score ={
        wins : 0,
        losses : 0,
        ties : 0
    }
}
// document.querySelector('.showScore').innerHTML = `wins: ${score.wins} \n losses:${score.losses} \n ties:${score.ties}`
updateScore()
function playerMove(move){
    let result =''
    const computerMove = game()
   if(move === 'rock'){
    if(computerMove === 'rock'){
        result = 'tie'
    }else if(computerMove === 'paper'){
        result = 'you win'
    }else{
        result = 'you loss'
    } 
   }
   else if(move === 'paper'){
       if(computerMove === 'rock'){
        result ='you win'
       } else if(computerMove === 'paper'){
        result = 'tie'
       }else{
        result = 'you loss'
       }
   }
   else if(move === 'Scissor'){
    if(computerMove === 'rock'){
        result = 'you loss'
    }else if(computerMove === 'paper'){
        result = 'you win'
    }else{
        result = 'tie'
    }
   }

   if(result === 'you win'){
    score.wins = score.wins + 1
   }else if (result === 'you loss'){
    score.losses += 1
   }else if(result === 'tie'){
    score.ties +=1
   }
   localStorage.setItem('score', JSON.stringify(score))
//    document.querySelector('.showScore').innerHTML = `wins: ${score.wins} \n losses:${score.losses} \n ties:${score.ties}`
document.querySelector('.result').innerHTML = result
document.querySelector('.pick').innerHTML = `you pick ${move}, computer pick ${computerMove}`
updateScore()

    // alert(`you pick ${move}, computer pick ${computerMove}. ${result}. \n wins: ${score.wins} \n losses:${score.losses} \n ties:${score.ties}`)

  }
  function updateScore(){
    document.querySelector('.showScore').innerHTML = `wins: ${score.wins} \n losses:${score.losses} \n ties:${score.ties}`
  }


function game(){
     let computerMove = '';
     let randomNumber = Math.random();
     if(randomNumber>=0 && randomNumber<1/3){
        computerMove = 'rock'
     } else if(randomNumber>=1/3 && randomNumber<2/3){
        computerMove ='paper'
     }else{
        computerMove = 'scissor'
     }
     return computerMove;
}

