const game=() => {
  let playerScore=0;
  let computerScore=0;
  

  const playRounds=() => {
    const rockBtn= document.querySelector('.rock');
    const paperBtn=document.querySelector('.paper');
    const scissorBtn=document.querySelector('.scissor'); 
    const playerChoices=[rockBtn,paperBtn,scissorBtn];
    const computerChoices=['rock','paper','scissor'];
    playerChoices.forEach(choice => {choice.addEventListener('click',function(){
      
      const compNum= Math.floor(Math.random()*3)
      const computerChoice= computerChoices[compNum];

      winner(this.innerText,computerChoice);
      
      if(computerScore==5 || playerScore==5){
      gameOver(playerChoices)
      }
      
   
    })

    })

  }
  const winner=(player,computer) =>{
    const result=document.querySelector(".result");
    const pScoreboard= document.querySelector(".playerScoreboard");
    const cScoreboard= document.querySelector(".computerScoreboard");
    player= player.toLowerCase();
    computer=computer.toLowerCase();

    if(player===computer){
      result.textContent='Tie';
    }
    else if(player=='rock'){
      if(computer=='paper'){
        result.textContent='Computer won.';
        computerScore++
        cScoreboard.textContent = computerScore;
      }
      else{
        result.textContent='You won.'
        playerScore++
        pScoreboard.textContent= playerScore;
      }
    }
    else if(player=='paper'){
      if(computer=='rock'){
        result.textContent='You won.';
        playerScore++;
        pScoreboard.textContent=playerScore;
      }
      else{
        result.textContent='Computer won.'
        computerScore++;
        cScoreboard.textContent=computerScore;
      }
    }
    else if(player=='scissor'){
      if(computer=='rock'){
        result.textContent='Computer won.'
        computerScore++;
        cScoreboard.textContent=computerScore;
      }
      else{
        result.textContent='You won.'
        playerScore++;
        pScoreboard.textContent= playerScore;
      }
    }
    
  }
  const gameOver= (playerChoices)=>{
    const result= document.querySelector('.result');
    const reloadBtn=document.querySelector('.reload');

    playerChoices.forEach(choice =>{
      choice.style.display= 'none';
    })
    
    if (playerScore > computerScore){
      result.innerText= 'Game over. Congrats, you won!'
    }
    else {
      result.innerText= 'Game over. Computer won!'
    }
    reloadBtn.innerText= 'RESTART'
    reloadBtn.addEventListener('click',() =>{
      window.location.reload();
    })

  }
  playRounds();
  
}

game();


  