 
function printComputerMove(){
    const randomNumber = Math.random()
   let computerMove = ''
    
            if(randomNumber >= 0 && randomNumber<1/3){
                computerMove ='rock'
                
            }else if(randomNumber>=1/3 && randomNumber<2/3){
                computerMove='paper'
                
            }else{
                computerMove ='scissor'
            }
            // console.log(computerMove)
            if(computerMove === 'rock'){
                result = 'The game is tie'
            }else if(computerMove === 'paper'){
                result ='You loss the game'
            }else{
                result = 'you win the game'
            }
           return computerMove;
}
// printComputerMove()