const btnRock = document.getElementById("rock"); 
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const btnsMove = document.getElementsByClassName("moves");
const modal = document.getElementById("game_explanation");
const btnCloseModal = document.getElementById("dialog_btn_close");

btnCloseModal.addEventListener("click", () => {
    modal.close();
 
});

(function openModal() {
    modal.showModal();
})();

const moves = {
    paper: {
        paper: "draw",
        rock: "win",
        scissors: "loss"
    },
    rock: {
        paper: "loss",
        rock: "draw",
        scissors: "win"
    },
    scissors: {
        paper: "win",
        rock: "loss",
        scissors: "draw"
    }
} 
const machineMove = {
    paper: "the machine selected paper ✋",
    rock: "the machine selected rock ✊",
    scissors: "the machine selected scissors ✌️"
}


let user = 0;
let machine = 0;


//////////////////////////////////////

btnRock.addEventListener("click", () => {
    playGame("rock");
    
});

btnPaper.addEventListener("click", () => {
    playGame("paper");
});
btnScissors.addEventListener("click", () => {
    
    playGame("scissors");
});

///////////////////////////////////////////////////////////////////////////

function playGame(move){
    disableBtns();
    const btnMove = document.getElementById(move);
    const opponentMove = iaMove();
    const result =  moves[move][opponentMove];
    const textMessage = `you ${result}, ${machineMove[opponentMove]}`;

    btnMove.classList.add(result);
    setTimeout(() => btnMove.classList.remove(result), 2000);
    
    setMessage(textMessage, result);

    if(result === "win") user++;
    else if(result === "loss")  machine++;

    changeScore();
}


function iaMove(){
    const iaMoves = ["rock", "paper", "scissors"];
    const iRaffle = Math.floor(Math.random() * iaMoves.length);
    return iaMoves[iRaffle]
}

function changeScore() {
    const pointsUser = document.querySelector(".points_user");
    const pointsMachine = document.querySelector(".points_machine");
    
    pointsUser.classList.remove("win", "loss");
    pointsMachine.classList.remove("win", "loss");
;    if(user > machine)
    {
        pointsUser.classList.add("win");
        pointsMachine.classList.add("loss");
    } else if(machine > user) {
        pointsMachine.classList.add("win");
        pointsUser.classList.add("loss");
    }

    pointsUser.innerText = user;
    pointsMachine.innerText = machine;
}

function setMessage(textMessage, result) {
    const retornoMessage = document.querySelector("p.result");
    retornoMessage.innerText =  textMessage;
    retornoMessage.classList.remove("win", "draw", "loss")
    retornoMessage.classList.add(result);
}
function disableBtns() {
    Array.from(btnsMove).forEach((btn) => {
        btn.classList.add("unavailable");
        setTimeout(() => btn.classList.remove("unavailable"),2000);
    });

}

