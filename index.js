const btnRock = document.querySelector(".rock"); 
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");


let user = 0;
let machine = 0;

btnRock.addEventListener("click", (e) => {
    const opponentMove = iaMove();
    
    switch(opponentMove) {
        case "rock":
            btnRock.classList.add("draw");
            setTimeout(() => btnRock.classList.remove("draw"), 2000);
            message("you draw", opponentMove);
            break;
        case "paper":
            machine++;
            changeScore();
            btnRock.classList.add("loss");
            setTimeout(() => btnRock.classList.remove("loss"), 2000);

            message("You lose", opponentMove);
            break;
        default:
            user++;
            changeScore();
            btnRock.classList.add("victory");
            setTimeout(() => btnRock.classList.remove("victory"), 2000);

            message("You win", opponentMove);
        
    }
});

btnPaper.addEventListener("click", (e) => {
    const opponentMove = iaMove();
    
    switch(opponentMove) {
        case "paper":
            btnPaper.classList.add("draw");
            setTimeout(() => btnPaper.classList.remove("draw"), 2000);
            message("you draw", opponentMove);
            break;
        case "scissors":
            machine++;
            changeScore();
            btnPaper.classList.add("loss");
            setTimeout(() => btnPaper.classList.remove("loss"), 2000);

            message("You lose", opponentMove);
            break;
        default:
            user++;
            changeScore();
            btnPaper.classList.add("victory");
            setTimeout(() => btnPaper.classList.remove("victory"),2000);
            message("You win", opponentMove);
        
    }
    
});
btnScissors.addEventListener("click", (e) => {
    const opponentMove = iaMove();
    switch(opponentMove) {
        case "scissors":
            btnScissors.classList.add("draw");
            setTimeout(() => btnScissors.classList.remove("draw"), 2000);
            message("you draw", opponentMove);

            break;
        case "rock":
            machine++;
            changeScore();
            btnScissors.classList.add("loss");
            setTimeout(() => btnScissors.classList.remove("loss"), 2000);
            message("You lose", opponentMove);
            break;
        default:
            user++;
            changeScore();
            btnScissors.classList.add("victory");
            setTimeout(() => btnScissors.classList.remove("victory"), 2000);
            message("You win", opponentMove);
    }

});

function iaMove(){
    moves = ["rock", "paper", "scissors"];
    const iRaffle = Math.floor(Math.random() * moves.length);
    return moves[iRaffle]
}

function changeScore() {
    const pointsUser = document.querySelector(".points_user");
    const pointsMachine = document.querySelector(".points_machine");

    pointsUser.innerText = user;
    pointsMachine.innerText = machine;
}

function message(result, machineMove) {
    const retornoMessage = document.querySelector(".result");
    retornoMessage.innerText =  result + messageMachine(machineMove);
}

function messageMachine(machineMove) {
    switch (machineMove) {
        case "rock": return " the machine selected rock ✊";
        case "paper": return " the machine selected paper ✋";
        case "scissors": return " the machine selected scissors ✌️"; 
    }
}
