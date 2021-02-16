let playerScore = 0;
        let computerScore = 0;
        let roundMessage;

        function computerPlay() {
            let options = ['rock', 'paper', 'scissors'];
            let index = Math.floor(Math.random() * 3);

            return options[index];
        }

        function playRound(playerSelection, computerSelection) {
    
            if(playerSelection.toLowerCase() === 'rock') {
                if(computerSelection === 'paper') {
                    ++computerScore;
                    roundMessage = 'Paper beats Rock';
                }else if(computerSelection === 'scissors') {
                    ++playerScore;
                    roundMessage = 'Rock beats Scissors';
                }else if(computerSelection === 'rock') {
                    roundMessage = 'You have both chosen Rock';
                }
            }else if(playerSelection.toLowerCase() === 'paper') {
                if(computerSelection === 'paper') {
                    roundMessage = 'You have both chosen Paper';
                }else if(computerSelection === 'scissors') {
                    ++computerScore;
                    roundMessage = 'Scissors beats Paper';
                }else if(computerSelection === 'rock') {
                    ++playerScore
                    roundMessage = 'Paper beats Rock';
                }
            }else if(playerSelection.toLowerCase() === 'scissors') {
                if(computerSelection === 'paper') {
                    ++playerScore;
                    roundMessage = 'Scissors beats Paper!';
                }else if(computerSelection === 'scissors') {
                    roundMessage = 'You have both chosen Scissors';
                }else if(computerSelection === 'rock') {
                    ++computerScore;
                    roundMessage = 'Rock beats Scissors';
                }
            }
        }
        const buttons = document.querySelectorAll('button');
        const paraPlayer = document.getElementById('player');
        const paraComputer = document.getElementById('computer');
        const score = document.getElementById('score');
        const msg = document.createElement('p');
        const container = document.getElementById('container');
        const result = document.createElement('p');
        result.classList.add('result');
        const newGame = document.getElementById('new');
        
        buttons.forEach((button) => {
            button.addEventListener('click',function(e) {
                playRound(e.target.id, computerPlay());

                paraPlayer.textContent = 'Player score: ' + playerScore;
                paraComputer.textContent = 'Computer score: ' + computerScore;
                msg.textContent = roundMessage;
        
                score.appendChild(msg);

                if(playerScore === 5) {
                    result.textContent = 'Player wins!';
                    buttons.forEach((button) => button.disabled = true);
                } else if(computerScore === 5) {
                    result.textContent = 'Computer wins!'
                    buttons.forEach((button) => button.disabled = true);
                }
                container.appendChild(result);

                newGame.disabled = false;
            });
        });

        newGame.addEventListener('click', () => {
            playerScore = 0;
            computerScore = 0;
            paraPlayer.textContent = 'Player score: ' + playerScore;
            paraComputer.textContent = 'Computer score: ' + computerScore;
            score.removeChild(msg);
            container.removeChild(result);
            buttons.forEach((button) => button.disabled = false);
        })