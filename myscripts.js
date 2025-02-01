function playRound(count1, count2) {
    return new Promise((resolve) => {
        let choice1 = getPlayer1();
        let choice2 = getPlayer2();

        // 1. Rock, 2. Paper, 3. Scissors
        if(choice1==1 && choice2==2){
            console.log("Player 1 chose rock. Player 2 chose paper. Player 2 wins!");
            count2++;
        }
        else if(choice1==1 && choice2==3){
            console.log("Player 1 chose rock. Player 2 chose scissors. Player 1 wins!");
            count1++;
        }
        else if(choice1==2 && choice2==1){
            console.log("Player 1 chose paper. Player 2 chose rock. Player 1 wins!");
            count1++;
        }
        else if(choice1==2 && choice2==2){
            console.log("Player 1 chose paper. Player 2 chose paper. Tie!");
        }
        else if(choice1==2 && choice2==3){
            console.log("Player 1 chose paper. Player 2 chose scissors. Player 2 wins!");
            count2++;
        }
        else if(choice1==3 && choice2==1){
            console.log("Player 1 chose scissors. Player 2 chose rock. Player 2 wins!");
            count2++;
        }
        else if(choice1==3 && choice2==2){
            console.log("Player 1 chose scissors. Player 2 chose paper. Player 1 wins!");
            count1++;
        }
        else if(choice1==3 && choice2==3){
            console.log("Player 1 chose scissors. Player 2 chose scissors. Tie!");
            
        }
        else if(choice1==1 && choice2==1){
            console.log("Player 1 chose rock. Player 2 chose rock. Tie!");

        }
        console.log("Current score: Player 1: " + count1 + " Player 2: " + count2);
        setTimeout(() => {
            resolve({count1, count2});
        }, 3000); // 3 second delay between rounds
    });
}

function getPlayer1(){
    let choice = Number(prompt("1. Rock, 2. Paper, 3. Scissors \nEnter choice of player 1: "));

    if(choice < 1 || choice > 3){
        getPlayer1();
    }

    return choice;
}

function getPlayer2(){
    let choice = Number(prompt("1. Rock, 2. Paper, 3. Scissors \nEnter choice of player 2: "));

    if(choice < 1 || choice > 3){
        getPlayer2();
    }

    return choice;
}

async function mainGame(){
    console.log("Game starting in 5 seconds. Please open your console...");
    
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    console.log("Rock Paper Scissors. First to 10 points wins!");
    let count1 = 0, count2 = 0;
    
    do {
        let result = await playRound(count1, count2);
        count1 = result.count1;
        count2 = result.count2;
    } while(count1 < 10 && count2 < 10);

    if(count1 >= 10){
        console.log("Player 1 wins!");
    } else {
        console.log("Player 2 wins!");
    }
}

mainGame();